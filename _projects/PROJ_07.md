---
layout: page
title: CU-Multi Dataset
description: 
img: assets/projects/cu_multi/main_image.png
# importance: 1
# category: research projects
---

## Overview

During my research, I observed that while multi-robot systems research was advancing rapidly, the field faced challenges in benchmarking algorithms due to the limited availability of datasets that capture realistic multi-robot team behaviors. Many existing evaluations relied on partitioning single-robot trajectories, which, while useful, may not fully represent the collaborative perception that make multi-robot systems effective.

This motivated me to develop CU-Multi, a comprehensive dataset designed to provide the research community with better tools for evaluating multi-robot collaborative perception algorithms.

## What CU-Multi offers

**Multi-Robot Collaboration**: The dataset features four synchronized robot runs with carefully designed overlap patterns that reflect realistic team operations. This approach addresses the limitation of existing datasets where robots typically operate independently.

**Comprehensive Sensor Suite**: The dataset includes a full range of sensors commonly used in robotics research:
- RGB-D cameras for visual perception
- RTK GPS for precise positioning (particularly valuable for outdoor robotics)
- Semantic LiDAR for 3D scene understanding
- High-quality ground-truth odometry for validation

**Large-Scale Data Collection**: Data was collected over multiple days across two diverse outdoor sites on the CU Boulder campus, providing varied environments that test different aspects of multi-robot algorithms.

**Standardized Evaluation Framework**: A key objective was to create a benchmark that enables fair comparison across research groups. Through controlled overlap patterns and dense semantic annotations, CU-Multi provides a foundation for evaluating multi-robot collaborative perception algorithms.

## Publication

**Paper**: [CU-Multi: A Dataset for Multi-Robot Collaborative Perception](https://arxiv.org/abs/2509.19463)

**Authors**: Doncey Albin, Daniel McGann, Miles Mena, Annika Thomas, Harel Biggie, Xuefei Sun, Steve McGuire, Jonathan P. How, Christoffer Heckman

**Conference**: Under Review
