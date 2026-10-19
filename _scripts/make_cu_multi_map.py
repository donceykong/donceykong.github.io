#!/usr/bin/env python3
"""
Build downsampled semantic maps of CU-Multi (main_campus) for the website.

For each robot, keyframes are selected every --keyframe-dist metres along the
REGISTERED poses (which are expressed in the lidar frame). Each keyframe scan is
voxel-downsampled, transformed into UTM, and accumulated; the accumulated map is
voxel-downsampled again (majority label per voxel). A combined map of all robots
is built the same way from every robot's accumulated scans. All maps share one
origin so they line up in the viewer.

Output (in --out-dir, <env> = main_campus):
    <env>_<robot>_map.bin   uint32 N | int16 xyz[N*3] (decimetres, map-centred) | uint8 label[N]
    <env>_all_map.bin       same format, all robots merged
    <env>_<robot>_traj.bin  uint32 M | int16 xyz[M*3] | float32 t[M] (s since the earliest start)
                            | float32 quat[M*4] (qx, qy, qz, qw; lidar orientation)
    <env>_map.json          manifest: origin, scale, labels, and one entry per dataset
    <env>_all_thumb.png     transparent top-down render for the project card

Usage:
    python3 _scripts/make_cu_multi_map.py
    python3 _scripts/make_cu_multi_map.py --robots robot1,robot3
"""

import argparse
import json
import os

import numpy as np
from scipy.spatial.transform import Rotation

LABEL_NAMES = {
    0: "unlabeled",  1: "road",       2: "sidewalk",   3: "parking",
    4: "other-ground", 5: "building", 6: "fence",      7: "terrain",
    8: "water",      9: "bridge",    10: "vehicle",   11: "tree",
    12: "stairs",
}
# Matches CU-Multi-Semantics/scripts/plot_semantic_map.py
LABEL_COLORS = {
    0:  [128, 128, 128],  1: [ 80,  80,  80],  2: [200, 160, 100],
    3:  [140, 100, 180],  4: [139,  90,  43],  5: [ 30, 120, 255],
    6:  [255, 165,   0],  7: [144, 238, 144],  8: [ 65, 105, 225],
    9:  [192, 192, 192], 10: [255,   0, 255], 11: [  0, 100,   0],
    12: [255, 128,   0],
}
SCALE = 0.1  # metres per int16 unit
# Matches CU-Multi-Semantics/scripts/plot_semantic_map.py ROBOT_COLORS
ROBOT_COLORS = {
    "robot1": [ 87, 227, 137],   # green
    "robot2": [192,  97, 203],   # purple
    "robot3": [255, 163,  72],   # orange
    "robot4": [ 98, 160, 234],   # blue
}


def voxel_majority(pts, labels, voxel):
    """Voxel-downsample to voxel centroids, keeping the most common label per voxel."""
    keys = np.floor(pts / voxel).astype(np.int64)
    _, inv = np.unique(keys, axis=0, return_inverse=True)
    inv = inv.ravel()
    n_vox = inv.max() + 1
    counts = np.bincount(inv, minlength=n_vox).astype(np.float64)
    centroid = np.stack([np.bincount(inv, weights=pts[:, k], minlength=n_vox)
                         for k in range(3)], axis=1) / counts[:, None]
    votes = np.zeros((n_vox, max(LABEL_NAMES) + 1), dtype=np.int32)
    np.add.at(votes, (inv, labels.astype(np.int64)), 1)
    return centroid, votes.argmax(axis=1).astype(np.uint8)


def render_thumb(pts, labels, path):
    """Top-down render on a transparent background, cropped to 3:2 for project cards."""
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt

    colors = np.array([LABEL_COLORS[int(k)] for k in labels]) / 255.0
    order = np.argsort(pts[:, 2])  # draw tall structure last
    lo, hi = np.percentile(pts[:, :2], [1, 99], axis=0)
    cx, cy = (lo + hi) / 2
    half_w = max(hi[0] - lo[0], 1.5 * (hi[1] - lo[1])) / 2 * 1.04
    half_h = half_w / 1.5

    fig = plt.figure(figsize=(9, 6), dpi=120)
    ax = fig.add_axes([0, 0, 1, 1])
    ax.scatter(pts[order, 0], pts[order, 1], c=colors[order], s=0.6, linewidths=0)
    ax.set_xlim(cx - half_w, cx + half_w)
    ax.set_ylim(cy - half_h, cy + half_h)
    ax.set_aspect("equal")
    ax.axis("off")
    fig.savefig(path, transparent=True)
    plt.close(fig)

    # Palette-quantise (keeping alpha) so the PNG stays small.
    from PIL import Image
    Image.open(path).quantize(256, method=Image.Quantize.FASTOCTREE).save(path, optimize=True)


