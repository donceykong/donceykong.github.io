---
layout: project
title: CU-Multi Dataset
description: A multi-robot dataset for collaborative perception, with four synchronized robots, RTK-GPS ground truth, and dense semantic LiDAR labels across the CU Boulder campus.
img: assets/projects/cu_multi/main_image.png
card_img: assets/projects/cu_multi/main_campus_all_thumb.png
hero: false
category: Research · ARPG
links:
  - label: Read the paper
    url: https://arxiv.org/abs/2509.19463
# importance: 1
---

{% include semantic_map.html
   dir="assets/projects/cu_multi/voxel_0.5m/"
   envs="main_campus:Main Campus,kittredge_loop:Kittredge Loop"
   default="all"
   caption="Semantic LiDAR maps from the four robots at both CU-Multi sites. Switch between Main Campus and Kittredge Loop, pick one robot or all of them, and colour points by semantic class or by the robot that observed them. Scans are taken every 10 m along each ground-truth trajectory, downsampled to 0.5 m voxels, then merged and downsampled to 0.5 m again. The axes show each lidar's pose (x red, y green, z blue), replayed in sync about 60× faster than real time. Click a class to hide it." %}

## Overview

During my research, I saw that while multi-robot systems research was advancing quickly, the field had trouble benchmarking algorithms because few datasets capture realistic multi-robot team behavior. Many existing evaluations partitioned single-robot trajectories. That's useful, but it doesn't fully represent the collaborative perception that makes multi-robot systems effective.

This motivated me to develop CU-Multi, a dataset designed to give the research community better tools for evaluating multi-robot collaborative perception algorithms.

<figure>
  <img src="{{ '/assets/projects/cu_multi/main_image.png' | relative_url }}" alt="CU-Multi robot trajectories over the CU Boulder campus, with per-robot maps" loading="lazy">
  <figcaption>The four robots' trajectories across both campus sites, with each robot's individual map.</figcaption>
</figure>

## What CU-Multi offers

**Multi-robot collaboration**: The dataset has four synchronized robot runs with carefully designed overlap patterns that reflect realistic team operations. This addresses a limitation of existing datasets, where robots typically operate independently.

**Full sensor suite**: The dataset includes the sensors most commonly used in robotics research:
- RGB-D cameras for visual perception
- RTK GPS for precise positioning (especially valuable outdoors)
- Semantic LiDAR for 3D scene understanding
- High-quality ground-truth odometry for validation

**Large-scale data collection**: Data was collected over multiple days at two different outdoor sites on the CU Boulder campus. The varied environments test different aspects of multi-robot algorithms.

**Standardized evaluation**: A key goal was a benchmark that allows fair comparison across research groups. Controlled overlap patterns and dense semantic annotations give CU-Multi a foundation for evaluating multi-robot collaborative perception algorithms.

## Publication

**[CU-Multi: A Dataset for Multi-Robot Collaborative Perception](https://arxiv.org/abs/2509.19463)**<br>
Doncey Albin, Daniel McGann, Miles Mena, Annika Thomas, Harel Biggie, Xuefei Sun, Steve McGuire, Jonathan P. How, Christoffer Heckman<br>
<span style="color: var(--muted);">Under review</span>
