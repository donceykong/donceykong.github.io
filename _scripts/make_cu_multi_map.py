#!/usr/bin/env python3
"""
Build a downsampled semantic map of CU-Multi (main_campus, robot1) for the website.

Keyframes are selected every --keyframe-dist metres along the REGISTERED poses
(which are expressed in the lidar frame). Each keyframe scan is voxel-downsampled,
transformed into UTM, and accumulated; the accumulated map is voxel-downsampled
again (majority label per voxel).

Output (in --out-dir):
    main_campus_robot1_map.bin   uint32 N | int16 xyz[N*3] (decimetres, map-centred) | uint8 label[N]
    main_campus_robot1_traj.bin  uint32 M | int16 xyz[M*3] (same frame, every pose thinned to 1 m)
    main_campus_robot1_map.json  metadata (origin, scale, label names/colours, counts)

Usage:
    python3 _scripts/make_cu_multi_map.py
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


def main():
    p = argparse.ArgumentParser(description=__doc__.split("\n")[1])
    p.add_argument("--robot-dir",
                   default="/media/donceykong/doncey_ssd_02/datasets/CU_MULTI/main_campus/robot1")
    p.add_argument("--labels-subdir", default="robot1_main_campus_lidar_labels")
    p.add_argument("--poses", default="robot1_main_campus_REGISTERED_poses.csv")
    p.add_argument("--keyframe-dist", type=float, default=10.0)
    p.add_argument("--scan-voxel", type=float, default=1.0)
    p.add_argument("--map-voxel", type=float, default=1.0)
    p.add_argument("--max-range", type=float, default=0.0,
                   help="Drop points farther than this from the sensor (0 = keep all)")
    p.add_argument("--thumb", action=argparse.BooleanOptionalAction, default=True,
                   help="Also render a top-down transparent PNG thumbnail for the project card")
    p.add_argument("--out-dir", default=os.path.join(
        os.path.dirname(os.path.abspath(__file__)), "..", "assets", "projects", "cu_multi"))
    args = p.parse_args()

    scan_dir = os.path.join(args.robot_dir, "lidar_bin", "data")
    label_dir = os.path.join(args.robot_dir, args.labels_subdir)
    poses = np.loadtxt(os.path.join(args.robot_dir, args.poses), delimiter=",")
    scan_files = sorted(f for f in os.listdir(scan_dir) if f.endswith(".bin"))
    label_files = sorted(f for f in os.listdir(label_dir) if f.endswith(".bin"))
    n_avail = min(len(scan_files), len(label_files), len(poses))
    print(f"{len(poses)} poses, {len(scan_files)} scans, {len(label_files)} labels -> {n_avail} usable")

    indices = [0]
    last = poses[0, 1:4]
    for i in range(1, n_avail):
        if np.linalg.norm(poses[i, 1:4] - last) >= args.keyframe_dist:
            indices.append(i)
            last = poses[i, 1:4]
    print(f"{len(indices)} keyframes at {args.keyframe_dist} m")

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

    pts = np.concatenate(all_pts)
    lbl = np.concatenate(all_lbl)
    print(f"accumulated {len(pts):,} pts")
    pts, lbl = voxel_majority(pts, lbl, args.map_voxel)
    print(f"map after {args.map_voxel} m voxel: {len(pts):,} pts")

    origin = np.round(np.median(pts, axis=0), 1)
    q = np.round((pts - origin) / SCALE)
    assert np.abs(q).max() < 32767, "map too large for int16 at this scale"

    traj = [poses[0, 1:4]]
    for xyz in poses[1:, 1:4]:
        if np.linalg.norm(xyz - traj[-1]) >= 1.0:
            traj.append(xyz)
    traj = np.round((np.array(traj) - origin) / SCALE)

    os.makedirs(args.out_dir, exist_ok=True)
    stem = os.path.join(args.out_dir, "main_campus_robot1")
    with open(stem + "_map.bin", "wb") as f:
        np.array([len(q)], dtype=np.uint32).tofile(f)
        q.astype(np.int16).tofile(f)
        lbl.astype(np.uint8).tofile(f)
    with open(stem + "_traj.bin", "wb") as f:
        np.array([len(traj)], dtype=np.uint32).tofile(f)
        traj.astype(np.int16).tofile(f)

    counts = {int(k): int(v) for k, v in zip(*np.unique(lbl, return_counts=True))}
    meta = {
        "dataset": "CU-Multi", "env": "main_campus", "robot": "robot1",
        "crs": "EPSG:32613", "origin_utm": origin.tolist(), "scale_m": SCALE,
        "keyframe_dist_m": args.keyframe_dist, "scan_voxel_m": args.scan_voxel,
        "map_voxel_m": args.map_voxel, "keyframes": len(indices),
        "points": int(len(q)), "trajectory_points": int(len(traj)),
        "labels": {str(k): {"name": LABEL_NAMES[k], "color": LABEL_COLORS[k],
                            "count": counts.get(k, 0)} for k in LABEL_NAMES if k != 0},
    }
    with open(stem + "_map.json", "w") as f:
        json.dump(meta, f, indent=2)

    if args.thumb:
        render_thumb(q * SCALE, lbl, stem + "_thumb.png")

    print("label distribution:")
    for k, c in sorted(counts.items()):
        print(f"  {k:2d} {LABEL_NAMES[k]:13s} {c:>8,} ({100 * c / len(lbl):5.1f}%)")
    for ext in ("_map.bin", "_traj.bin", "_map.json") + (("_thumb.png",) if args.thumb else ()):
        print(f"wrote {stem + ext} ({os.path.getsize(stem + ext) / 1e6:.2f} MB)")


if __name__ == "__main__":
    main()