def accumulate_robot(robot_dir, robot, env, args):
    """Return (UTM points, labels, keyframe count, poses) for one robot's keyframe scans."""
    scan_dir = os.path.join(robot_dir, "lidar_bin", "data")
    label_dir = os.path.join(robot_dir, f"{robot}_{env}_lidar_labels")
    poses = np.loadtxt(os.path.join(robot_dir, f"{robot}_{env}_REGISTERED_poses.csv"), delimiter=",")
    scan_files = sorted(f for f in os.listdir(scan_dir) if f.endswith(".bin"))
    label_files = sorted(f for f in os.listdir(label_dir) if f.endswith(".bin"))
    n_avail = min(len(scan_files), len(label_files), len(poses))
    print(f"{robot}: {len(poses)} poses, {len(scan_files)} scans, {len(label_files)} labels "
          f"-> {n_avail} usable")

    indices = [0]
    last = poses[0, 1:4]
    for i in range(1, n_avail):
        if np.linalg.norm(poses[i, 1:4] - last) >= args.keyframe_dist:
            indices.append(i)
            last = poses[i, 1:4]

    all_pts, all_lbl = [], []
    for idx in indices:
        pose = poses[idx]
        raw = np.fromfile(os.path.join(scan_dir, scan_files[idx]), dtype=np.float32).reshape(-1, 4)
        lbl = np.fromfile(os.path.join(label_dir, label_files[idx]), dtype=np.uint32) & 0xFFFF
        n = min(len(raw), len(lbl))
        xyz, lbl = raw[:n, :3].astype(np.float64), lbl[:n]

        keep = np.isfinite(xyz).all(axis=1) & (lbl != 0) & (np.abs(xyz).sum(axis=1) > 0)
        if args.max_range > 0:
            keep &= np.linalg.norm(xyz, axis=1) <= args.max_range
        xyz, lbl = xyz[keep], lbl[keep]
        if not len(xyz):
            continue

        # Voxelise in the sensor frame, then move into UTM.
        xyz, lbl = voxel_majority(xyz, lbl, args.scan_voxel)
        xyz = Rotation.from_quat(pose[4:8]).apply(xyz) + pose[1:4]
        all_pts.append(xyz)
        all_lbl.append(lbl)

    pts, lbl = np.concatenate(all_pts), np.concatenate(all_lbl)
    print(f"  {len(indices)} keyframes at {args.keyframe_dist} m, {len(pts):,} pts accumulated")
    return pts, lbl, len(indices), poses


def thin_trajectory(poses, step=1.0):
    """Keep poses at least `step` metres apart; returns (xyz, timestamps, quaternions)."""
    keep = [0]
    for i in range(1, len(poses)):
        if np.linalg.norm(poses[i, 1:4] - poses[keep[-1], 1:4]) >= step:
            keep.append(i)
    return poses[keep, 1:4], poses[keep, 0], poses[keep, 4:8]


def quantise(pts, origin):
    q = np.round((pts - origin) / SCALE)
    assert np.abs(q).max() < 32767, "map too large for int16 at this scale"
    return q.astype(np.int16)


def write_map(path, pts, lbl, origin):
    with open(path, "wb") as f:
        np.array([len(pts)], dtype=np.uint32).tofile(f)
        quantise(pts, origin).tofile(f)
        lbl.astype(np.uint8).tofile(f)


def main():
    p = argparse.ArgumentParser(description=__doc__.split("\n")[1])
    p.add_argument("--data-dir", default="/media/donceykong/doncey_ssd_02/datasets/CU_MULTI")
    p.add_argument("--env", default="main_campus")
    p.add_argument("--robots", default="robot1,robot2,robot3,robot4")
    p.add_argument("--keyframe-dist", type=float, default=10.0)
    p.add_argument("--scan-voxel", type=float, default=1.0)
    p.add_argument("--map-voxel", type=float, default=1.0)
    p.add_argument("--max-range", type=float, default=0.0,
                   help="Drop points farther than this from the sensor (0 = keep all)")
    p.add_argument("--thumb", action=argparse.BooleanOptionalAction, default=True,
                   help="Also render a top-down transparent PNG of the combined map for the project card")
    p.add_argument("--out-dir", default=os.path.join(
        os.path.dirname(os.path.abspath(__file__)), "..", "assets", "projects", "cu_multi"))
    args = p.parse_args()
    robots = [r.strip() for r in args.robots.split(",") if r.strip()]
    os.makedirs(args.out_dir, exist_ok=True)

    raw = {r: accumulate_robot(os.path.join(args.data_dir, args.env, r), r, args.env, args)
           for r in robots}
    maps = {r: voxel_majority(raw[r][0], raw[r][1], args.map_voxel) for r in robots}
    maps["all"] = voxel_majority(np.concatenate([raw[r][0] for r in robots]),
                                 np.concatenate([raw[r][1] for r in robots]), args.map_voxel)

    origin = np.round(np.median(maps["all"][0], axis=0), 1)
    t0 = min(raw[r][3][0, 0] for r in robots)

    def counts(lbl):
        return {str(int(k)): int(v) for k, v in zip(*np.unique(lbl, return_counts=True))}

    written = []
    datasets = []
    for key in ["all"] + robots:
        pts, lbl = maps[key]
        map_name = f"{args.env}_{key}_map.bin"
        write_map(os.path.join(args.out_dir, map_name), pts, lbl, origin)
        written.append(map_name)
        entry = {"id": key, "map": map_name, "points": int(len(pts)), "label_counts": counts(lbl)}
        if key == "all":
            entry.update(name="All robots", robots=robots,
                         keyframes=sum(raw[r][2] for r in robots))
        else:
            xyz, ts, quats = thin_trajectory(raw[key][3])
            traj_name = f"{args.env}_{key}_traj.bin"
            with open(os.path.join(args.out_dir, traj_name), "wb") as f:
                np.array([len(xyz)], dtype=np.uint32).tofile(f)
                quantise(xyz, origin).tofile(f)
                (ts - t0).astype(np.float32).tofile(f)
                quats.astype(np.float32).tofile(f)
            written.append(traj_name)
            path_m = float(np.linalg.norm(np.diff(raw[key][3][:, 1:4], axis=0), axis=1).sum())
            entry.update(name=f"Robot {key[5:]}" if key.startswith("robot") else key,
                         color=ROBOT_COLORS.get(key, [255, 255, 255]), traj=traj_name,
                         keyframes=raw[key][2], path_m=round(path_m, 1),
                         duration_s=round(float(ts[-1] - ts[0]), 1))
        datasets.append(entry)
        print(f"{key}: {len(pts):,} pts after {args.map_voxel} m voxel")

    manifest = {
        "dataset": "CU-Multi", "env": args.env, "crs": "EPSG:32613",
        "origin_utm": origin.tolist(), "scale_m": SCALE,
        "keyframe_dist_m": args.keyframe_dist, "scan_voxel_m": args.scan_voxel,
        "map_voxel_m": args.map_voxel,
        "labels": {str(k): {"name": LABEL_NAMES[k], "color": LABEL_COLORS[k]}
                   for k in LABEL_NAMES if k != 0},
        "datasets": datasets,
    }
    manifest_name = f"{args.env}_map.json"
    with open(os.path.join(args.out_dir, manifest_name), "w") as f:
        json.dump(manifest, f, indent=2)
    written.append(manifest_name)

    if args.thumb:
        thumb_name = f"{args.env}_all_thumb.png"
        pts, lbl = maps["all"]
        render_thumb(pts - origin, lbl, os.path.join(args.out_dir, thumb_name))
        written.append(thumb_name)

    for name in written:
        path = os.path.join(args.out_dir, name)
        print(f"wrote {path} ({os.path.getsize(path) / 1e6:.2f} MB)")


if __name__ == "__main__":
    main()
