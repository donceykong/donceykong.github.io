---
layout: page
title: Wall-Tracking Autonomous Robot
description:
img: assets/projects/wall_tracking_robot.png
importance: 4
category: course projects
---

This was the semester project for the Advanced Robotics graduate course at CU. There were two options for a final projects: 

1) Simulate a car autonomously navigating a track in the Webots simulator.

2) Use a real RC-styled robot to navigate the basement of the Engineering Center at CU.

The team I joined preferred to get our hands dirty with ROS and attempt the second of these options. Our goals were to get first get the robot set up, then get 2D SLAM working, then get a controller working so that it could successfully run labs around the basement of the Engineering Center.

The robot we decided to use was the Amazon DeepRacer RC Car platform. This allowed us to circumvent many of the troubles that could have presented themselves if we decided to build the robot from scratch and focus more on the algorithic methods we learned during the course. 

<div style="text-align: center;">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/maw_dp09HE4?si=YQyIg4oEOdX6QLzL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

```stl
solid Mesh
  facet normal 0.000000 1.000000 0.000000
    outer loop
      vertex 40.000000 30.000000 0.000000
      vertex -40.000000 30.000000 0.000000
      vertex -40.000000 30.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 1.000000 -0.000000
    outer loop
      vertex 40.000000 30.000000 0.000000
      vertex -40.000000 30.000000 5.000000
      vertex 40.000000 30.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 47.730106 -26.343933 0.000000
      vertex 47.409512 -26.715590 0.000000
      vertex 47.071068 -27.071068 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 47.730106 -26.343933 0.000000
      vertex 47.071068 -27.071068 0.000000
      vertex 46.715591 -27.409512 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 45.956993 -28.032076 0.000000
      vertex 46.715591 -27.409512 0.000000
      vertex 46.343933 -27.730104 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 48.314697 -25.555702 0.000000
      vertex 48.032074 -25.956993 0.000000
      vertex 47.730106 -26.343933 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 45.141026 -28.577286 0.000000
      vertex 45.956993 -28.032076 0.000000
      vertex 45.555702 -28.314695 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 44.713966 -28.819212 0.000000
      vertex 45.956993 -28.032076 0.000000
      vertex 45.141026 -28.577286 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 44.275551 -29.039892 0.000000
      vertex 47.730106 -26.343933 0.000000
      vertex 46.715591 -27.409512 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 44.275551 -29.039892 0.000000
      vertex 46.715591 -27.409512 0.000000
      vertex 45.956993 -28.032076 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 44.275551 -29.039892 0.000000
      vertex 45.956993 -28.032076 0.000000
      vertex 44.713966 -28.819212 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 49.039894 -24.275551 0.000000
      vertex 48.819214 -24.713968 0.000000
      vertex 48.577286 -25.141027 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 43.826836 -29.238796 0.000000
      vertex 47.730106 -26.343933 0.000000
      vertex 44.275551 -29.039892 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 49.415440 -23.368898 0.000000
      vertex 49.238796 -23.826834 0.000000
      vertex 49.039894 -24.275551 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 49.415440 -23.368898 0.000000
      vertex 48.577286 -25.141027 0.000000
      vertex 48.314697 -25.555702 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 49.415440 -23.368898 0.000000
      vertex 49.039894 -24.275551 0.000000
      vertex 48.577286 -25.141027 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 49.569405 -22.902847 0.000000
      vertex 48.314697 -25.555702 0.000000
      vertex 47.730106 -26.343933 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 49.569405 -22.902847 0.000000
      vertex 49.415440 -23.368898 0.000000
      vertex 48.314697 -25.555702 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 42.429802 -29.700312 0.000000
      vertex 43.368900 -29.415442 0.000000
      vertex 42.902847 -29.569403 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 49.807854 -21.950903 0.000000
      vertex 49.700314 -22.429802 0.000000
      vertex 49.569405 -22.902847 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 41.467304 -29.891766 0.000000
      vertex 43.368900 -29.415442 0.000000
      vertex 42.429802 -29.700312 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 41.467304 -29.891766 0.000000
      vertex 42.429802 -29.700312 0.000000
      vertex 41.950905 -29.807854 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 49.891766 -21.467304 0.000000
      vertex 49.807854 -21.950903 0.000000
      vertex 49.569405 -22.902847 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 49.951847 -20.980171 0.000000
      vertex 49.891766 -21.467304 0.000000
      vertex 49.569405 -22.902847 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 50.000000 -20.000000 0.000000
      vertex 49.987953 -20.490677 0.000000
      vertex 49.951847 -20.980171 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 50.000000 -20.000000 0.000000
      vertex 49.951847 -20.980171 0.000000
      vertex 49.569405 -22.902847 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 40.000000 -30.000000 0.000000
      vertex 49.569405 -22.902847 0.000000
      vertex 47.730106 -26.343933 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 40.000000 -30.000000 0.000000
      vertex 43.368900 -29.415442 0.000000
      vertex 41.467304 -29.891766 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 40.000000 -30.000000 0.000000
      vertex 50.000000 -20.000000 0.000000
      vertex 49.569405 -22.902847 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 40.000000 -30.000000 0.000000
      vertex 43.826836 -29.238796 0.000000
      vertex 43.368900 -29.415442 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 40.000000 -30.000000 0.000000
      vertex 41.467304 -29.891766 0.000000
      vertex 40.980171 -29.951847 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 40.000000 -30.000000 0.000000
      vertex 40.980171 -29.951847 0.000000
      vertex 40.490677 -29.987955 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 40.000000 -30.000000 0.000000
      vertex 47.730106 -26.343933 0.000000
      vertex 43.826836 -29.238796 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex 50.000000 20.000000 0.000000
      vertex 50.000000 -20.000000 0.000000
      vertex 40.000000 -30.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 49.951847 20.980171 0.000000
      vertex 49.987953 20.490677 0.000000
      vertex 50.000000 20.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 49.891766 21.467304 0.000000
      vertex 49.951847 20.980171 0.000000
      vertex 50.000000 20.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 49.569405 22.902847 0.000000
      vertex 49.700314 22.429802 0.000000
      vertex 49.807854 21.950903 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 49.569405 22.902847 0.000000
      vertex 49.807854 21.950903 0.000000
      vertex 49.891766 21.467304 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 49.238796 23.826834 0.000000
      vertex 49.415440 23.368898 0.000000
      vertex 49.569405 22.902847 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 49.238796 23.826834 0.000000
      vertex 49.891766 21.467304 0.000000
      vertex 50.000000 20.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 49.238796 23.826834 0.000000
      vertex 49.569405 22.902847 0.000000
      vertex 49.891766 21.467304 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 49.039894 24.275551 0.000000
      vertex 49.238796 23.826834 0.000000
      vertex 50.000000 20.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 48.819214 24.713968 0.000000
      vertex 49.039894 24.275551 0.000000
      vertex 50.000000 20.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 48.314697 25.555702 0.000000
      vertex 48.577286 25.141027 0.000000
      vertex 48.819214 24.713968 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 48.314697 25.555702 0.000000
      vertex 48.819214 24.713968 0.000000
      vertex 50.000000 20.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 47.730106 26.343933 0.000000
      vertex 48.032074 25.956993 0.000000
      vertex 48.314697 25.555702 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 47.730106 26.343933 0.000000
      vertex 48.314697 25.555702 0.000000
      vertex 50.000000 20.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 46.715591 27.409512 0.000000
      vertex 47.071068 27.071068 0.000000
      vertex 47.409512 26.715590 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 46.715591 27.409512 0.000000
      vertex 47.409512 26.715590 0.000000
      vertex 47.730106 26.343933 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 45.956993 28.032076 0.000000
      vertex 46.343933 27.730104 0.000000
      vertex 46.715591 27.409512 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 45.555702 28.314695 0.000000
      vertex 47.730106 26.343933 0.000000
      vertex 50.000000 20.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 45.555702 28.314695 0.000000
      vertex 46.715591 27.409512 0.000000
      vertex 47.730106 26.343933 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 45.555702 28.314695 0.000000
      vertex 45.956993 28.032076 0.000000
      vertex 46.715591 27.409512 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 44.275551 29.039892 0.000000
      vertex 44.713966 28.819212 0.000000
      vertex 45.141026 28.577286 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 44.275551 29.039892 0.000000
      vertex 45.141026 28.577286 0.000000
      vertex 45.555702 28.314695 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 44.275551 29.039892 0.000000
      vertex 45.555702 28.314695 0.000000
      vertex 50.000000 20.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 43.368900 29.415442 0.000000
      vertex 43.826836 29.238796 0.000000
      vertex 44.275551 29.039892 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 42.902847 29.569403 0.000000
      vertex 44.275551 29.039892 0.000000
      vertex 50.000000 20.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 42.902847 29.569403 0.000000
      vertex 43.368900 29.415442 0.000000
      vertex 44.275551 29.039892 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 41.467304 29.891766 0.000000
      vertex 41.950905 29.807854 0.000000
      vertex 42.429802 29.700312 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 41.467304 29.891766 0.000000
      vertex 42.429802 29.700312 0.000000
      vertex 42.902847 29.569403 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 41.467304 29.891766 0.000000
      vertex 42.902847 29.569403 0.000000
      vertex 50.000000 20.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 40.490677 29.987955 0.000000
      vertex 40.980171 29.951847 0.000000
      vertex 41.467304 29.891766 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 40.000000 30.000000 0.000000
      vertex 50.000000 20.000000 0.000000
      vertex 40.000000 -30.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 40.000000 30.000000 0.000000
      vertex 41.467304 29.891766 0.000000
      vertex 50.000000 20.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex 40.000000 30.000000 0.000000
      vertex 40.490677 29.987955 0.000000
      vertex 41.467304 29.891766 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -40.980171 -29.951847 0.000000
      vertex -40.000000 -30.000000 0.000000
      vertex -40.490677 -29.987955 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -42.429802 -29.700312 0.000000
      vertex -41.467304 -29.891766 0.000000
      vertex -41.950905 -29.807854 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -42.429802 -29.700312 0.000000
      vertex -40.980171 -29.951847 0.000000
      vertex -41.467304 -29.891766 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -44.275551 -29.039892 0.000000
      vertex -40.980171 -29.951847 0.000000
      vertex -42.429802 -29.700312 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -44.275551 -29.039892 0.000000
      vertex -43.368900 -29.415442 0.000000
      vertex -43.826836 -29.238796 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -44.275551 -29.039892 0.000000
      vertex -42.902847 -29.569403 0.000000
      vertex -43.368900 -29.415442 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -44.275551 -29.039892 0.000000
      vertex -42.429802 -29.700312 0.000000
      vertex -42.902847 -29.569403 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -44.275551 -29.039892 0.000000
      vertex -40.000000 -30.000000 0.000000
      vertex -40.980171 -29.951847 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -45.141026 -28.577286 0.000000
      vertex -40.000000 -30.000000 0.000000
      vertex -44.275551 -29.039892 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -45.141026 -28.577286 0.000000
      vertex -44.275551 -29.039892 0.000000
      vertex -44.713966 -28.819212 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -45.555702 -28.314695 0.000000
      vertex -40.000000 -30.000000 0.000000
      vertex -45.141026 -28.577286 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -45.956993 -28.032076 0.000000
      vertex -40.000000 -30.000000 0.000000
      vertex -45.555702 -28.314695 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -46.715591 -27.409512 0.000000
      vertex -45.956993 -28.032076 0.000000
      vertex -46.343933 -27.730104 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -47.409512 -26.715590 0.000000
      vertex -45.956993 -28.032076 0.000000
      vertex -46.715591 -27.409512 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -47.409512 -26.715590 0.000000
      vertex -46.715591 -27.409512 0.000000
      vertex -47.071068 -27.071068 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -47.730106 -26.343933 0.000000
      vertex -45.956993 -28.032076 0.000000
      vertex -47.409512 -26.715590 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -48.314697 -25.555702 0.000000
      vertex -47.730106 -26.343933 0.000000
      vertex -48.032074 -25.956993 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -48.819214 -24.713968 0.000000
      vertex -47.730106 -26.343933 0.000000
      vertex -48.314697 -25.555702 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -48.819214 -24.713968 0.000000
      vertex -48.314697 -25.555702 0.000000
      vertex -48.577286 -25.141027 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -49.039894 -24.275551 0.000000
      vertex -45.956993 -28.032076 0.000000
      vertex -47.730106 -26.343933 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -49.039894 -24.275551 0.000000
      vertex -47.730106 -26.343933 0.000000
      vertex -48.819214 -24.713968 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -49.569405 -22.902847 0.000000
      vertex -49.238796 -23.826834 0.000000
      vertex -49.415440 -23.368898 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -49.569405 -22.902847 0.000000
      vertex -49.039894 -24.275551 0.000000
      vertex -49.238796 -23.826834 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -49.807854 -21.950903 0.000000
      vertex -49.039894 -24.275551 0.000000
      vertex -49.569405 -22.902847 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -49.807854 -21.950903 0.000000
      vertex -49.569405 -22.902847 0.000000
      vertex -49.700314 -22.429802 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -49.891766 -21.467304 0.000000
      vertex -40.000000 -30.000000 0.000000
      vertex -45.956993 -28.032076 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -49.891766 -21.467304 0.000000
      vertex -45.956993 -28.032076 0.000000
      vertex -49.039894 -24.275551 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -49.891766 -21.467304 0.000000
      vertex -49.039894 -24.275551 0.000000
      vertex -49.807854 -21.950903 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -49.987953 -20.490677 0.000000
      vertex -49.891766 -21.467304 0.000000
      vertex -49.951847 -20.980171 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -50.000000 -20.000000 0.000000
      vertex -40.000000 -30.000000 0.000000
      vertex -49.891766 -21.467304 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -50.000000 -20.000000 0.000000
      vertex -49.891766 -21.467304 0.000000
      vertex -49.987953 -20.490677 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -25.887659 8.069764 0.000000
      vertex 40.000000 -30.000000 0.000000
      vertex -26.257742 7.690335 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -26.646280 7.329826 0.000000
      vertex -26.257742 7.690335 0.000000
      vertex 40.000000 -30.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -26.646280 7.329826 0.000000
      vertex 40.000000 -30.000000 0.000000
      vertex -40.000000 -30.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -25.536947 8.467168 0.000000
      vertex 40.000000 -30.000000 0.000000
      vertex -25.887659 8.069764 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -27.052303 6.989131 0.000000
      vertex -26.646280 7.329826 0.000000
      vertex -40.000000 -30.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -25.206482 8.881559 0.000000
      vertex 40.000000 -30.000000 0.000000
      vertex -25.536947 8.467168 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -27.474804 6.669099 0.000000
      vertex -27.052303 6.989131 0.000000
      vertex -40.000000 -30.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -24.897081 9.311908 0.000000
      vertex 40.000000 -30.000000 0.000000
      vertex -25.206482 8.881559 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -27.912733 6.370524 0.000000
      vertex -27.474804 6.669099 0.000000
      vertex -40.000000 -30.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -24.609518 9.757144 0.000000
      vertex 40.000000 -30.000000 0.000000
      vertex -24.897081 9.311908 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -28.365000 6.094150 0.000000
      vertex -27.912733 6.370524 0.000000
      vertex -40.000000 -30.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -24.344505 10.216160 0.000000
      vertex 40.000000 -30.000000 0.000000
      vertex -24.609518 9.757144 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -28.830481 5.840662 0.000000
      vertex -28.365000 6.094150 0.000000
      vertex -40.000000 -30.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -24.102701 10.687816 0.000000
      vertex 40.000000 -30.000000 0.000000
      vertex -24.344505 10.216160 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -29.308018 5.610693 0.000000
      vertex -28.830481 5.840662 0.000000
      vertex -40.000000 -30.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -23.884708 11.170938 0.000000
      vertex 40.000000 -30.000000 0.000000
      vertex -24.102701 10.687816 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -29.796425 5.404812 0.000000
      vertex -29.308018 5.610693 0.000000
      vertex -40.000000 -30.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -23.691067 11.664326 0.000000
      vertex 40.000000 -30.000000 0.000000
      vertex -23.884708 11.170938 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -30.294487 5.223532 0.000000
      vertex -29.796425 5.404812 0.000000
      vertex -40.000000 -30.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -23.522261 12.166753 0.000000
      vertex 40.000000 30.000000 0.000000
      vertex 40.000000 -30.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -23.522261 12.166753 0.000000
      vertex 40.000000 -30.000000 0.000000
      vertex -23.691067 11.664326 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -30.800966 5.067304 0.000000
      vertex -30.294487 5.223532 0.000000
      vertex -40.000000 -30.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -23.378708 12.676969 0.000000
      vertex 40.000000 30.000000 0.000000
      vertex -23.522261 12.166753 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -31.314602 4.936516 0.000000
      vertex -30.800966 5.067304 0.000000
      vertex -40.000000 -30.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -23.260767 13.193707 0.000000
      vertex 40.000000 30.000000 0.000000
      vertex -23.378708 12.676969 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -31.834120 4.831493 0.000000
      vertex -31.314602 4.936516 0.000000
      vertex -40.000000 -30.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -23.168728 13.715681 0.000000
      vertex 40.000000 30.000000 0.000000
      vertex -23.260767 13.193707 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -32.358227 4.752497 0.000000
      vertex -31.834120 4.831493 0.000000
      vertex -40.000000 -30.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -23.102823 14.241593 0.000000
      vertex 40.000000 30.000000 0.000000
      vertex -23.168728 13.715681 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -32.885620 4.699724 0.000000
      vertex -32.358227 4.752497 0.000000
      vertex -40.000000 -30.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -23.063213 14.770138 0.000000
      vertex 40.000000 30.000000 0.000000
      vertex -23.102823 14.241593 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -33.414986 4.673304 0.000000
      vertex -40.000000 -30.000000 0.000000
      vertex -50.000000 -20.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -33.414986 4.673304 0.000000
      vertex -32.885620 4.699724 0.000000
      vertex -40.000000 -30.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -23.049999 15.300000 0.000000
      vertex 40.000000 30.000000 0.000000
      vertex -23.063213 14.770138 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -33.945015 4.673304 0.000000
      vertex -33.414986 4.673304 0.000000
      vertex -50.000000 -20.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -23.063213 15.829862 0.000000
      vertex 40.000000 30.000000 0.000000
      vertex -23.049999 15.300000 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -34.474380 4.699724 0.000000
      vertex -33.945015 4.673304 0.000000
      vertex -50.000000 -20.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -23.102823 16.358406 0.000000
      vertex 40.000000 30.000000 0.000000
      vertex -23.063213 15.829862 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -35.001774 4.752497 0.000000
      vertex -34.474380 4.699724 0.000000
      vertex -50.000000 -20.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -23.168728 16.884319 0.000000
      vertex 40.000000 30.000000 0.000000
      vertex -23.102823 16.358406 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -35.525879 4.831493 0.000000
      vertex -35.001774 4.752497 0.000000
      vertex -50.000000 -20.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -23.260767 17.406294 0.000000
      vertex 40.000000 30.000000 0.000000
      vertex -23.168728 16.884319 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -36.045399 4.936516 0.000000
      vertex -35.525879 4.831493 0.000000
      vertex -50.000000 -20.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -23.378708 17.923031 0.000000
      vertex 40.000000 30.000000 0.000000
      vertex -23.260767 17.406294 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -36.559032 5.067304 0.000000
      vertex -36.045399 4.936516 0.000000
      vertex -50.000000 -20.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -23.522261 18.433247 0.000000
      vertex 40.000000 30.000000 0.000000
      vertex -23.378708 17.923031 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -37.065514 5.223532 0.000000
      vertex -36.559032 5.067304 0.000000
      vertex -50.000000 -20.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -23.691067 18.935675 0.000000
      vertex 40.000000 30.000000 0.000000
      vertex -23.522261 18.433247 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -37.563576 5.404812 0.000000
      vertex -37.065514 5.223532 0.000000
      vertex -50.000000 -20.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -23.884708 19.429062 0.000000
      vertex 40.000000 30.000000 0.000000
      vertex -23.691067 18.935675 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -38.051983 5.610693 0.000000
      vertex -37.563576 5.404812 0.000000
      vertex -50.000000 -20.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -24.102701 19.912184 0.000000
      vertex 40.000000 30.000000 0.000000
      vertex -23.884708 19.429062 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -38.529518 5.840662 0.000000
      vertex -38.051983 5.610693 0.000000
      vertex -50.000000 -20.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -24.344505 20.383841 0.000000
      vertex 40.000000 30.000000 0.000000
      vertex -24.102701 19.912184 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -38.994999 6.094150 0.000000
      vertex -38.529518 5.840662 0.000000
      vertex -50.000000 -20.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -24.609518 20.842855 0.000000
      vertex 40.000000 30.000000 0.000000
      vertex -24.344505 20.383841 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -39.447266 6.370524 0.000000
      vertex -38.994999 6.094150 0.000000
      vertex -50.000000 -20.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -24.897081 21.288092 0.000000
      vertex 40.000000 30.000000 0.000000
      vertex -24.609518 20.842855 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -39.885197 6.669099 0.000000
      vertex -39.447266 6.370524 0.000000
      vertex -50.000000 -20.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -25.206482 21.718441 0.000000
      vertex 40.000000 30.000000 0.000000
      vertex -24.897081 21.288092 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -40.307697 6.989131 0.000000
      vertex -39.885197 6.669099 0.000000
      vertex -50.000000 -20.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -25.536947 22.132832 0.000000
      vertex 40.000000 30.000000 0.000000
      vertex -25.206482 21.718441 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -40.713722 7.329826 0.000000
      vertex -40.307697 6.989131 0.000000
      vertex -50.000000 -20.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -25.887659 22.530235 0.000000
      vertex 40.000000 30.000000 0.000000
      vertex -25.536947 22.132832 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -41.102257 7.690335 0.000000
      vertex -40.713722 7.329826 0.000000
      vertex -50.000000 -20.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -26.257742 22.909664 0.000000
      vertex 40.000000 30.000000 0.000000
      vertex -25.887659 22.530235 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -41.472340 8.069764 0.000000
      vertex -41.102257 7.690335 0.000000
      vertex -50.000000 -20.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -26.646280 23.270174 0.000000
      vertex 40.000000 30.000000 0.000000
      vertex -26.257742 22.909664 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -41.823051 8.467168 0.000000
      vertex -41.472340 8.069764 0.000000
      vertex -50.000000 -20.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -27.052303 23.610868 0.000000
      vertex 40.000000 30.000000 0.000000
      vertex -26.646280 23.270174 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -42.153519 8.881559 0.000000
      vertex -41.823051 8.467168 0.000000
      vertex -50.000000 -20.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -27.474804 23.930901 0.000000
      vertex 40.000000 30.000000 0.000000
      vertex -27.052303 23.610868 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -42.462917 9.311908 0.000000
      vertex -42.153519 8.881559 0.000000
      vertex -50.000000 -20.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -27.912733 24.229475 0.000000
      vertex 40.000000 30.000000 0.000000
      vertex -27.474804 23.930901 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -42.750481 9.757144 0.000000
      vertex -42.462917 9.311908 0.000000
      vertex -50.000000 -20.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -43.015495 10.216160 0.000000
      vertex -42.750481 9.757144 0.000000
      vertex -50.000000 -20.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -43.257298 10.687816 0.000000
      vertex -43.015495 10.216160 0.000000
      vertex -50.000000 -20.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -43.475292 11.170938 0.000000
      vertex -43.257298 10.687816 0.000000
      vertex -50.000000 -20.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -50.000000 20.000000 0.000000
      vertex -43.837738 12.166753 0.000000
      vertex -43.668934 11.664326 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -50.000000 20.000000 0.000000
      vertex -43.668934 11.664326 0.000000
      vertex -43.475292 11.170938 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -50.000000 20.000000 0.000000
      vertex -43.475292 11.170938 0.000000
      vertex -50.000000 -20.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -50.000000 20.000000 0.000000
      vertex -43.668934 18.935675 0.000000
      vertex -43.837738 18.433247 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -50.000000 20.000000 0.000000
      vertex -43.837738 18.433247 0.000000
      vertex -43.981293 17.923031 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -50.000000 20.000000 0.000000
      vertex -43.981293 17.923031 0.000000
      vertex -44.099232 17.406294 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -50.000000 20.000000 0.000000
      vertex -44.099232 17.406294 0.000000
      vertex -44.191273 16.884319 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -50.000000 20.000000 0.000000
      vertex -44.191273 16.884319 0.000000
      vertex -44.257175 16.358406 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -50.000000 20.000000 0.000000
      vertex -44.257175 16.358406 0.000000
      vertex -44.296787 15.829862 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -50.000000 20.000000 0.000000
      vertex -44.296787 15.829862 0.000000
      vertex -44.310001 15.300000 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -50.000000 20.000000 0.000000
      vertex -44.310001 15.300000 0.000000
      vertex -44.296787 14.770138 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -50.000000 20.000000 0.000000
      vertex -44.296787 14.770138 0.000000
      vertex -44.257175 14.241593 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -50.000000 20.000000 0.000000
      vertex -44.257175 14.241593 0.000000
      vertex -44.191273 13.715681 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -50.000000 20.000000 0.000000
      vertex -44.191273 13.715681 0.000000
      vertex -44.099232 13.193707 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -50.000000 20.000000 0.000000
      vertex -44.099232 13.193707 0.000000
      vertex -43.981293 12.676969 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -50.000000 20.000000 0.000000
      vertex -43.981293 12.676969 0.000000
      vertex -43.837738 12.166753 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -40.000000 30.000000 0.000000
      vertex -30.294487 25.376467 0.000000
      vertex -30.800966 25.532696 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -40.000000 30.000000 0.000000
      vertex -30.800966 25.532696 0.000000
      vertex -31.314602 25.663485 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -40.000000 30.000000 0.000000
      vertex -31.314602 25.663485 0.000000
      vertex -31.834120 25.768507 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -40.000000 30.000000 0.000000
      vertex -31.834120 25.768507 0.000000
      vertex -32.358227 25.847504 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -40.000000 30.000000 0.000000
      vertex -32.358227 25.847504 0.000000
      vertex -32.885620 25.900276 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -40.000000 30.000000 0.000000
      vertex -32.885620 25.900276 0.000000
      vertex -33.414986 25.926697 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -40.000000 30.000000 0.000000
      vertex -33.414986 25.926697 0.000000
      vertex -33.945015 25.926697 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -40.000000 30.000000 0.000000
      vertex -33.945015 25.926697 0.000000
      vertex -34.474380 25.900276 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -40.000000 30.000000 0.000000
      vertex -34.474380 25.900276 0.000000
      vertex -35.001774 25.847504 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -40.000000 30.000000 0.000000
      vertex -35.001774 25.847504 0.000000
      vertex -35.525879 25.768507 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -40.000000 30.000000 0.000000
      vertex -35.525879 25.768507 0.000000
      vertex -36.045399 25.663485 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -40.000000 30.000000 0.000000
      vertex -36.045399 25.663485 0.000000
      vertex -36.559032 25.532696 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -40.000000 30.000000 0.000000
      vertex -36.559032 25.532696 0.000000
      vertex -37.065514 25.376467 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -40.000000 30.000000 0.000000
      vertex -37.065514 25.376467 0.000000
      vertex -37.563576 25.195189 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -40.000000 30.000000 0.000000
      vertex -37.563576 25.195189 0.000000
      vertex -38.051983 24.989307 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -40.000000 30.000000 0.000000
      vertex -38.051983 24.989307 0.000000
      vertex -38.529518 24.759336 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -40.000000 30.000000 0.000000
      vertex -38.529518 24.759336 0.000000
      vertex -38.994999 24.505850 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -40.490677 29.987955 0.000000
      vertex -40.000000 30.000000 0.000000
      vertex -38.994999 24.505850 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -49.987953 20.490677 0.000000
      vertex -43.668934 18.935675 0.000000
      vertex -50.000000 20.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -49.987953 20.490677 0.000000
      vertex -43.475292 19.429062 0.000000
      vertex -43.668934 18.935675 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -40.980171 29.951847 0.000000
      vertex -40.490677 29.987955 0.000000
      vertex -38.994999 24.505850 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -40.980171 29.951847 0.000000
      vertex -38.994999 24.505850 0.000000
      vertex -39.447266 24.229475 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -49.951847 20.980171 0.000000
      vertex -43.475292 19.429062 0.000000
      vertex -49.987953 20.490677 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -41.467304 29.891766 0.000000
      vertex -40.980171 29.951847 0.000000
      vertex -39.447266 24.229475 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -49.891766 21.467304 0.000000
      vertex -43.475292 19.429062 0.000000
      vertex -49.951847 20.980171 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -49.891766 21.467304 0.000000
      vertex -43.257298 19.912184 0.000000
      vertex -43.475292 19.429062 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -41.950905 29.807854 0.000000
      vertex -41.467304 29.891766 0.000000
      vertex -39.447266 24.229475 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -41.950905 29.807854 0.000000
      vertex -39.447266 24.229475 0.000000
      vertex -39.885197 23.930901 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -49.807854 21.950903 0.000000
      vertex -43.257298 19.912184 0.000000
      vertex -49.891766 21.467304 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -42.429802 29.700312 0.000000
      vertex -41.950905 29.807854 0.000000
      vertex -39.885197 23.930901 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -49.700314 22.429802 0.000000
      vertex -43.257298 19.912184 0.000000
      vertex -49.807854 21.950903 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -42.902847 29.569403 0.000000
      vertex -42.429802 29.700312 0.000000
      vertex -39.885197 23.930901 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -42.902847 29.569403 0.000000
      vertex -39.885197 23.930901 0.000000
      vertex -40.307697 23.610868 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -49.569405 22.902847 0.000000
      vertex -43.257298 19.912184 0.000000
      vertex -49.700314 22.429802 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -49.569405 22.902847 0.000000
      vertex -43.015495 20.383841 0.000000
      vertex -43.257298 19.912184 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -43.368900 29.415442 0.000000
      vertex -42.902847 29.569403 0.000000
      vertex -40.307697 23.610868 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -49.415440 23.368898 0.000000
      vertex -43.015495 20.383841 0.000000
      vertex -49.569405 22.902847 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -43.826836 29.238796 0.000000
      vertex -43.368900 29.415442 0.000000
      vertex -40.307697 23.610868 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -49.238796 23.826834 0.000000
      vertex -43.015495 20.383841 0.000000
      vertex -49.415440 23.368898 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -49.238796 23.826834 0.000000
      vertex -42.750481 20.842855 0.000000
      vertex -43.015495 20.383841 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -44.275551 29.039892 0.000000
      vertex -43.826836 29.238796 0.000000
      vertex -40.307697 23.610868 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -44.275551 29.039892 0.000000
      vertex -40.307697 23.610868 0.000000
      vertex -40.713722 23.270174 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -49.039894 24.275551 0.000000
      vertex -42.750481 20.842855 0.000000
      vertex -49.238796 23.826834 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -44.713966 28.819212 0.000000
      vertex -44.275551 29.039892 0.000000
      vertex -40.713722 23.270174 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -48.819214 24.713968 0.000000
      vertex -42.750481 20.842855 0.000000
      vertex -49.039894 24.275551 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -48.819214 24.713968 0.000000
      vertex -42.462917 21.288092 0.000000
      vertex -42.750481 20.842855 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -45.141026 28.577286 0.000000
      vertex -44.713966 28.819212 0.000000
      vertex -40.713722 23.270174 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -45.141026 28.577286 0.000000
      vertex -40.713722 23.270174 0.000000
      vertex -41.102257 22.909664 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -48.577286 25.141027 0.000000
      vertex -42.462917 21.288092 0.000000
      vertex -48.819214 24.713968 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -45.555702 28.314695 0.000000
      vertex -45.141026 28.577286 0.000000
      vertex -41.102257 22.909664 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -48.314697 25.555702 0.000000
      vertex -42.462917 21.288092 0.000000
      vertex -48.577286 25.141027 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -48.314697 25.555702 0.000000
      vertex -42.153519 21.718441 0.000000
      vertex -42.462917 21.288092 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -45.956993 28.032076 0.000000
      vertex -45.555702 28.314695 0.000000
      vertex -41.102257 22.909664 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -45.956993 28.032076 0.000000
      vertex -41.102257 22.909664 0.000000
      vertex -41.472340 22.530235 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -48.032074 25.956993 0.000000
      vertex -42.153519 21.718441 0.000000
      vertex -48.314697 25.555702 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -46.343933 27.730104 0.000000
      vertex -45.956993 28.032076 0.000000
      vertex -41.472340 22.530235 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -47.730106 26.343933 0.000000
      vertex -42.153519 21.718441 0.000000
      vertex -48.032074 25.956993 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -46.715591 27.409512 0.000000
      vertex -46.343933 27.730104 0.000000
      vertex -41.472340 22.530235 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -46.715591 27.409512 0.000000
      vertex -41.472340 22.530235 0.000000
      vertex -41.823051 22.132832 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -47.409512 26.715590 0.000000
      vertex -42.153519 21.718441 0.000000
      vertex -47.730106 26.343933 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -47.409512 26.715590 0.000000
      vertex -41.823051 22.132832 0.000000
      vertex -42.153519 21.718441 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 -1.000000
    outer loop
      vertex -47.071068 27.071068 0.000000
      vertex -41.823051 22.132832 0.000000
      vertex -47.409512 26.715590 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -47.071068 27.071068 0.000000
      vertex -46.715591 27.409512 0.000000
      vertex -41.823051 22.132832 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -40.000000 30.000000 0.000000
      vertex 40.000000 30.000000 0.000000
      vertex -30.294487 25.376467 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -30.294487 25.376467 0.000000
      vertex 40.000000 30.000000 0.000000
      vertex -29.796425 25.195189 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -29.796425 25.195189 0.000000
      vertex 40.000000 30.000000 0.000000
      vertex -29.308018 24.989307 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -29.308018 24.989307 0.000000
      vertex 40.000000 30.000000 0.000000
      vertex -28.830481 24.759336 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -28.830481 24.759336 0.000000
      vertex 40.000000 30.000000 0.000000
      vertex -28.365000 24.505850 0.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 -1.000000
    outer loop
      vertex -28.365000 24.505850 0.000000
      vertex 40.000000 30.000000 0.000000
      vertex -27.912733 24.229475 0.000000
    endloop
  endfacet
  facet normal -0.024540 0.999699 0.000000
    outer loop
      vertex -40.490677 29.987955 5.000000
      vertex -40.000000 30.000000 0.000000
      vertex -40.490677 29.987955 0.000000
    endloop
  endfacet
  facet normal -0.024540 0.999699 0.000000
    outer loop
      vertex -40.490677 29.987955 5.000000
      vertex -40.000000 30.000000 5.000000
      vertex -40.000000 30.000000 0.000000
    endloop
  endfacet
  facet normal -0.073566 0.997290 0.000000
    outer loop
      vertex -40.980171 29.951847 5.000000
      vertex -40.490677 29.987955 0.000000
      vertex -40.980171 29.951847 0.000000
    endloop
  endfacet
  facet normal -0.122409 0.992480 0.000000
    outer loop
      vertex -40.980171 29.951847 5.000000
      vertex -40.980171 29.951847 0.000000
      vertex -41.467304 29.891766 0.000000
    endloop
  endfacet
  facet normal -0.073566 0.997290 0.000000
    outer loop
      vertex -40.980171 29.951847 5.000000
      vertex -40.490677 29.987955 5.000000
      vertex -40.490677 29.987955 0.000000
    endloop
  endfacet
  facet normal -0.122409 0.992480 0.000000
    outer loop
      vertex -41.467304 29.891766 5.000000
      vertex -40.980171 29.951847 5.000000
      vertex -41.467304 29.891766 0.000000
    endloop
  endfacet
  facet normal -0.170960 0.985278 0.000000
    outer loop
      vertex -41.950905 29.807854 5.000000
      vertex -41.467304 29.891766 0.000000
      vertex -41.950905 29.807854 0.000000
    endloop
  endfacet
  facet normal -0.170960 0.985278 0.000000
    outer loop
      vertex -41.950905 29.807854 5.000000
      vertex -41.467304 29.891766 5.000000
      vertex -41.467304 29.891766 0.000000
    endloop
  endfacet
  facet normal -0.219105 0.975701 0.000000
    outer loop
      vertex -42.429802 29.700312 5.000000
      vertex -41.950905 29.807854 0.000000
      vertex -42.429802 29.700312 0.000000
    endloop
  endfacet
  facet normal -0.266712 0.963776 0.000000
    outer loop
      vertex -42.429802 29.700312 5.000000
      vertex -42.429802 29.700312 0.000000
      vertex -42.902847 29.569403 0.000000
    endloop
  endfacet
  facet normal -0.219105 0.975701 0.000000
    outer loop
      vertex -42.429802 29.700312 5.000000
      vertex -41.950905 29.807854 5.000000
      vertex -41.950905 29.807854 0.000000
    endloop
  endfacet
  facet normal -0.266712 0.963776 0.000000
    outer loop
      vertex -42.902847 29.569403 5.000000
      vertex -42.429802 29.700312 5.000000
      vertex -42.902847 29.569403 0.000000
    endloop
  endfacet
  facet normal -0.313678 0.949529 0.000000
    outer loop
      vertex -43.368900 29.415442 5.000000
      vertex -42.902847 29.569403 0.000000
      vertex -43.368900 29.415442 0.000000
    endloop
  endfacet
  facet normal -0.313678 0.949529 0.000000
    outer loop
      vertex -43.368900 29.415442 5.000000
      vertex -42.902847 29.569403 5.000000
      vertex -42.902847 29.569403 0.000000
    endloop
  endfacet
  facet normal -0.359895 0.932993 0.000000
    outer loop
      vertex -43.826836 29.238796 5.000000
      vertex -43.368900 29.415442 0.000000
      vertex -43.826836 29.238796 0.000000
    endloop
  endfacet
  facet normal -0.359895 0.932993 0.000000
    outer loop
      vertex -43.826836 29.238796 5.000000
      vertex -43.368900 29.415442 5.000000
      vertex -43.368900 29.415442 0.000000
    endloop
  endfacet
  facet normal -0.405245 0.914208 0.000000
    outer loop
      vertex -44.275551 29.039892 5.000000
      vertex -43.826836 29.238796 5.000000
      vertex -43.826836 29.238796 0.000000
    endloop
  endfacet
  facet normal -0.405245 0.914208 0.000000
    outer loop
      vertex -44.275551 29.039892 5.000000
      vertex -43.826836 29.238796 0.000000
      vertex -44.275551 29.039892 0.000000
    endloop
  endfacet
  facet normal -0.449612 0.893224 0.000000
    outer loop
      vertex -44.713966 28.819212 5.000000
      vertex -44.275551 29.039892 0.000000
      vertex -44.713966 28.819212 0.000000
    endloop
  endfacet
  facet normal -0.449612 0.893224 0.000000
    outer loop
      vertex -44.713966 28.819212 5.000000
      vertex -44.275551 29.039892 5.000000
      vertex -44.275551 29.039892 0.000000
    endloop
  endfacet
  facet normal -0.492898 0.870087 0.000000
    outer loop
      vertex -45.141026 28.577286 5.000000
      vertex -44.713966 28.819212 0.000000
      vertex -45.141026 28.577286 0.000000
    endloop
  endfacet
  facet normal -0.534997 0.844854 0.000000
    outer loop
      vertex -45.141026 28.577286 5.000000
      vertex -45.141026 28.577286 0.000000
      vertex -45.555702 28.314695 0.000000
    endloop
  endfacet
  facet normal -0.492898 0.870087 0.000000
    outer loop
      vertex -45.141026 28.577286 5.000000
      vertex -44.713966 28.819212 5.000000
      vertex -44.713966 28.819212 0.000000
    endloop
  endfacet
  facet normal -0.534997 0.844854 0.000000
    outer loop
      vertex -45.555702 28.314695 5.000000
      vertex -45.141026 28.577286 5.000000
      vertex -45.555702 28.314695 0.000000
    endloop
  endfacet
  facet normal -0.575806 0.817586 0.000000
    outer loop
      vertex -45.956993 28.032076 5.000000
      vertex -45.555702 28.314695 0.000000
      vertex -45.956993 28.032076 0.000000
    endloop
  endfacet
  facet normal -0.575806 0.817586 0.000000
    outer loop
      vertex -45.956993 28.032076 5.000000
      vertex -45.555702 28.314695 5.000000
      vertex -45.555702 28.314695 0.000000
    endloop
  endfacet
  facet normal -0.615232 0.788346 0.000000
    outer loop
      vertex -46.343933 27.730104 5.000000
      vertex -45.956993 28.032076 0.000000
      vertex -46.343933 27.730104 0.000000
    endloop
  endfacet
  facet normal -0.615232 0.788346 0.000000
    outer loop
      vertex -46.343933 27.730104 5.000000
      vertex -45.956993 28.032076 5.000000
      vertex -45.956993 28.032076 0.000000
    endloop
  endfacet
  facet normal -0.653171 0.757211 0.000000
    outer loop
      vertex -46.715591 27.409512 5.000000
      vertex -46.343933 27.730104 0.000000
      vertex -46.715591 27.409512 0.000000
    endloop
  endfacet
  facet normal -0.653171 0.757211 0.000000
    outer loop
      vertex -46.715591 27.409512 5.000000
      vertex -46.343933 27.730104 5.000000
      vertex -46.343933 27.730104 0.000000
    endloop
  endfacet
  facet normal -0.689543 0.724245 0.000000
    outer loop
      vertex -47.071068 27.071068 5.000000
      vertex -46.715591 27.409512 0.000000
      vertex -47.071068 27.071068 0.000000
    endloop
  endfacet
  facet normal -0.689543 0.724245 0.000000
    outer loop
      vertex -47.071068 27.071068 5.000000
      vertex -46.715591 27.409512 5.000000
      vertex -46.715591 27.409512 0.000000
    endloop
  endfacet
  facet normal -0.724247 0.689541 0.000000
    outer loop
      vertex -47.409512 26.715590 5.000000
      vertex -47.071068 27.071068 0.000000
      vertex -47.409512 26.715590 0.000000
    endloop
  endfacet
  facet normal -0.724247 0.689541 0.000000
    outer loop
      vertex -47.409512 26.715590 5.000000
      vertex -47.071068 27.071068 5.000000
      vertex -47.071068 27.071068 0.000000
    endloop
  endfacet
  facet normal -0.757207 0.653175 0.000000
    outer loop
      vertex -47.730106 26.343933 5.000000
      vertex -47.409512 26.715590 0.000000
      vertex -47.730106 26.343933 0.000000
    endloop
  endfacet
  facet normal -0.757207 0.653175 0.000000
    outer loop
      vertex -47.730106 26.343933 5.000000
      vertex -47.409512 26.715590 5.000000
      vertex -47.409512 26.715590 0.000000
    endloop
  endfacet
  facet normal -0.788350 0.615227 0.000000
    outer loop
      vertex -48.032074 25.956993 5.000000
      vertex -47.730106 26.343933 0.000000
      vertex -48.032074 25.956993 0.000000
    endloop
  endfacet
  facet normal -0.788350 0.615227 0.000000
    outer loop
      vertex -48.032074 25.956993 5.000000
      vertex -47.730106 26.343933 5.000000
      vertex -47.730106 26.343933 0.000000
    endloop
  endfacet
  facet normal -0.817583 0.575811 0.000000
    outer loop
      vertex -48.314697 25.555702 5.000000
      vertex -48.032074 25.956993 0.000000
      vertex -48.314697 25.555702 0.000000
    endloop
  endfacet
  facet normal -0.817583 0.575811 0.000000
    outer loop
      vertex -48.314697 25.555702 5.000000
      vertex -48.032074 25.956993 5.000000
      vertex -48.032074 25.956993 0.000000
    endloop
  endfacet
  facet normal -0.844855 0.534996 0.000000
    outer loop
      vertex -48.577286 25.141027 5.000000
      vertex -48.314697 25.555702 0.000000
      vertex -48.577286 25.141027 0.000000
    endloop
  endfacet
  facet normal -0.844855 0.534996 0.000000
    outer loop
      vertex -48.577286 25.141027 5.000000
      vertex -48.314697 25.555702 5.000000
      vertex -48.314697 25.555702 0.000000
    endloop
  endfacet
  facet normal -0.870085 0.492901 0.000000
    outer loop
      vertex -48.819214 24.713968 5.000000
      vertex -48.577286 25.141027 0.000000
      vertex -48.819214 24.713968 0.000000
    endloop
  endfacet
  facet normal -0.870085 0.492901 0.000000
    outer loop
      vertex -48.819214 24.713968 5.000000
      vertex -48.577286 25.141027 5.000000
      vertex -48.577286 25.141027 0.000000
    endloop
  endfacet
  facet normal -0.893225 0.449610 0.000000
    outer loop
      vertex -49.039894 24.275551 5.000000
      vertex -48.819214 24.713968 0.000000
      vertex -49.039894 24.275551 0.000000
    endloop
  endfacet
  facet normal -0.893225 0.449610 0.000000
    outer loop
      vertex -49.039894 24.275551 5.000000
      vertex -48.819214 24.713968 5.000000
      vertex -48.819214 24.713968 0.000000
    endloop
  endfacet
  facet normal -0.914210 0.405240 0.000000
    outer loop
      vertex -49.238796 23.826834 5.000000
      vertex -49.039894 24.275551 0.000000
      vertex -49.238796 23.826834 0.000000
    endloop
  endfacet
  facet normal -0.914210 0.405240 0.000000
    outer loop
      vertex -49.238796 23.826834 5.000000
      vertex -49.039894 24.275551 5.000000
      vertex -49.039894 24.275551 0.000000
    endloop
  endfacet
  facet normal -0.932994 0.359892 0.000000
    outer loop
      vertex -49.415440 23.368898 5.000000
      vertex -49.238796 23.826834 0.000000
      vertex -49.415440 23.368898 0.000000
    endloop
  endfacet
  facet normal -0.932994 0.359892 0.000000
    outer loop
      vertex -49.415440 23.368898 5.000000
      vertex -49.238796 23.826834 5.000000
      vertex -49.238796 23.826834 0.000000
    endloop
  endfacet
  facet normal -0.949527 0.313686 0.000000
    outer loop
      vertex -49.569405 22.902847 5.000000
      vertex -49.415440 23.368898 0.000000
      vertex -49.569405 22.902847 0.000000
    endloop
  endfacet
  facet normal -0.949527 0.313686 0.000000
    outer loop
      vertex -49.569405 22.902847 5.000000
      vertex -49.415440 23.368898 5.000000
      vertex -49.415440 23.368898 0.000000
    endloop
  endfacet
  facet normal -0.963776 0.266712 0.000000
    outer loop
      vertex -49.700314 22.429802 5.000000
      vertex -49.569405 22.902847 0.000000
      vertex -49.700314 22.429802 0.000000
    endloop
  endfacet
  facet normal -0.963776 0.266712 0.000000
    outer loop
      vertex -49.700314 22.429802 5.000000
      vertex -49.569405 22.902847 5.000000
      vertex -49.569405 22.902847 0.000000
    endloop
  endfacet
  facet normal -0.975702 0.219101 0.000000
    outer loop
      vertex -49.807854 21.950903 5.000000
      vertex -49.700314 22.429802 0.000000
      vertex -49.807854 21.950903 0.000000
    endloop
  endfacet
  facet normal -0.975702 0.219101 0.000000
    outer loop
      vertex -49.807854 21.950903 5.000000
      vertex -49.700314 22.429802 5.000000
      vertex -49.700314 22.429802 0.000000
    endloop
  endfacet
  facet normal -0.985278 0.170961 0.000000
    outer loop
      vertex -49.891766 21.467304 5.000000
      vertex -49.807854 21.950903 0.000000
      vertex -49.891766 21.467304 0.000000
    endloop
  endfacet
  facet normal -0.985278 0.170961 0.000000
    outer loop
      vertex -49.891766 21.467304 5.000000
      vertex -49.807854 21.950903 5.000000
      vertex -49.807854 21.950903 0.000000
    endloop
  endfacet
  facet normal -0.992480 0.122409 0.000000
    outer loop
      vertex -49.951847 20.980171 5.000000
      vertex -49.891766 21.467304 0.000000
      vertex -49.951847 20.980171 0.000000
    endloop
  endfacet
  facet normal -0.997291 0.073562 0.000000
    outer loop
      vertex -49.951847 20.980171 5.000000
      vertex -49.951847 20.980171 0.000000
      vertex -49.987953 20.490677 0.000000
    endloop
  endfacet
  facet normal -0.992480 0.122409 0.000000
    outer loop
      vertex -49.951847 20.980171 5.000000
      vertex -49.891766 21.467304 5.000000
      vertex -49.891766 21.467304 0.000000
    endloop
  endfacet
  facet normal -0.997291 0.073562 0.000000
    outer loop
      vertex -49.987953 20.490677 5.000000
      vertex -49.951847 20.980171 5.000000
      vertex -49.987953 20.490677 0.000000
    endloop
  endfacet
  facet normal -0.999699 0.024544 0.000000
    outer loop
      vertex -49.987953 20.490677 5.000000
      vertex -49.987953 20.490677 0.000000
      vertex -50.000000 20.000000 0.000000
    endloop
  endfacet
  facet normal -0.999699 0.024544 0.000000
    outer loop
      vertex -50.000000 20.000000 5.000000
      vertex -49.987953 20.490677 5.000000
      vertex -50.000000 20.000000 0.000000
    endloop
  endfacet
  facet normal 0.024540 0.999699 0.000000
    outer loop
      vertex 40.000000 30.000000 0.000000
      vertex 40.490677 29.987955 5.000000
      vertex 40.490677 29.987955 0.000000
    endloop
  endfacet
  facet normal 0.024540 0.999699 0.000000
    outer loop
      vertex 40.000000 30.000000 5.000000
      vertex 40.490677 29.987955 5.000000
      vertex 40.000000 30.000000 0.000000
    endloop
  endfacet
  facet normal 0.073566 0.997290 0.000000
    outer loop
      vertex 40.490677 29.987955 0.000000
      vertex 40.980171 29.951847 5.000000
      vertex 40.980171 29.951847 0.000000
    endloop
  endfacet
  facet normal 0.122409 0.992480 -0.000000
    outer loop
      vertex 40.980171 29.951847 0.000000
      vertex 40.980171 29.951847 5.000000
      vertex 41.467304 29.891766 0.000000
    endloop
  endfacet
  facet normal 0.073566 0.997290 0.000000
    outer loop
      vertex 40.490677 29.987955 5.000000
      vertex 40.980171 29.951847 5.000000
      vertex 40.490677 29.987955 0.000000
    endloop
  endfacet
  facet normal 0.122409 0.992480 0.000000
    outer loop
      vertex 40.980171 29.951847 5.000000
      vertex 41.467304 29.891766 5.000000
      vertex 41.467304 29.891766 0.000000
    endloop
  endfacet
  facet normal 0.170960 0.985278 0.000000
    outer loop
      vertex 41.467304 29.891766 0.000000
      vertex 41.950905 29.807854 5.000000
      vertex 41.950905 29.807854 0.000000
    endloop
  endfacet
  facet normal 0.170960 0.985278 0.000000
    outer loop
      vertex 41.467304 29.891766 5.000000
      vertex 41.950905 29.807854 5.000000
      vertex 41.467304 29.891766 0.000000
    endloop
  endfacet
  facet normal 0.219105 0.975701 0.000000
    outer loop
      vertex 41.950905 29.807854 0.000000
      vertex 42.429802 29.700312 5.000000
      vertex 42.429802 29.700312 0.000000
    endloop
  endfacet
  facet normal 0.266712 0.963776 -0.000000
    outer loop
      vertex 42.429802 29.700312 0.000000
      vertex 42.429802 29.700312 5.000000
      vertex 42.902847 29.569403 0.000000
    endloop
  endfacet
  facet normal 0.219105 0.975701 0.000000
    outer loop
      vertex 41.950905 29.807854 5.000000
      vertex 42.429802 29.700312 5.000000
      vertex 41.950905 29.807854 0.000000
    endloop
  endfacet
  facet normal 0.266712 0.963776 0.000000
    outer loop
      vertex 42.429802 29.700312 5.000000
      vertex 42.902847 29.569403 5.000000
      vertex 42.902847 29.569403 0.000000
    endloop
  endfacet
  facet normal 0.313678 0.949529 0.000000
    outer loop
      vertex 42.902847 29.569403 0.000000
      vertex 43.368900 29.415442 5.000000
      vertex 43.368900 29.415442 0.000000
    endloop
  endfacet
  facet normal 0.313678 0.949529 0.000000
    outer loop
      vertex 42.902847 29.569403 5.000000
      vertex 43.368900 29.415442 5.000000
      vertex 42.902847 29.569403 0.000000
    endloop
  endfacet
  facet normal 0.359895 0.932993 0.000000
    outer loop
      vertex 43.368900 29.415442 0.000000
      vertex 43.826836 29.238796 5.000000
      vertex 43.826836 29.238796 0.000000
    endloop
  endfacet
  facet normal 0.359895 0.932993 0.000000
    outer loop
      vertex 43.368900 29.415442 5.000000
      vertex 43.826836 29.238796 5.000000
      vertex 43.368900 29.415442 0.000000
    endloop
  endfacet
  facet normal 0.405245 0.914208 0.000000
    outer loop
      vertex 43.826836 29.238796 5.000000
      vertex 44.275551 29.039892 5.000000
      vertex 43.826836 29.238796 0.000000
    endloop
  endfacet
  facet normal 0.405245 0.914208 0.000000
    outer loop
      vertex 43.826836 29.238796 0.000000
      vertex 44.275551 29.039892 5.000000
      vertex 44.275551 29.039892 0.000000
    endloop
  endfacet
  facet normal 0.449612 0.893224 0.000000
    outer loop
      vertex 44.275551 29.039892 0.000000
      vertex 44.713966 28.819212 5.000000
      vertex 44.713966 28.819212 0.000000
    endloop
  endfacet
  facet normal 0.449612 0.893224 0.000000
    outer loop
      vertex 44.275551 29.039892 5.000000
      vertex 44.713966 28.819212 5.000000
      vertex 44.275551 29.039892 0.000000
    endloop
  endfacet
  facet normal 0.492898 0.870087 0.000000
    outer loop
      vertex 44.713966 28.819212 0.000000
      vertex 45.141026 28.577286 5.000000
      vertex 45.141026 28.577286 0.000000
    endloop
  endfacet
  facet normal 0.534997 0.844854 -0.000000
    outer loop
      vertex 45.141026 28.577286 0.000000
      vertex 45.141026 28.577286 5.000000
      vertex 45.555702 28.314695 0.000000
    endloop
  endfacet
  facet normal 0.492898 0.870087 0.000000
    outer loop
      vertex 44.713966 28.819212 5.000000
      vertex 45.141026 28.577286 5.000000
      vertex 44.713966 28.819212 0.000000
    endloop
  endfacet
  facet normal 0.534997 0.844854 0.000000
    outer loop
      vertex 45.141026 28.577286 5.000000
      vertex 45.555702 28.314695 5.000000
      vertex 45.555702 28.314695 0.000000
    endloop
  endfacet
  facet normal 0.575806 0.817586 0.000000
    outer loop
      vertex 45.555702 28.314695 0.000000
      vertex 45.956993 28.032076 5.000000
      vertex 45.956993 28.032076 0.000000
    endloop
  endfacet
  facet normal 0.575806 0.817586 0.000000
    outer loop
      vertex 45.555702 28.314695 5.000000
      vertex 45.956993 28.032076 5.000000
      vertex 45.555702 28.314695 0.000000
    endloop
  endfacet
  facet normal 0.615232 0.788346 0.000000
    outer loop
      vertex 45.956993 28.032076 0.000000
      vertex 46.343933 27.730104 5.000000
      vertex 46.343933 27.730104 0.000000
    endloop
  endfacet
  facet normal 0.615232 0.788346 0.000000
    outer loop
      vertex 45.956993 28.032076 5.000000
      vertex 46.343933 27.730104 5.000000
      vertex 45.956993 28.032076 0.000000
    endloop
  endfacet
  facet normal 0.653171 0.757211 0.000000
    outer loop
      vertex 46.343933 27.730104 0.000000
      vertex 46.715591 27.409512 5.000000
      vertex 46.715591 27.409512 0.000000
    endloop
  endfacet
  facet normal 0.653171 0.757211 0.000000
    outer loop
      vertex 46.343933 27.730104 5.000000
      vertex 46.715591 27.409512 5.000000
      vertex 46.343933 27.730104 0.000000
    endloop
  endfacet
  facet normal 0.689543 0.724245 0.000000
    outer loop
      vertex 46.715591 27.409512 0.000000
      vertex 47.071068 27.071068 5.000000
      vertex 47.071068 27.071068 0.000000
    endloop
  endfacet
  facet normal 0.689543 0.724245 0.000000
    outer loop
      vertex 46.715591 27.409512 5.000000
      vertex 47.071068 27.071068 5.000000
      vertex 46.715591 27.409512 0.000000
    endloop
  endfacet
  facet normal 0.724247 0.689541 0.000000
    outer loop
      vertex 47.071068 27.071068 0.000000
      vertex 47.409512 26.715590 5.000000
      vertex 47.409512 26.715590 0.000000
    endloop
  endfacet
  facet normal 0.724247 0.689541 0.000000
    outer loop
      vertex 47.071068 27.071068 5.000000
      vertex 47.409512 26.715590 5.000000
      vertex 47.071068 27.071068 0.000000
    endloop
  endfacet
  facet normal 0.757207 0.653175 0.000000
    outer loop
      vertex 47.409512 26.715590 0.000000
      vertex 47.730106 26.343933 5.000000
      vertex 47.730106 26.343933 0.000000
    endloop
  endfacet
  facet normal 0.757207 0.653175 0.000000
    outer loop
      vertex 47.409512 26.715590 5.000000
      vertex 47.730106 26.343933 5.000000
      vertex 47.409512 26.715590 0.000000
    endloop
  endfacet
  facet normal 0.788350 0.615227 0.000000
    outer loop
      vertex 47.730106 26.343933 0.000000
      vertex 48.032074 25.956993 5.000000
      vertex 48.032074 25.956993 0.000000
    endloop
  endfacet
  facet normal 0.788350 0.615227 0.000000
    outer loop
      vertex 47.730106 26.343933 5.000000
      vertex 48.032074 25.956993 5.000000
      vertex 47.730106 26.343933 0.000000
    endloop
  endfacet
  facet normal 0.817583 0.575811 0.000000
    outer loop
      vertex 48.032074 25.956993 0.000000
      vertex 48.314697 25.555702 5.000000
      vertex 48.314697 25.555702 0.000000
    endloop
  endfacet
  facet normal 0.817583 0.575811 0.000000
    outer loop
      vertex 48.032074 25.956993 5.000000
      vertex 48.314697 25.555702 5.000000
      vertex 48.032074 25.956993 0.000000
    endloop
  endfacet
  facet normal 0.844855 0.534996 0.000000
    outer loop
      vertex 48.314697 25.555702 0.000000
      vertex 48.577286 25.141027 5.000000
      vertex 48.577286 25.141027 0.000000
    endloop
  endfacet
  facet normal 0.844855 0.534996 0.000000
    outer loop
      vertex 48.314697 25.555702 5.000000
      vertex 48.577286 25.141027 5.000000
      vertex 48.314697 25.555702 0.000000
    endloop
  endfacet
  facet normal 0.870085 0.492901 0.000000
    outer loop
      vertex 48.577286 25.141027 0.000000
      vertex 48.819214 24.713968 5.000000
      vertex 48.819214 24.713968 0.000000
    endloop
  endfacet
  facet normal 0.870085 0.492901 0.000000
    outer loop
      vertex 48.577286 25.141027 5.000000
      vertex 48.819214 24.713968 5.000000
      vertex 48.577286 25.141027 0.000000
    endloop
  endfacet
  facet normal 0.893225 0.449610 0.000000
    outer loop
      vertex 48.819214 24.713968 0.000000
      vertex 49.039894 24.275551 5.000000
      vertex 49.039894 24.275551 0.000000
    endloop
  endfacet
  facet normal 0.893225 0.449610 0.000000
    outer loop
      vertex 48.819214 24.713968 5.000000
      vertex 49.039894 24.275551 5.000000
      vertex 48.819214 24.713968 0.000000
    endloop
  endfacet
  facet normal 0.914210 0.405240 0.000000
    outer loop
      vertex 49.039894 24.275551 0.000000
      vertex 49.238796 23.826834 5.000000
      vertex 49.238796 23.826834 0.000000
    endloop
  endfacet
  facet normal 0.914210 0.405240 0.000000
    outer loop
      vertex 49.039894 24.275551 5.000000
      vertex 49.238796 23.826834 5.000000
      vertex 49.039894 24.275551 0.000000
    endloop
  endfacet
  facet normal 0.932994 0.359892 0.000000
    outer loop
      vertex 49.238796 23.826834 0.000000
      vertex 49.415440 23.368898 5.000000
      vertex 49.415440 23.368898 0.000000
    endloop
  endfacet
  facet normal 0.932994 0.359892 0.000000
    outer loop
      vertex 49.238796 23.826834 5.000000
      vertex 49.415440 23.368898 5.000000
      vertex 49.238796 23.826834 0.000000
    endloop
  endfacet
  facet normal 0.949527 0.313686 0.000000
    outer loop
      vertex 49.415440 23.368898 0.000000
      vertex 49.569405 22.902847 5.000000
      vertex 49.569405 22.902847 0.000000
    endloop
  endfacet
  facet normal 0.949527 0.313686 0.000000
    outer loop
      vertex 49.415440 23.368898 5.000000
      vertex 49.569405 22.902847 5.000000
      vertex 49.415440 23.368898 0.000000
    endloop
  endfacet
  facet normal 0.963776 0.266712 0.000000
    outer loop
      vertex 49.569405 22.902847 0.000000
      vertex 49.700314 22.429802 5.000000
      vertex 49.700314 22.429802 0.000000
    endloop
  endfacet
  facet normal 0.963776 0.266712 0.000000
    outer loop
      vertex 49.569405 22.902847 5.000000
      vertex 49.700314 22.429802 5.000000
      vertex 49.569405 22.902847 0.000000
    endloop
  endfacet
  facet normal 0.975702 0.219101 0.000000
    outer loop
      vertex 49.700314 22.429802 0.000000
      vertex 49.807854 21.950903 5.000000
      vertex 49.807854 21.950903 0.000000
    endloop
  endfacet
  facet normal 0.975702 0.219101 0.000000
    outer loop
      vertex 49.700314 22.429802 5.000000
      vertex 49.807854 21.950903 5.000000
      vertex 49.700314 22.429802 0.000000
    endloop
  endfacet
  facet normal 0.985278 0.170961 0.000000
    outer loop
      vertex 49.807854 21.950903 0.000000
      vertex 49.891766 21.467304 5.000000
      vertex 49.891766 21.467304 0.000000
    endloop
  endfacet
  facet normal 0.985278 0.170961 0.000000
    outer loop
      vertex 49.807854 21.950903 5.000000
      vertex 49.891766 21.467304 5.000000
      vertex 49.807854 21.950903 0.000000
    endloop
  endfacet
  facet normal 0.992480 0.122409 0.000000
    outer loop
      vertex 49.891766 21.467304 0.000000
      vertex 49.951847 20.980171 5.000000
      vertex 49.951847 20.980171 0.000000
    endloop
  endfacet
  facet normal 0.997291 0.073562 -0.000000
    outer loop
      vertex 49.951847 20.980171 0.000000
      vertex 49.951847 20.980171 5.000000
      vertex 49.987953 20.490677 0.000000
    endloop
  endfacet
  facet normal 0.992480 0.122409 0.000000
    outer loop
      vertex 49.891766 21.467304 5.000000
      vertex 49.951847 20.980171 5.000000
      vertex 49.891766 21.467304 0.000000
    endloop
  endfacet
  facet normal 0.997291 0.073562 0.000000
    outer loop
      vertex 49.951847 20.980171 5.000000
      vertex 49.987953 20.490677 5.000000
      vertex 49.987953 20.490677 0.000000
    endloop
  endfacet
  facet normal 0.999699 0.024544 -0.000000
    outer loop
      vertex 49.987953 20.490677 0.000000
      vertex 49.987953 20.490677 5.000000
      vertex 50.000000 20.000000 0.000000
    endloop
  endfacet
  facet normal 0.999699 0.024544 0.000000
    outer loop
      vertex 49.987953 20.490677 5.000000
      vertex 50.000000 20.000000 5.000000
      vertex 50.000000 20.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 1.000000
    outer loop
      vertex 47.409512 -26.715590 5.000000
      vertex 47.730106 -26.343933 5.000000
      vertex 47.071068 -27.071068 5.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 1.000000
    outer loop
      vertex 47.071068 -27.071068 5.000000
      vertex 47.730106 -26.343933 5.000000
      vertex 46.715591 -27.409512 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 46.715591 -27.409512 5.000000
      vertex 45.956993 -28.032076 5.000000
      vertex 46.343933 -27.730104 5.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 1.000000
    outer loop
      vertex 48.032074 -25.956993 5.000000
      vertex 48.314697 -25.555702 5.000000
      vertex 47.730106 -26.343933 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 45.956993 -28.032076 5.000000
      vertex 45.141026 -28.577286 5.000000
      vertex 45.555702 -28.314695 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 45.956993 -28.032076 5.000000
      vertex 44.713966 -28.819212 5.000000
      vertex 45.141026 -28.577286 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 47.730106 -26.343933 5.000000
      vertex 44.275551 -29.039892 5.000000
      vertex 46.715591 -27.409512 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 46.715591 -27.409512 5.000000
      vertex 44.275551 -29.039892 5.000000
      vertex 45.956993 -28.032076 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 45.956993 -28.032076 5.000000
      vertex 44.275551 -29.039892 5.000000
      vertex 44.713966 -28.819212 5.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 1.000000
    outer loop
      vertex 48.819214 -24.713968 5.000000
      vertex 49.039894 -24.275551 5.000000
      vertex 48.577286 -25.141027 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 47.730106 -26.343933 5.000000
      vertex 43.826836 -29.238796 5.000000
      vertex 44.275551 -29.039892 5.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 1.000000
    outer loop
      vertex 49.238796 -23.826834 5.000000
      vertex 49.415440 -23.368898 5.000000
      vertex 49.039894 -24.275551 5.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 1.000000
    outer loop
      vertex 48.577286 -25.141027 5.000000
      vertex 49.415440 -23.368898 5.000000
      vertex 48.314697 -25.555702 5.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 1.000000
    outer loop
      vertex 49.039894 -24.275551 5.000000
      vertex 49.415440 -23.368898 5.000000
      vertex 48.577286 -25.141027 5.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 1.000000
    outer loop
      vertex 48.314697 -25.555702 5.000000
      vertex 49.569405 -22.902847 5.000000
      vertex 47.730106 -26.343933 5.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 1.000000
    outer loop
      vertex 49.415440 -23.368898 5.000000
      vertex 49.569405 -22.902847 5.000000
      vertex 48.314697 -25.555702 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 43.368900 -29.415442 5.000000
      vertex 42.429802 -29.700312 5.000000
      vertex 42.902847 -29.569403 5.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 1.000000
    outer loop
      vertex 49.700314 -22.429802 5.000000
      vertex 49.807854 -21.950903 5.000000
      vertex 49.569405 -22.902847 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 43.368900 -29.415442 5.000000
      vertex 41.467304 -29.891766 5.000000
      vertex 42.429802 -29.700312 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 42.429802 -29.700312 5.000000
      vertex 41.467304 -29.891766 5.000000
      vertex 41.950905 -29.807854 5.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 1.000000
    outer loop
      vertex 49.807854 -21.950903 5.000000
      vertex 49.891766 -21.467304 5.000000
      vertex 49.569405 -22.902847 5.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 1.000000
    outer loop
      vertex 49.891766 -21.467304 5.000000
      vertex 49.951847 -20.980171 5.000000
      vertex 49.569405 -22.902847 5.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 1.000000
    outer loop
      vertex 49.987953 -20.490677 5.000000
      vertex 50.000000 -20.000000 5.000000
      vertex 49.951847 -20.980171 5.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 1.000000
    outer loop
      vertex 49.951847 -20.980171 5.000000
      vertex 50.000000 -20.000000 5.000000
      vertex 49.569405 -22.902847 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 49.569405 -22.902847 5.000000
      vertex 40.000000 -30.000000 5.000000
      vertex 47.730106 -26.343933 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 43.368900 -29.415442 5.000000
      vertex 40.000000 -30.000000 5.000000
      vertex 41.467304 -29.891766 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 50.000000 -20.000000 5.000000
      vertex 40.000000 -30.000000 5.000000
      vertex 49.569405 -22.902847 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 43.826836 -29.238796 5.000000
      vertex 40.000000 -30.000000 5.000000
      vertex 43.368900 -29.415442 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 41.467304 -29.891766 5.000000
      vertex 40.000000 -30.000000 5.000000
      vertex 40.980171 -29.951847 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 40.980171 -29.951847 5.000000
      vertex 40.000000 -30.000000 5.000000
      vertex 40.490677 -29.987955 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 47.730106 -26.343933 5.000000
      vertex 40.000000 -30.000000 5.000000
      vertex 43.826836 -29.238796 5.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 1.000000
    outer loop
      vertex 50.000000 -20.000000 5.000000
      vertex 50.000000 20.000000 5.000000
      vertex 40.000000 -30.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 49.987953 20.490677 5.000000
      vertex 49.951847 20.980171 5.000000
      vertex 50.000000 20.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 49.951847 20.980171 5.000000
      vertex 49.891766 21.467304 5.000000
      vertex 50.000000 20.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 49.700314 22.429802 5.000000
      vertex 49.569405 22.902847 5.000000
      vertex 49.807854 21.950903 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 49.807854 21.950903 5.000000
      vertex 49.569405 22.902847 5.000000
      vertex 49.891766 21.467304 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 49.415440 23.368898 5.000000
      vertex 49.238796 23.826834 5.000000
      vertex 49.569405 22.902847 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 49.891766 21.467304 5.000000
      vertex 49.238796 23.826834 5.000000
      vertex 50.000000 20.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 49.569405 22.902847 5.000000
      vertex 49.238796 23.826834 5.000000
      vertex 49.891766 21.467304 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 49.238796 23.826834 5.000000
      vertex 49.039894 24.275551 5.000000
      vertex 50.000000 20.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 49.039894 24.275551 5.000000
      vertex 48.819214 24.713968 5.000000
      vertex 50.000000 20.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 48.577286 25.141027 5.000000
      vertex 48.314697 25.555702 5.000000
      vertex 48.819214 24.713968 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 48.819214 24.713968 5.000000
      vertex 48.314697 25.555702 5.000000
      vertex 50.000000 20.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 48.032074 25.956993 5.000000
      vertex 47.730106 26.343933 5.000000
      vertex 48.314697 25.555702 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 48.314697 25.555702 5.000000
      vertex 47.730106 26.343933 5.000000
      vertex 50.000000 20.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 47.071068 27.071068 5.000000
      vertex 46.715591 27.409512 5.000000
      vertex 47.409512 26.715590 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 47.409512 26.715590 5.000000
      vertex 46.715591 27.409512 5.000000
      vertex 47.730106 26.343933 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 46.343933 27.730104 5.000000
      vertex 45.956993 28.032076 5.000000
      vertex 46.715591 27.409512 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 47.730106 26.343933 5.000000
      vertex 45.555702 28.314695 5.000000
      vertex 50.000000 20.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 46.715591 27.409512 5.000000
      vertex 45.555702 28.314695 5.000000
      vertex 47.730106 26.343933 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 45.956993 28.032076 5.000000
      vertex 45.555702 28.314695 5.000000
      vertex 46.715591 27.409512 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 44.713966 28.819212 5.000000
      vertex 44.275551 29.039892 5.000000
      vertex 45.141026 28.577286 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 45.141026 28.577286 5.000000
      vertex 44.275551 29.039892 5.000000
      vertex 45.555702 28.314695 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 45.555702 28.314695 5.000000
      vertex 44.275551 29.039892 5.000000
      vertex 50.000000 20.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 43.826836 29.238796 5.000000
      vertex 43.368900 29.415442 5.000000
      vertex 44.275551 29.039892 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 44.275551 29.039892 5.000000
      vertex 42.902847 29.569403 5.000000
      vertex 50.000000 20.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 43.368900 29.415442 5.000000
      vertex 42.902847 29.569403 5.000000
      vertex 44.275551 29.039892 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 41.950905 29.807854 5.000000
      vertex 41.467304 29.891766 5.000000
      vertex 42.429802 29.700312 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 42.429802 29.700312 5.000000
      vertex 41.467304 29.891766 5.000000
      vertex 42.902847 29.569403 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 42.902847 29.569403 5.000000
      vertex 41.467304 29.891766 5.000000
      vertex 50.000000 20.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 40.980171 29.951847 5.000000
      vertex 40.490677 29.987955 5.000000
      vertex 41.467304 29.891766 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 50.000000 20.000000 5.000000
      vertex 40.000000 30.000000 5.000000
      vertex 40.000000 -30.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 41.467304 29.891766 5.000000
      vertex 40.000000 30.000000 5.000000
      vertex 50.000000 20.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 40.490677 29.987955 5.000000
      vertex 40.000000 30.000000 5.000000
      vertex 41.467304 29.891766 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -40.000000 -30.000000 5.000000
      vertex -40.980171 -29.951847 5.000000
      vertex -40.490677 -29.987955 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -41.467304 -29.891766 5.000000
      vertex -42.429802 -29.700312 5.000000
      vertex -41.950905 -29.807854 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -40.980171 -29.951847 5.000000
      vertex -42.429802 -29.700312 5.000000
      vertex -41.467304 -29.891766 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -40.980171 -29.951847 5.000000
      vertex -44.275551 -29.039892 5.000000
      vertex -42.429802 -29.700312 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -43.368900 -29.415442 5.000000
      vertex -44.275551 -29.039892 5.000000
      vertex -43.826836 -29.238796 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -42.902847 -29.569403 5.000000
      vertex -44.275551 -29.039892 5.000000
      vertex -43.368900 -29.415442 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -42.429802 -29.700312 5.000000
      vertex -44.275551 -29.039892 5.000000
      vertex -42.902847 -29.569403 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -40.000000 -30.000000 5.000000
      vertex -44.275551 -29.039892 5.000000
      vertex -40.980171 -29.951847 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -40.000000 -30.000000 5.000000
      vertex -45.141026 -28.577286 5.000000
      vertex -44.275551 -29.039892 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -44.275551 -29.039892 5.000000
      vertex -45.141026 -28.577286 5.000000
      vertex -44.713966 -28.819212 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -40.000000 -30.000000 5.000000
      vertex -45.555702 -28.314695 5.000000
      vertex -45.141026 -28.577286 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -40.000000 -30.000000 5.000000
      vertex -45.956993 -28.032076 5.000000
      vertex -45.555702 -28.314695 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -45.956993 -28.032076 5.000000
      vertex -46.715591 -27.409512 5.000000
      vertex -46.343933 -27.730104 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -45.956993 -28.032076 5.000000
      vertex -47.409512 -26.715590 5.000000
      vertex -46.715591 -27.409512 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -46.715591 -27.409512 5.000000
      vertex -47.409512 -26.715590 5.000000
      vertex -47.071068 -27.071068 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -45.956993 -28.032076 5.000000
      vertex -47.730106 -26.343933 5.000000
      vertex -47.409512 -26.715590 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -47.730106 -26.343933 5.000000
      vertex -48.314697 -25.555702 5.000000
      vertex -48.032074 -25.956993 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -47.730106 -26.343933 5.000000
      vertex -48.819214 -24.713968 5.000000
      vertex -48.314697 -25.555702 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -48.314697 -25.555702 5.000000
      vertex -48.819214 -24.713968 5.000000
      vertex -48.577286 -25.141027 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -45.956993 -28.032076 5.000000
      vertex -49.039894 -24.275551 5.000000
      vertex -47.730106 -26.343933 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -47.730106 -26.343933 5.000000
      vertex -49.039894 -24.275551 5.000000
      vertex -48.819214 -24.713968 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -49.238796 -23.826834 5.000000
      vertex -49.569405 -22.902847 5.000000
      vertex -49.415440 -23.368898 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -49.039894 -24.275551 5.000000
      vertex -49.569405 -22.902847 5.000000
      vertex -49.238796 -23.826834 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -49.039894 -24.275551 5.000000
      vertex -49.807854 -21.950903 5.000000
      vertex -49.569405 -22.902847 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -49.569405 -22.902847 5.000000
      vertex -49.807854 -21.950903 5.000000
      vertex -49.700314 -22.429802 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -40.000000 -30.000000 5.000000
      vertex -49.891766 -21.467304 5.000000
      vertex -45.956993 -28.032076 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -45.956993 -28.032076 5.000000
      vertex -49.891766 -21.467304 5.000000
      vertex -49.039894 -24.275551 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -49.039894 -24.275551 5.000000
      vertex -49.891766 -21.467304 5.000000
      vertex -49.807854 -21.950903 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -49.891766 -21.467304 5.000000
      vertex -49.987953 -20.490677 5.000000
      vertex -49.951847 -20.980171 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -40.000000 -30.000000 5.000000
      vertex -50.000000 -20.000000 5.000000
      vertex -49.891766 -21.467304 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -49.891766 -21.467304 5.000000
      vertex -50.000000 -20.000000 5.000000
      vertex -49.987953 -20.490677 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 40.000000 -30.000000 5.000000
      vertex -25.887659 8.069764 5.000000
      vertex -26.257742 7.690335 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -26.257742 7.690335 5.000000
      vertex -26.646280 7.329826 5.000000
      vertex 40.000000 -30.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 40.000000 -30.000000 5.000000
      vertex -26.646280 7.329826 5.000000
      vertex -40.000000 -30.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 40.000000 -30.000000 5.000000
      vertex -25.536947 8.467168 5.000000
      vertex -25.887659 8.069764 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -26.646280 7.329826 5.000000
      vertex -27.052303 6.989131 5.000000
      vertex -40.000000 -30.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 40.000000 -30.000000 5.000000
      vertex -25.206482 8.881559 5.000000
      vertex -25.536947 8.467168 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -27.052303 6.989131 5.000000
      vertex -27.474804 6.669099 5.000000
      vertex -40.000000 -30.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 40.000000 -30.000000 5.000000
      vertex -24.897081 9.311908 5.000000
      vertex -25.206482 8.881559 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -27.474804 6.669099 5.000000
      vertex -27.912733 6.370524 5.000000
      vertex -40.000000 -30.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 40.000000 -30.000000 5.000000
      vertex -24.609518 9.757144 5.000000
      vertex -24.897081 9.311908 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -27.912733 6.370524 5.000000
      vertex -28.365000 6.094150 5.000000
      vertex -40.000000 -30.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 40.000000 -30.000000 5.000000
      vertex -24.344505 10.216160 5.000000
      vertex -24.609518 9.757144 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -28.365000 6.094150 5.000000
      vertex -28.830481 5.840662 5.000000
      vertex -40.000000 -30.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 40.000000 -30.000000 5.000000
      vertex -24.102701 10.687816 5.000000
      vertex -24.344505 10.216160 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -28.830481 5.840662 5.000000
      vertex -29.308018 5.610693 5.000000
      vertex -40.000000 -30.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 40.000000 -30.000000 5.000000
      vertex -23.884708 11.170938 5.000000
      vertex -24.102701 10.687816 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -29.308018 5.610693 5.000000
      vertex -29.796425 5.404812 5.000000
      vertex -40.000000 -30.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 40.000000 -30.000000 5.000000
      vertex -23.691067 11.664326 5.000000
      vertex -23.884708 11.170938 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -29.796425 5.404812 5.000000
      vertex -30.294487 5.223532 5.000000
      vertex -40.000000 -30.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 40.000000 30.000000 5.000000
      vertex -23.522261 12.166753 5.000000
      vertex 40.000000 -30.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 40.000000 -30.000000 5.000000
      vertex -23.522261 12.166753 5.000000
      vertex -23.691067 11.664326 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -30.294487 5.223532 5.000000
      vertex -30.800966 5.067304 5.000000
      vertex -40.000000 -30.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 40.000000 30.000000 5.000000
      vertex -23.378708 12.676969 5.000000
      vertex -23.522261 12.166753 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -30.800966 5.067304 5.000000
      vertex -31.314602 4.936516 5.000000
      vertex -40.000000 -30.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 40.000000 30.000000 5.000000
      vertex -23.260767 13.193707 5.000000
      vertex -23.378708 12.676969 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -31.314602 4.936516 5.000000
      vertex -31.834120 4.831493 5.000000
      vertex -40.000000 -30.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 40.000000 30.000000 5.000000
      vertex -23.168728 13.715681 5.000000
      vertex -23.260767 13.193707 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -31.834120 4.831493 5.000000
      vertex -32.358227 4.752497 5.000000
      vertex -40.000000 -30.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 40.000000 30.000000 5.000000
      vertex -23.102823 14.241593 5.000000
      vertex -23.168728 13.715681 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -32.358227 4.752497 5.000000
      vertex -32.885620 4.699724 5.000000
      vertex -40.000000 -30.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 40.000000 30.000000 5.000000
      vertex -23.063213 14.770138 5.000000
      vertex -23.102823 14.241593 5.000000
    endloop
  endfacet
  facet normal 0.000000 -0.000000 1.000000
    outer loop
      vertex -40.000000 -30.000000 5.000000
      vertex -33.414986 4.673304 5.000000
      vertex -50.000000 -20.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -32.885620 4.699724 5.000000
      vertex -33.414986 4.673304 5.000000
      vertex -40.000000 -30.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 40.000000 30.000000 5.000000
      vertex -23.049999 15.300000 5.000000
      vertex -23.063213 14.770138 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -33.414986 4.673304 5.000000
      vertex -33.945015 4.673304 5.000000
      vertex -50.000000 -20.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 40.000000 30.000000 5.000000
      vertex -23.063213 15.829862 5.000000
      vertex -23.049999 15.300000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -33.945015 4.673304 5.000000
      vertex -34.474380 4.699724 5.000000
      vertex -50.000000 -20.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 40.000000 30.000000 5.000000
      vertex -23.102823 16.358406 5.000000
      vertex -23.063213 15.829862 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -34.474380 4.699724 5.000000
      vertex -35.001774 4.752497 5.000000
      vertex -50.000000 -20.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 40.000000 30.000000 5.000000
      vertex -23.168728 16.884319 5.000000
      vertex -23.102823 16.358406 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -35.001774 4.752497 5.000000
      vertex -35.525879 4.831493 5.000000
      vertex -50.000000 -20.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 40.000000 30.000000 5.000000
      vertex -23.260767 17.406294 5.000000
      vertex -23.168728 16.884319 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -35.525879 4.831493 5.000000
      vertex -36.045399 4.936516 5.000000
      vertex -50.000000 -20.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 40.000000 30.000000 5.000000
      vertex -23.378708 17.923031 5.000000
      vertex -23.260767 17.406294 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -36.045399 4.936516 5.000000
      vertex -36.559032 5.067304 5.000000
      vertex -50.000000 -20.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 40.000000 30.000000 5.000000
      vertex -23.522261 18.433247 5.000000
      vertex -23.378708 17.923031 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -36.559032 5.067304 5.000000
      vertex -37.065514 5.223532 5.000000
      vertex -50.000000 -20.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 40.000000 30.000000 5.000000
      vertex -23.691067 18.935675 5.000000
      vertex -23.522261 18.433247 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -37.065514 5.223532 5.000000
      vertex -37.563576 5.404812 5.000000
      vertex -50.000000 -20.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 40.000000 30.000000 5.000000
      vertex -23.884708 19.429062 5.000000
      vertex -23.691067 18.935675 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -37.563576 5.404812 5.000000
      vertex -38.051983 5.610693 5.000000
      vertex -50.000000 -20.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 40.000000 30.000000 5.000000
      vertex -24.102701 19.912184 5.000000
      vertex -23.884708 19.429062 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -38.051983 5.610693 5.000000
      vertex -38.529518 5.840662 5.000000
      vertex -50.000000 -20.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 40.000000 30.000000 5.000000
      vertex -24.344505 20.383841 5.000000
      vertex -24.102701 19.912184 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -38.529518 5.840662 5.000000
      vertex -38.994999 6.094150 5.000000
      vertex -50.000000 -20.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 40.000000 30.000000 5.000000
      vertex -24.609518 20.842855 5.000000
      vertex -24.344505 20.383841 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -38.994999 6.094150 5.000000
      vertex -39.447266 6.370524 5.000000
      vertex -50.000000 -20.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 40.000000 30.000000 5.000000
      vertex -24.897081 21.288092 5.000000
      vertex -24.609518 20.842855 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -39.447266 6.370524 5.000000
      vertex -39.885197 6.669099 5.000000
      vertex -50.000000 -20.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 40.000000 30.000000 5.000000
      vertex -25.206482 21.718441 5.000000
      vertex -24.897081 21.288092 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -39.885197 6.669099 5.000000
      vertex -40.307697 6.989131 5.000000
      vertex -50.000000 -20.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 40.000000 30.000000 5.000000
      vertex -25.536947 22.132832 5.000000
      vertex -25.206482 21.718441 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -40.307697 6.989131 5.000000
      vertex -40.713722 7.329826 5.000000
      vertex -50.000000 -20.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 40.000000 30.000000 5.000000
      vertex -25.887659 22.530235 5.000000
      vertex -25.536947 22.132832 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -40.713722 7.329826 5.000000
      vertex -41.102257 7.690335 5.000000
      vertex -50.000000 -20.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 40.000000 30.000000 5.000000
      vertex -26.257742 22.909664 5.000000
      vertex -25.887659 22.530235 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -41.102257 7.690335 5.000000
      vertex -41.472340 8.069764 5.000000
      vertex -50.000000 -20.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 40.000000 30.000000 5.000000
      vertex -26.646280 23.270174 5.000000
      vertex -26.257742 22.909664 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -41.472340 8.069764 5.000000
      vertex -41.823051 8.467168 5.000000
      vertex -50.000000 -20.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 40.000000 30.000000 5.000000
      vertex -27.052303 23.610868 5.000000
      vertex -26.646280 23.270174 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -41.823051 8.467168 5.000000
      vertex -42.153519 8.881559 5.000000
      vertex -50.000000 -20.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 40.000000 30.000000 5.000000
      vertex -27.474804 23.930901 5.000000
      vertex -27.052303 23.610868 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -42.153519 8.881559 5.000000
      vertex -42.462917 9.311908 5.000000
      vertex -50.000000 -20.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 40.000000 30.000000 5.000000
      vertex -27.912733 24.229475 5.000000
      vertex -27.474804 23.930901 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -42.462917 9.311908 5.000000
      vertex -42.750481 9.757144 5.000000
      vertex -50.000000 -20.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -42.750481 9.757144 5.000000
      vertex -43.015495 10.216160 5.000000
      vertex -50.000000 -20.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -43.015495 10.216160 5.000000
      vertex -43.257298 10.687816 5.000000
      vertex -50.000000 -20.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -43.257298 10.687816 5.000000
      vertex -43.475292 11.170938 5.000000
      vertex -50.000000 -20.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -43.837738 12.166753 5.000000
      vertex -50.000000 20.000000 5.000000
      vertex -43.668934 11.664326 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -43.668934 11.664326 5.000000
      vertex -50.000000 20.000000 5.000000
      vertex -43.475292 11.170938 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -43.475292 11.170938 5.000000
      vertex -50.000000 20.000000 5.000000
      vertex -50.000000 -20.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -43.668934 18.935675 5.000000
      vertex -50.000000 20.000000 5.000000
      vertex -43.837738 18.433247 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -43.837738 18.433247 5.000000
      vertex -50.000000 20.000000 5.000000
      vertex -43.981293 17.923031 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -43.981293 17.923031 5.000000
      vertex -50.000000 20.000000 5.000000
      vertex -44.099232 17.406294 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -44.099232 17.406294 5.000000
      vertex -50.000000 20.000000 5.000000
      vertex -44.191273 16.884319 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -44.191273 16.884319 5.000000
      vertex -50.000000 20.000000 5.000000
      vertex -44.257175 16.358406 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -44.257175 16.358406 5.000000
      vertex -50.000000 20.000000 5.000000
      vertex -44.296787 15.829862 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -44.296787 15.829862 5.000000
      vertex -50.000000 20.000000 5.000000
      vertex -44.310001 15.300000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -44.310001 15.300000 5.000000
      vertex -50.000000 20.000000 5.000000
      vertex -44.296787 14.770138 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -44.296787 14.770138 5.000000
      vertex -50.000000 20.000000 5.000000
      vertex -44.257175 14.241593 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -44.257175 14.241593 5.000000
      vertex -50.000000 20.000000 5.000000
      vertex -44.191273 13.715681 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -44.191273 13.715681 5.000000
      vertex -50.000000 20.000000 5.000000
      vertex -44.099232 13.193707 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -44.099232 13.193707 5.000000
      vertex -50.000000 20.000000 5.000000
      vertex -43.981293 12.676969 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -43.981293 12.676969 5.000000
      vertex -50.000000 20.000000 5.000000
      vertex -43.837738 12.166753 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -30.294487 25.376467 5.000000
      vertex -40.000000 30.000000 5.000000
      vertex -30.800966 25.532696 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -30.800966 25.532696 5.000000
      vertex -40.000000 30.000000 5.000000
      vertex -31.314602 25.663485 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -31.314602 25.663485 5.000000
      vertex -40.000000 30.000000 5.000000
      vertex -31.834120 25.768507 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -31.834120 25.768507 5.000000
      vertex -40.000000 30.000000 5.000000
      vertex -32.358227 25.847504 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -32.358227 25.847504 5.000000
      vertex -40.000000 30.000000 5.000000
      vertex -32.885620 25.900276 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -32.885620 25.900276 5.000000
      vertex -40.000000 30.000000 5.000000
      vertex -33.414986 25.926697 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -33.414986 25.926697 5.000000
      vertex -40.000000 30.000000 5.000000
      vertex -33.945015 25.926697 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -33.945015 25.926697 5.000000
      vertex -40.000000 30.000000 5.000000
      vertex -34.474380 25.900276 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -34.474380 25.900276 5.000000
      vertex -40.000000 30.000000 5.000000
      vertex -35.001774 25.847504 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -35.001774 25.847504 5.000000
      vertex -40.000000 30.000000 5.000000
      vertex -35.525879 25.768507 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -35.525879 25.768507 5.000000
      vertex -40.000000 30.000000 5.000000
      vertex -36.045399 25.663485 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -36.045399 25.663485 5.000000
      vertex -40.000000 30.000000 5.000000
      vertex -36.559032 25.532696 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -36.559032 25.532696 5.000000
      vertex -40.000000 30.000000 5.000000
      vertex -37.065514 25.376467 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -37.065514 25.376467 5.000000
      vertex -40.000000 30.000000 5.000000
      vertex -37.563576 25.195189 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -37.563576 25.195189 5.000000
      vertex -40.000000 30.000000 5.000000
      vertex -38.051983 24.989307 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -38.051983 24.989307 5.000000
      vertex -40.000000 30.000000 5.000000
      vertex -38.529518 24.759336 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -38.529518 24.759336 5.000000
      vertex -40.000000 30.000000 5.000000
      vertex -38.994999 24.505850 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -40.000000 30.000000 5.000000
      vertex -40.490677 29.987955 5.000000
      vertex -38.994999 24.505850 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -43.668934 18.935675 5.000000
      vertex -49.987953 20.490677 5.000000
      vertex -50.000000 20.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -43.475292 19.429062 5.000000
      vertex -49.987953 20.490677 5.000000
      vertex -43.668934 18.935675 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -40.490677 29.987955 5.000000
      vertex -40.980171 29.951847 5.000000
      vertex -38.994999 24.505850 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -38.994999 24.505850 5.000000
      vertex -40.980171 29.951847 5.000000
      vertex -39.447266 24.229475 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -43.475292 19.429062 5.000000
      vertex -49.951847 20.980171 5.000000
      vertex -49.987953 20.490677 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -40.980171 29.951847 5.000000
      vertex -41.467304 29.891766 5.000000
      vertex -39.447266 24.229475 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -43.475292 19.429062 5.000000
      vertex -49.891766 21.467304 5.000000
      vertex -49.951847 20.980171 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -43.257298 19.912184 5.000000
      vertex -49.891766 21.467304 5.000000
      vertex -43.475292 19.429062 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -41.467304 29.891766 5.000000
      vertex -41.950905 29.807854 5.000000
      vertex -39.447266 24.229475 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -39.447266 24.229475 5.000000
      vertex -41.950905 29.807854 5.000000
      vertex -39.885197 23.930901 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -43.257298 19.912184 5.000000
      vertex -49.807854 21.950903 5.000000
      vertex -49.891766 21.467304 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -41.950905 29.807854 5.000000
      vertex -42.429802 29.700312 5.000000
      vertex -39.885197 23.930901 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -43.257298 19.912184 5.000000
      vertex -49.700314 22.429802 5.000000
      vertex -49.807854 21.950903 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -42.429802 29.700312 5.000000
      vertex -42.902847 29.569403 5.000000
      vertex -39.885197 23.930901 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -39.885197 23.930901 5.000000
      vertex -42.902847 29.569403 5.000000
      vertex -40.307697 23.610868 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -43.257298 19.912184 5.000000
      vertex -49.569405 22.902847 5.000000
      vertex -49.700314 22.429802 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -43.015495 20.383841 5.000000
      vertex -49.569405 22.902847 5.000000
      vertex -43.257298 19.912184 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -42.902847 29.569403 5.000000
      vertex -43.368900 29.415442 5.000000
      vertex -40.307697 23.610868 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -43.015495 20.383841 5.000000
      vertex -49.415440 23.368898 5.000000
      vertex -49.569405 22.902847 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -43.368900 29.415442 5.000000
      vertex -43.826836 29.238796 5.000000
      vertex -40.307697 23.610868 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -43.015495 20.383841 5.000000
      vertex -49.238796 23.826834 5.000000
      vertex -49.415440 23.368898 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -42.750481 20.842855 5.000000
      vertex -49.238796 23.826834 5.000000
      vertex -43.015495 20.383841 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -43.826836 29.238796 5.000000
      vertex -44.275551 29.039892 5.000000
      vertex -40.307697 23.610868 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -40.307697 23.610868 5.000000
      vertex -44.275551 29.039892 5.000000
      vertex -40.713722 23.270174 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -42.750481 20.842855 5.000000
      vertex -49.039894 24.275551 5.000000
      vertex -49.238796 23.826834 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -44.275551 29.039892 5.000000
      vertex -44.713966 28.819212 5.000000
      vertex -40.713722 23.270174 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -42.750481 20.842855 5.000000
      vertex -48.819214 24.713968 5.000000
      vertex -49.039894 24.275551 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -42.462917 21.288092 5.000000
      vertex -48.819214 24.713968 5.000000
      vertex -42.750481 20.842855 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -44.713966 28.819212 5.000000
      vertex -45.141026 28.577286 5.000000
      vertex -40.713722 23.270174 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -40.713722 23.270174 5.000000
      vertex -45.141026 28.577286 5.000000
      vertex -41.102257 22.909664 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -42.462917 21.288092 5.000000
      vertex -48.577286 25.141027 5.000000
      vertex -48.819214 24.713968 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -45.141026 28.577286 5.000000
      vertex -45.555702 28.314695 5.000000
      vertex -41.102257 22.909664 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -42.462917 21.288092 5.000000
      vertex -48.314697 25.555702 5.000000
      vertex -48.577286 25.141027 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -42.153519 21.718441 5.000000
      vertex -48.314697 25.555702 5.000000
      vertex -42.462917 21.288092 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -45.555702 28.314695 5.000000
      vertex -45.956993 28.032076 5.000000
      vertex -41.102257 22.909664 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -41.102257 22.909664 5.000000
      vertex -45.956993 28.032076 5.000000
      vertex -41.472340 22.530235 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -42.153519 21.718441 5.000000
      vertex -48.032074 25.956993 5.000000
      vertex -48.314697 25.555702 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -45.956993 28.032076 5.000000
      vertex -46.343933 27.730104 5.000000
      vertex -41.472340 22.530235 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -42.153519 21.718441 5.000000
      vertex -47.730106 26.343933 5.000000
      vertex -48.032074 25.956993 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -46.343933 27.730104 5.000000
      vertex -46.715591 27.409512 5.000000
      vertex -41.472340 22.530235 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -41.472340 22.530235 5.000000
      vertex -46.715591 27.409512 5.000000
      vertex -41.823051 22.132832 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -42.153519 21.718441 5.000000
      vertex -47.409512 26.715590 5.000000
      vertex -47.730106 26.343933 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -41.823051 22.132832 5.000000
      vertex -47.409512 26.715590 5.000000
      vertex -42.153519 21.718441 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -41.823051 22.132832 5.000000
      vertex -47.071068 27.071068 5.000000
      vertex -47.409512 26.715590 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex -46.715591 27.409512 5.000000
      vertex -47.071068 27.071068 5.000000
      vertex -41.823051 22.132832 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 40.000000 30.000000 5.000000
      vertex -40.000000 30.000000 5.000000
      vertex -30.294487 25.376467 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 40.000000 30.000000 5.000000
      vertex -30.294487 25.376467 5.000000
      vertex -29.796425 25.195189 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 40.000000 30.000000 5.000000
      vertex -29.796425 25.195189 5.000000
      vertex -29.308018 24.989307 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 40.000000 30.000000 5.000000
      vertex -29.308018 24.989307 5.000000
      vertex -28.830481 24.759336 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 40.000000 30.000000 5.000000
      vertex -28.830481 24.759336 5.000000
      vertex -28.365000 24.505850 5.000000
    endloop
  endfacet
  facet normal 0.000000 0.000000 1.000000
    outer loop
      vertex 40.000000 30.000000 5.000000
      vertex -28.365000 24.505850 5.000000
      vertex -27.912733 24.229475 5.000000
    endloop
  endfacet
  facet normal -1.000000 0.000000 0.000000
    outer loop
      vertex -50.000000 20.000000 0.000000
      vertex -50.000000 -20.000000 0.000000
      vertex -50.000000 -20.000000 5.000000
    endloop
  endfacet
  facet normal -1.000000 0.000000 0.000000
    outer loop
      vertex -50.000000 20.000000 0.000000
      vertex -50.000000 -20.000000 5.000000
      vertex -50.000000 20.000000 5.000000
    endloop
  endfacet
  facet normal 1.000000 0.000000 0.000000
    outer loop
      vertex 50.000000 -20.000000 0.000000
      vertex 50.000000 20.000000 0.000000
      vertex 50.000000 20.000000 5.000000
    endloop
  endfacet
  facet normal 1.000000 0.000000 0.000000
    outer loop
      vertex 50.000000 -20.000000 0.000000
      vertex 50.000000 20.000000 5.000000
      vertex 50.000000 -20.000000 5.000000
    endloop
  endfacet
  facet normal -0.999699 -0.024544 -0.000000
    outer loop
      vertex -49.987953 -20.490677 5.000000
      vertex -50.000000 -20.000000 0.000000
      vertex -49.987953 -20.490677 0.000000
    endloop
  endfacet
  facet normal -0.999699 -0.024544 0.000000
    outer loop
      vertex -49.987953 -20.490677 5.000000
      vertex -50.000000 -20.000000 5.000000
      vertex -50.000000 -20.000000 0.000000
    endloop
  endfacet
  facet normal -0.997291 -0.073562 -0.000000
    outer loop
      vertex -49.951847 -20.980171 5.000000
      vertex -49.987953 -20.490677 0.000000
      vertex -49.951847 -20.980171 0.000000
    endloop
  endfacet
  facet normal -0.992480 -0.122409 -0.000000
    outer loop
      vertex -49.951847 -20.980171 5.000000
      vertex -49.951847 -20.980171 0.000000
      vertex -49.891766 -21.467304 0.000000
    endloop
  endfacet
  facet normal -0.997291 -0.073562 0.000000
    outer loop
      vertex -49.951847 -20.980171 5.000000
      vertex -49.987953 -20.490677 5.000000
      vertex -49.987953 -20.490677 0.000000
    endloop
  endfacet
  facet normal -0.992480 -0.122409 -0.000000
    outer loop
      vertex -49.891766 -21.467304 5.000000
      vertex -49.951847 -20.980171 5.000000
      vertex -49.891766 -21.467304 0.000000
    endloop
  endfacet
  facet normal -0.985278 -0.170961 -0.000000
    outer loop
      vertex -49.807854 -21.950903 5.000000
      vertex -49.891766 -21.467304 0.000000
      vertex -49.807854 -21.950903 0.000000
    endloop
  endfacet
  facet normal -0.985278 -0.170961 0.000000
    outer loop
      vertex -49.807854 -21.950903 5.000000
      vertex -49.891766 -21.467304 5.000000
      vertex -49.891766 -21.467304 0.000000
    endloop
  endfacet
  facet normal -0.975702 -0.219101 -0.000000
    outer loop
      vertex -49.700314 -22.429802 5.000000
      vertex -49.807854 -21.950903 0.000000
      vertex -49.700314 -22.429802 0.000000
    endloop
  endfacet
  facet normal -0.963776 -0.266712 -0.000000
    outer loop
      vertex -49.700314 -22.429802 5.000000
      vertex -49.700314 -22.429802 0.000000
      vertex -49.569405 -22.902847 0.000000
    endloop
  endfacet
  facet normal -0.975702 -0.219101 0.000000
    outer loop
      vertex -49.700314 -22.429802 5.000000
      vertex -49.807854 -21.950903 5.000000
      vertex -49.807854 -21.950903 0.000000
    endloop
  endfacet
  facet normal -0.963776 -0.266712 -0.000000
    outer loop
      vertex -49.569405 -22.902847 5.000000
      vertex -49.700314 -22.429802 5.000000
      vertex -49.569405 -22.902847 0.000000
    endloop
  endfacet
  facet normal -0.949527 -0.313686 -0.000000
    outer loop
      vertex -49.415440 -23.368898 5.000000
      vertex -49.569405 -22.902847 0.000000
      vertex -49.415440 -23.368898 0.000000
    endloop
  endfacet
  facet normal -0.949527 -0.313686 0.000000
    outer loop
      vertex -49.415440 -23.368898 5.000000
      vertex -49.569405 -22.902847 5.000000
      vertex -49.569405 -22.902847 0.000000
    endloop
  endfacet
  facet normal -0.932994 -0.359892 -0.000000
    outer loop
      vertex -49.238796 -23.826834 5.000000
      vertex -49.415440 -23.368898 0.000000
      vertex -49.238796 -23.826834 0.000000
    endloop
  endfacet
  facet normal -0.932994 -0.359892 0.000000
    outer loop
      vertex -49.238796 -23.826834 5.000000
      vertex -49.415440 -23.368898 5.000000
      vertex -49.415440 -23.368898 0.000000
    endloop
  endfacet
  facet normal -0.914210 -0.405240 0.000000
    outer loop
      vertex -49.039894 -24.275551 5.000000
      vertex -49.238796 -23.826834 5.000000
      vertex -49.238796 -23.826834 0.000000
    endloop
  endfacet
  facet normal -0.914210 -0.405240 -0.000000
    outer loop
      vertex -49.039894 -24.275551 5.000000
      vertex -49.238796 -23.826834 0.000000
      vertex -49.039894 -24.275551 0.000000
    endloop
  endfacet
  facet normal -0.893225 -0.449610 -0.000000
    outer loop
      vertex -48.819214 -24.713968 5.000000
      vertex -49.039894 -24.275551 0.000000
      vertex -48.819214 -24.713968 0.000000
    endloop
  endfacet
  facet normal -0.893225 -0.449610 0.000000
    outer loop
      vertex -48.819214 -24.713968 5.000000
      vertex -49.039894 -24.275551 5.000000
      vertex -49.039894 -24.275551 0.000000
    endloop
  endfacet
  facet normal -0.870085 -0.492901 -0.000000
    outer loop
      vertex -48.577286 -25.141027 5.000000
      vertex -48.819214 -24.713968 0.000000
      vertex -48.577286 -25.141027 0.000000
    endloop
  endfacet
  facet normal -0.844855 -0.534996 -0.000000
    outer loop
      vertex -48.577286 -25.141027 5.000000
      vertex -48.577286 -25.141027 0.000000
      vertex -48.314697 -25.555702 0.000000
    endloop
  endfacet
  facet normal -0.870085 -0.492901 0.000000
    outer loop
      vertex -48.577286 -25.141027 5.000000
      vertex -48.819214 -24.713968 5.000000
      vertex -48.819214 -24.713968 0.000000
    endloop
  endfacet
  facet normal -0.844855 -0.534996 -0.000000
    outer loop
      vertex -48.314697 -25.555702 5.000000
      vertex -48.577286 -25.141027 5.000000
      vertex -48.314697 -25.555702 0.000000
    endloop
  endfacet
  facet normal -0.817583 -0.575811 -0.000000
    outer loop
      vertex -48.032074 -25.956993 5.000000
      vertex -48.314697 -25.555702 0.000000
      vertex -48.032074 -25.956993 0.000000
    endloop
  endfacet
  facet normal -0.817583 -0.575811 0.000000
    outer loop
      vertex -48.032074 -25.956993 5.000000
      vertex -48.314697 -25.555702 5.000000
      vertex -48.314697 -25.555702 0.000000
    endloop
  endfacet
  facet normal -0.788350 -0.615227 -0.000000
    outer loop
      vertex -47.730106 -26.343933 5.000000
      vertex -48.032074 -25.956993 0.000000
      vertex -47.730106 -26.343933 0.000000
    endloop
  endfacet
  facet normal -0.788350 -0.615227 0.000000
    outer loop
      vertex -47.730106 -26.343933 5.000000
      vertex -48.032074 -25.956993 5.000000
      vertex -48.032074 -25.956993 0.000000
    endloop
  endfacet
  facet normal -0.757207 -0.653175 -0.000000
    outer loop
      vertex -47.409512 -26.715590 5.000000
      vertex -47.730106 -26.343933 0.000000
      vertex -47.409512 -26.715590 0.000000
    endloop
  endfacet
  facet normal -0.757207 -0.653175 0.000000
    outer loop
      vertex -47.409512 -26.715590 5.000000
      vertex -47.730106 -26.343933 5.000000
      vertex -47.730106 -26.343933 0.000000
    endloop
  endfacet
  facet normal -0.724247 -0.689541 -0.000000
    outer loop
      vertex -47.071068 -27.071068 5.000000
      vertex -47.409512 -26.715590 0.000000
      vertex -47.071068 -27.071068 0.000000
    endloop
  endfacet
  facet normal -0.724247 -0.689541 0.000000
    outer loop
      vertex -47.071068 -27.071068 5.000000
      vertex -47.409512 -26.715590 5.000000
      vertex -47.409512 -26.715590 0.000000
    endloop
  endfacet
  facet normal -0.689543 -0.724245 -0.000000
    outer loop
      vertex -46.715591 -27.409512 5.000000
      vertex -47.071068 -27.071068 0.000000
      vertex -46.715591 -27.409512 0.000000
    endloop
  endfacet
  facet normal -0.689543 -0.724245 0.000000
    outer loop
      vertex -46.715591 -27.409512 5.000000
      vertex -47.071068 -27.071068 5.000000
      vertex -47.071068 -27.071068 0.000000
    endloop
  endfacet
  facet normal -0.653171 -0.757211 -0.000000
    outer loop
      vertex -46.343933 -27.730104 5.000000
      vertex -46.715591 -27.409512 0.000000
      vertex -46.343933 -27.730104 0.000000
    endloop
  endfacet
  facet normal -0.653171 -0.757211 0.000000
    outer loop
      vertex -46.343933 -27.730104 5.000000
      vertex -46.715591 -27.409512 5.000000
      vertex -46.715591 -27.409512 0.000000
    endloop
  endfacet
  facet normal -0.615232 -0.788346 -0.000000
    outer loop
      vertex -45.956993 -28.032076 5.000000
      vertex -46.343933 -27.730104 0.000000
      vertex -45.956993 -28.032076 0.000000
    endloop
  endfacet
  facet normal -0.615232 -0.788346 0.000000
    outer loop
      vertex -45.956993 -28.032076 5.000000
      vertex -46.343933 -27.730104 5.000000
      vertex -46.343933 -27.730104 0.000000
    endloop
  endfacet
  facet normal -0.575806 -0.817586 -0.000000
    outer loop
      vertex -45.555702 -28.314695 5.000000
      vertex -45.956993 -28.032076 0.000000
      vertex -45.555702 -28.314695 0.000000
    endloop
  endfacet
  facet normal -0.575806 -0.817586 0.000000
    outer loop
      vertex -45.555702 -28.314695 5.000000
      vertex -45.956993 -28.032076 5.000000
      vertex -45.956993 -28.032076 0.000000
    endloop
  endfacet
  facet normal -0.534997 -0.844854 -0.000000
    outer loop
      vertex -45.141026 -28.577286 5.000000
      vertex -45.555702 -28.314695 0.000000
      vertex -45.141026 -28.577286 0.000000
    endloop
  endfacet
  facet normal -0.534997 -0.844854 0.000000
    outer loop
      vertex -45.141026 -28.577286 5.000000
      vertex -45.555702 -28.314695 5.000000
      vertex -45.555702 -28.314695 0.000000
    endloop
  endfacet
  facet normal -0.492898 -0.870087 -0.000000
    outer loop
      vertex -44.713966 -28.819212 5.000000
      vertex -45.141026 -28.577286 0.000000
      vertex -44.713966 -28.819212 0.000000
    endloop
  endfacet
  facet normal -0.492898 -0.870087 0.000000
    outer loop
      vertex -44.713966 -28.819212 5.000000
      vertex -45.141026 -28.577286 5.000000
      vertex -45.141026 -28.577286 0.000000
    endloop
  endfacet
  facet normal -0.449612 -0.893224 -0.000000
    outer loop
      vertex -44.275551 -29.039892 5.000000
      vertex -44.713966 -28.819212 0.000000
      vertex -44.275551 -29.039892 0.000000
    endloop
  endfacet
  facet normal -0.449612 -0.893224 0.000000
    outer loop
      vertex -44.275551 -29.039892 5.000000
      vertex -44.713966 -28.819212 5.000000
      vertex -44.713966 -28.819212 0.000000
    endloop
  endfacet
  facet normal -0.405245 -0.914208 -0.000000
    outer loop
      vertex -43.826836 -29.238796 5.000000
      vertex -44.275551 -29.039892 0.000000
      vertex -43.826836 -29.238796 0.000000
    endloop
  endfacet
  facet normal -0.405245 -0.914208 0.000000
    outer loop
      vertex -43.826836 -29.238796 5.000000
      vertex -44.275551 -29.039892 5.000000
      vertex -44.275551 -29.039892 0.000000
    endloop
  endfacet
  facet normal -0.359895 -0.932993 -0.000000
    outer loop
      vertex -43.368900 -29.415442 5.000000
      vertex -43.826836 -29.238796 0.000000
      vertex -43.368900 -29.415442 0.000000
    endloop
  endfacet
  facet normal -0.359895 -0.932993 0.000000
    outer loop
      vertex -43.368900 -29.415442 5.000000
      vertex -43.826836 -29.238796 5.000000
      vertex -43.826836 -29.238796 0.000000
    endloop
  endfacet
  facet normal -0.313678 -0.949529 -0.000000
    outer loop
      vertex -42.902847 -29.569403 5.000000
      vertex -43.368900 -29.415442 0.000000
      vertex -42.902847 -29.569403 0.000000
    endloop
  endfacet
  facet normal -0.313678 -0.949529 0.000000
    outer loop
      vertex -42.902847 -29.569403 5.000000
      vertex -43.368900 -29.415442 5.000000
      vertex -43.368900 -29.415442 0.000000
    endloop
  endfacet
  facet normal -0.266712 -0.963776 -0.000000
    outer loop
      vertex -42.429802 -29.700312 5.000000
      vertex -42.902847 -29.569403 0.000000
      vertex -42.429802 -29.700312 0.000000
    endloop
  endfacet
  facet normal -0.266712 -0.963776 0.000000
    outer loop
      vertex -42.429802 -29.700312 5.000000
      vertex -42.902847 -29.569403 5.000000
      vertex -42.902847 -29.569403 0.000000
    endloop
  endfacet
  facet normal -0.219105 -0.975701 -0.000000
    outer loop
      vertex -41.950905 -29.807854 5.000000
      vertex -42.429802 -29.700312 0.000000
      vertex -41.950905 -29.807854 0.000000
    endloop
  endfacet
  facet normal -0.219105 -0.975701 0.000000
    outer loop
      vertex -41.950905 -29.807854 5.000000
      vertex -42.429802 -29.700312 5.000000
      vertex -42.429802 -29.700312 0.000000
    endloop
  endfacet
  facet normal -0.170960 -0.985278 -0.000000
    outer loop
      vertex -41.467304 -29.891766 5.000000
      vertex -41.950905 -29.807854 0.000000
      vertex -41.467304 -29.891766 0.000000
    endloop
  endfacet
  facet normal -0.170960 -0.985278 0.000000
    outer loop
      vertex -41.467304 -29.891766 5.000000
      vertex -41.950905 -29.807854 5.000000
      vertex -41.950905 -29.807854 0.000000
    endloop
  endfacet
  facet normal -0.122409 -0.992480 -0.000000
    outer loop
      vertex -40.980171 -29.951847 5.000000
      vertex -41.467304 -29.891766 0.000000
      vertex -40.980171 -29.951847 0.000000
    endloop
  endfacet
  facet normal -0.073566 -0.997290 -0.000000
    outer loop
      vertex -40.980171 -29.951847 5.000000
      vertex -40.980171 -29.951847 0.000000
      vertex -40.490677 -29.987955 0.000000
    endloop
  endfacet
  facet normal -0.122409 -0.992480 0.000000
    outer loop
      vertex -40.980171 -29.951847 5.000000
      vertex -41.467304 -29.891766 5.000000
      vertex -41.467304 -29.891766 0.000000
    endloop
  endfacet
  facet normal -0.073566 -0.997290 -0.000000
    outer loop
      vertex -40.490677 -29.987955 5.000000
      vertex -40.980171 -29.951847 5.000000
      vertex -40.490677 -29.987955 0.000000
    endloop
  endfacet
  facet normal -0.024540 -0.999699 -0.000000
    outer loop
      vertex -40.490677 -29.987955 5.000000
      vertex -40.490677 -29.987955 0.000000
      vertex -40.000000 -30.000000 0.000000
    endloop
  endfacet
  facet normal -0.024540 -0.999699 -0.000000
    outer loop
      vertex -40.000000 -30.000000 5.000000
      vertex -40.490677 -29.987955 5.000000
      vertex -40.000000 -30.000000 0.000000
    endloop
  endfacet
  facet normal 0.999699 -0.024544 0.000000
    outer loop
      vertex 50.000000 -20.000000 0.000000
      vertex 49.987953 -20.490677 5.000000
      vertex 49.987953 -20.490677 0.000000
    endloop
  endfacet
  facet normal 0.999699 -0.024544 0.000000
    outer loop
      vertex 50.000000 -20.000000 5.000000
      vertex 49.987953 -20.490677 5.000000
      vertex 50.000000 -20.000000 0.000000
    endloop
  endfacet
  facet normal 0.997291 -0.073562 0.000000
    outer loop
      vertex 49.987953 -20.490677 0.000000
      vertex 49.951847 -20.980171 5.000000
      vertex 49.951847 -20.980171 0.000000
    endloop
  endfacet
  facet normal 0.992480 -0.122409 0.000000
    outer loop
      vertex 49.951847 -20.980171 0.000000
      vertex 49.951847 -20.980171 5.000000
      vertex 49.891766 -21.467304 0.000000
    endloop
  endfacet
  facet normal 0.997291 -0.073562 0.000000
    outer loop
      vertex 49.987953 -20.490677 5.000000
      vertex 49.951847 -20.980171 5.000000
      vertex 49.987953 -20.490677 0.000000
    endloop
  endfacet
  facet normal 0.992480 -0.122409 0.000000
    outer loop
      vertex 49.951847 -20.980171 5.000000
      vertex 49.891766 -21.467304 5.000000
      vertex 49.891766 -21.467304 0.000000
    endloop
  endfacet
  facet normal 0.985278 -0.170961 0.000000
    outer loop
      vertex 49.891766 -21.467304 0.000000
      vertex 49.807854 -21.950903 5.000000
      vertex 49.807854 -21.950903 0.000000
    endloop
  endfacet
  facet normal 0.985278 -0.170961 0.000000
    outer loop
      vertex 49.891766 -21.467304 5.000000
      vertex 49.807854 -21.950903 5.000000
      vertex 49.891766 -21.467304 0.000000
    endloop
  endfacet
  facet normal 0.975702 -0.219101 0.000000
    outer loop
      vertex 49.807854 -21.950903 0.000000
      vertex 49.700314 -22.429802 5.000000
      vertex 49.700314 -22.429802 0.000000
    endloop
  endfacet
  facet normal 0.963776 -0.266712 0.000000
    outer loop
      vertex 49.700314 -22.429802 0.000000
      vertex 49.700314 -22.429802 5.000000
      vertex 49.569405 -22.902847 0.000000
    endloop
  endfacet
  facet normal 0.975702 -0.219101 0.000000
    outer loop
      vertex 49.807854 -21.950903 5.000000
      vertex 49.700314 -22.429802 5.000000
      vertex 49.807854 -21.950903 0.000000
    endloop
  endfacet
  facet normal 0.963776 -0.266712 0.000000
    outer loop
      vertex 49.700314 -22.429802 5.000000
      vertex 49.569405 -22.902847 5.000000
      vertex 49.569405 -22.902847 0.000000
    endloop
  endfacet
  facet normal 0.949527 -0.313686 0.000000
    outer loop
      vertex 49.569405 -22.902847 0.000000
      vertex 49.415440 -23.368898 5.000000
      vertex 49.415440 -23.368898 0.000000
    endloop
  endfacet
  facet normal 0.949527 -0.313686 0.000000
    outer loop
      vertex 49.569405 -22.902847 5.000000
      vertex 49.415440 -23.368898 5.000000
      vertex 49.569405 -22.902847 0.000000
    endloop
  endfacet
  facet normal 0.932994 -0.359892 0.000000
    outer loop
      vertex 49.415440 -23.368898 0.000000
      vertex 49.238796 -23.826834 5.000000
      vertex 49.238796 -23.826834 0.000000
    endloop
  endfacet
  facet normal 0.932994 -0.359892 0.000000
    outer loop
      vertex 49.415440 -23.368898 5.000000
      vertex 49.238796 -23.826834 5.000000
      vertex 49.415440 -23.368898 0.000000
    endloop
  endfacet
  facet normal 0.914210 -0.405240 0.000000
    outer loop
      vertex 49.238796 -23.826834 5.000000
      vertex 49.039894 -24.275551 5.000000
      vertex 49.238796 -23.826834 0.000000
    endloop
  endfacet
  facet normal 0.914210 -0.405240 0.000000
    outer loop
      vertex 49.238796 -23.826834 0.000000
      vertex 49.039894 -24.275551 5.000000
      vertex 49.039894 -24.275551 0.000000
    endloop
  endfacet
  facet normal 0.893225 -0.449610 0.000000
    outer loop
      vertex 49.039894 -24.275551 0.000000
      vertex 48.819214 -24.713968 5.000000
      vertex 48.819214 -24.713968 0.000000
    endloop
  endfacet
  facet normal 0.893225 -0.449610 0.000000
    outer loop
      vertex 49.039894 -24.275551 5.000000
      vertex 48.819214 -24.713968 5.000000
      vertex 49.039894 -24.275551 0.000000
    endloop
  endfacet
  facet normal 0.870085 -0.492901 0.000000
    outer loop
      vertex 48.819214 -24.713968 0.000000
      vertex 48.577286 -25.141027 5.000000
      vertex 48.577286 -25.141027 0.000000
    endloop
  endfacet
  facet normal 0.844855 -0.534996 0.000000
    outer loop
      vertex 48.577286 -25.141027 0.000000
      vertex 48.577286 -25.141027 5.000000
      vertex 48.314697 -25.555702 0.000000
    endloop
  endfacet
  facet normal 0.870085 -0.492901 0.000000
    outer loop
      vertex 48.819214 -24.713968 5.000000
      vertex 48.577286 -25.141027 5.000000
      vertex 48.819214 -24.713968 0.000000
    endloop
  endfacet
  facet normal 0.844855 -0.534996 0.000000
    outer loop
      vertex 48.577286 -25.141027 5.000000
      vertex 48.314697 -25.555702 5.000000
      vertex 48.314697 -25.555702 0.000000
    endloop
  endfacet
  facet normal 0.817583 -0.575811 0.000000
    outer loop
      vertex 48.314697 -25.555702 0.000000
      vertex 48.032074 -25.956993 5.000000
      vertex 48.032074 -25.956993 0.000000
    endloop
  endfacet
  facet normal 0.817583 -0.575811 0.000000
    outer loop
      vertex 48.314697 -25.555702 5.000000
      vertex 48.032074 -25.956993 5.000000
      vertex 48.314697 -25.555702 0.000000
    endloop
  endfacet
  facet normal 0.788350 -0.615227 0.000000
    outer loop
      vertex 48.032074 -25.956993 0.000000
      vertex 47.730106 -26.343933 5.000000
      vertex 47.730106 -26.343933 0.000000
    endloop
  endfacet
  facet normal 0.788350 -0.615227 0.000000
    outer loop
      vertex 48.032074 -25.956993 5.000000
      vertex 47.730106 -26.343933 5.000000
      vertex 48.032074 -25.956993 0.000000
    endloop
  endfacet
  facet normal 0.757207 -0.653175 0.000000
    outer loop
      vertex 47.730106 -26.343933 0.000000
      vertex 47.409512 -26.715590 5.000000
      vertex 47.409512 -26.715590 0.000000
    endloop
  endfacet
  facet normal 0.757207 -0.653175 0.000000
    outer loop
      vertex 47.730106 -26.343933 5.000000
      vertex 47.409512 -26.715590 5.000000
      vertex 47.730106 -26.343933 0.000000
    endloop
  endfacet
  facet normal 0.724247 -0.689541 0.000000
    outer loop
      vertex 47.409512 -26.715590 0.000000
      vertex 47.071068 -27.071068 5.000000
      vertex 47.071068 -27.071068 0.000000
    endloop
  endfacet
  facet normal 0.724247 -0.689541 0.000000
    outer loop
      vertex 47.409512 -26.715590 5.000000
      vertex 47.071068 -27.071068 5.000000
      vertex 47.409512 -26.715590 0.000000
    endloop
  endfacet
  facet normal 0.689543 -0.724245 0.000000
    outer loop
      vertex 47.071068 -27.071068 0.000000
      vertex 46.715591 -27.409512 5.000000
      vertex 46.715591 -27.409512 0.000000
    endloop
  endfacet
  facet normal 0.689543 -0.724245 0.000000
    outer loop
      vertex 47.071068 -27.071068 5.000000
      vertex 46.715591 -27.409512 5.000000
      vertex 47.071068 -27.071068 0.000000
    endloop
  endfacet
  facet normal 0.653171 -0.757211 0.000000
    outer loop
      vertex 46.715591 -27.409512 0.000000
      vertex 46.343933 -27.730104 5.000000
      vertex 46.343933 -27.730104 0.000000
    endloop
  endfacet
  facet normal 0.653171 -0.757211 0.000000
    outer loop
      vertex 46.715591 -27.409512 5.000000
      vertex 46.343933 -27.730104 5.000000
      vertex 46.715591 -27.409512 0.000000
    endloop
  endfacet
  facet normal 0.615232 -0.788346 0.000000
    outer loop
      vertex 46.343933 -27.730104 0.000000
      vertex 45.956993 -28.032076 5.000000
      vertex 45.956993 -28.032076 0.000000
    endloop
  endfacet
  facet normal 0.615232 -0.788346 0.000000
    outer loop
      vertex 46.343933 -27.730104 5.000000
      vertex 45.956993 -28.032076 5.000000
      vertex 46.343933 -27.730104 0.000000
    endloop
  endfacet
  facet normal 0.575806 -0.817586 0.000000
    outer loop
      vertex 45.956993 -28.032076 0.000000
      vertex 45.555702 -28.314695 5.000000
      vertex 45.555702 -28.314695 0.000000
    endloop
  endfacet
  facet normal 0.575806 -0.817586 0.000000
    outer loop
      vertex 45.956993 -28.032076 5.000000
      vertex 45.555702 -28.314695 5.000000
      vertex 45.956993 -28.032076 0.000000
    endloop
  endfacet
  facet normal 0.534997 -0.844854 0.000000
    outer loop
      vertex 45.555702 -28.314695 0.000000
      vertex 45.141026 -28.577286 5.000000
      vertex 45.141026 -28.577286 0.000000
    endloop
  endfacet
  facet normal 0.534997 -0.844854 0.000000
    outer loop
      vertex 45.555702 -28.314695 5.000000
      vertex 45.141026 -28.577286 5.000000
      vertex 45.555702 -28.314695 0.000000
    endloop
  endfacet
  facet normal 0.492898 -0.870087 0.000000
    outer loop
      vertex 45.141026 -28.577286 0.000000
      vertex 44.713966 -28.819212 5.000000
      vertex 44.713966 -28.819212 0.000000
    endloop
  endfacet
  facet normal 0.492898 -0.870087 0.000000
    outer loop
      vertex 45.141026 -28.577286 5.000000
      vertex 44.713966 -28.819212 5.000000
      vertex 45.141026 -28.577286 0.000000
    endloop
  endfacet
  facet normal 0.449612 -0.893224 0.000000
    outer loop
      vertex 44.713966 -28.819212 0.000000
      vertex 44.275551 -29.039892 5.000000
      vertex 44.275551 -29.039892 0.000000
    endloop
  endfacet
  facet normal 0.449612 -0.893224 0.000000
    outer loop
      vertex 44.713966 -28.819212 5.000000
      vertex 44.275551 -29.039892 5.000000
      vertex 44.713966 -28.819212 0.000000
    endloop
  endfacet
  facet normal 0.405245 -0.914208 0.000000
    outer loop
      vertex 44.275551 -29.039892 0.000000
      vertex 43.826836 -29.238796 5.000000
      vertex 43.826836 -29.238796 0.000000
    endloop
  endfacet
  facet normal 0.405245 -0.914208 0.000000
    outer loop
      vertex 44.275551 -29.039892 5.000000
      vertex 43.826836 -29.238796 5.000000
      vertex 44.275551 -29.039892 0.000000
    endloop
  endfacet
  facet normal 0.359895 -0.932993 0.000000
    outer loop
      vertex 43.826836 -29.238796 0.000000
      vertex 43.368900 -29.415442 5.000000
      vertex 43.368900 -29.415442 0.000000
    endloop
  endfacet
  facet normal 0.359895 -0.932993 0.000000
    outer loop
      vertex 43.826836 -29.238796 5.000000
      vertex 43.368900 -29.415442 5.000000
      vertex 43.826836 -29.238796 0.000000
    endloop
  endfacet
  facet normal 0.313678 -0.949529 0.000000
    outer loop
      vertex 43.368900 -29.415442 0.000000
      vertex 42.902847 -29.569403 5.000000
      vertex 42.902847 -29.569403 0.000000
    endloop
  endfacet
  facet normal 0.313678 -0.949529 0.000000
    outer loop
      vertex 43.368900 -29.415442 5.000000
      vertex 42.902847 -29.569403 5.000000
      vertex 43.368900 -29.415442 0.000000
    endloop
  endfacet
  facet normal 0.266712 -0.963776 0.000000
    outer loop
      vertex 42.902847 -29.569403 0.000000
      vertex 42.429802 -29.700312 5.000000
      vertex 42.429802 -29.700312 0.000000
    endloop
  endfacet
  facet normal 0.266712 -0.963776 0.000000
    outer loop
      vertex 42.902847 -29.569403 5.000000
      vertex 42.429802 -29.700312 5.000000
      vertex 42.902847 -29.569403 0.000000
    endloop
  endfacet
  facet normal 0.219105 -0.975701 0.000000
    outer loop
      vertex 42.429802 -29.700312 0.000000
      vertex 41.950905 -29.807854 5.000000
      vertex 41.950905 -29.807854 0.000000
    endloop
  endfacet
  facet normal 0.219105 -0.975701 0.000000
    outer loop
      vertex 42.429802 -29.700312 5.000000
      vertex 41.950905 -29.807854 5.000000
      vertex 42.429802 -29.700312 0.000000
    endloop
  endfacet
  facet normal 0.170960 -0.985278 0.000000
    outer loop
      vertex 41.950905 -29.807854 0.000000
      vertex 41.467304 -29.891766 5.000000
      vertex 41.467304 -29.891766 0.000000
    endloop
  endfacet
  facet normal 0.170960 -0.985278 0.000000
    outer loop
      vertex 41.950905 -29.807854 5.000000
      vertex 41.467304 -29.891766 5.000000
      vertex 41.950905 -29.807854 0.000000
    endloop
  endfacet
  facet normal 0.122409 -0.992480 0.000000
    outer loop
      vertex 41.467304 -29.891766 0.000000
      vertex 40.980171 -29.951847 5.000000
      vertex 40.980171 -29.951847 0.000000
    endloop
  endfacet
  facet normal 0.073566 -0.997290 0.000000
    outer loop
      vertex 40.980171 -29.951847 0.000000
      vertex 40.980171 -29.951847 5.000000
      vertex 40.490677 -29.987955 0.000000
    endloop
  endfacet
  facet normal 0.122409 -0.992480 0.000000
    outer loop
      vertex 41.467304 -29.891766 5.000000
      vertex 40.980171 -29.951847 5.000000
      vertex 41.467304 -29.891766 0.000000
    endloop
  endfacet
  facet normal 0.073566 -0.997290 0.000000
    outer loop
      vertex 40.980171 -29.951847 5.000000
      vertex 40.490677 -29.987955 5.000000
      vertex 40.490677 -29.987955 0.000000
    endloop
  endfacet
  facet normal 0.024540 -0.999699 0.000000
    outer loop
      vertex 40.490677 -29.987955 0.000000
      vertex 40.490677 -29.987955 5.000000
      vertex 40.000000 -30.000000 0.000000
    endloop
  endfacet
  facet normal 0.024540 -0.999699 0.000000
    outer loop
      vertex 40.490677 -29.987955 5.000000
      vertex 40.000000 -30.000000 5.000000
      vertex 40.000000 -30.000000 0.000000
    endloop
  endfacet
  facet normal 0.000000 -1.000000 0.000000
    outer loop
      vertex -40.000000 -30.000000 0.000000
      vertex 40.000000 -30.000000 0.000000
      vertex 40.000000 -30.000000 5.000000
    endloop
  endfacet
  facet normal 0.000000 -1.000000 0.000000
    outer loop
      vertex -40.000000 -30.000000 0.000000
      vertex 40.000000 -30.000000 5.000000
      vertex -40.000000 -30.000000 5.000000
    endloop
  endfacet
  facet normal -0.999689 -0.024931 -0.000000
    outer loop
      vertex -23.049999 15.300000 5.000000
      vertex -23.063213 15.829862 5.000000
      vertex -23.049999 15.300000 0.000000
    endloop
  endfacet
  facet normal -0.999689 -0.024931 0.000000
    outer loop
      vertex -23.049999 15.300000 0.000000
      vertex -23.063213 15.829862 5.000000
      vertex -23.063213 15.829862 0.000000
    endloop
  endfacet
  facet normal -0.997204 -0.074732 0.000000
    outer loop
      vertex -23.063213 15.829862 0.000000
      vertex -23.102823 16.358406 5.000000
      vertex -23.102823 16.358406 0.000000
    endloop
  endfacet
  facet normal -0.992239 -0.124342 0.000000
    outer loop
      vertex -23.102823 16.358406 0.000000
      vertex -23.102823 16.358406 5.000000
      vertex -23.168728 16.884319 0.000000
    endloop
  endfacet
  facet normal -0.997204 -0.074732 -0.000000
    outer loop
      vertex -23.063213 15.829862 5.000000
      vertex -23.102823 16.358406 5.000000
      vertex -23.063213 15.829862 0.000000
    endloop
  endfacet
  facet normal -0.992239 -0.124342 0.000000
    outer loop
      vertex -23.102823 16.358406 5.000000
      vertex -23.168728 16.884319 5.000000
      vertex -23.168728 16.884319 0.000000
    endloop
  endfacet
  facet normal -0.984807 -0.173650 0.000000
    outer loop
      vertex -23.168728 16.884319 0.000000
      vertex -23.260767 17.406294 5.000000
      vertex -23.260767 17.406294 0.000000
    endloop
  endfacet
  facet normal -0.974928 -0.222519 0.000000
    outer loop
      vertex -23.260767 17.406294 0.000000
      vertex -23.260767 17.406294 5.000000
      vertex -23.378708 17.923031 0.000000
    endloop
  endfacet
  facet normal -0.984807 -0.173650 -0.000000
    outer loop
      vertex -23.168728 16.884319 5.000000
      vertex -23.260767 17.406294 5.000000
      vertex -23.168728 16.884319 0.000000
    endloop
  endfacet
  facet normal -0.974928 -0.222519 0.000000
    outer loop
      vertex -23.260767 17.406294 5.000000
      vertex -23.378708 17.923031 5.000000
      vertex -23.378708 17.923031 0.000000
    endloop
  endfacet
  facet normal -0.962624 -0.270841 0.000000
    outer loop
      vertex -23.378708 17.923031 0.000000
      vertex -23.522261 18.433247 5.000000
      vertex -23.522261 18.433247 0.000000
    endloop
  endfacet
  facet normal -0.962624 -0.270841 -0.000000
    outer loop
      vertex -23.378708 17.923031 5.000000
      vertex -23.522261 18.433247 5.000000
      vertex -23.378708 17.923031 0.000000
    endloop
  endfacet
  facet normal -0.947928 -0.318485 0.000000
    outer loop
      vertex -23.522261 18.433247 0.000000
      vertex -23.691067 18.935675 5.000000
      vertex -23.691067 18.935675 0.000000
    endloop
  endfacet
  facet normal -0.930873 -0.365343 0.000000
    outer loop
      vertex -23.691067 18.935675 0.000000
      vertex -23.691067 18.935675 5.000000
      vertex -23.884708 19.429062 0.000000
    endloop
  endfacet
  facet normal -0.947928 -0.318485 -0.000000
    outer loop
      vertex -23.522261 18.433247 5.000000
      vertex -23.691067 18.935675 5.000000
      vertex -23.522261 18.433247 0.000000
    endloop
  endfacet
  facet normal -0.930873 -0.365343 0.000000
    outer loop
      vertex -23.691067 18.935675 5.000000
      vertex -23.884708 19.429062 5.000000
      vertex -23.884708 19.429062 0.000000
    endloop
  endfacet
  facet normal -0.911506 -0.411287 0.000000
    outer loop
      vertex -23.884708 19.429062 0.000000
      vertex -24.102701 19.912184 5.000000
      vertex -24.102701 19.912184 0.000000
    endloop
  endfacet
  facet normal -0.911506 -0.411287 -0.000000
    outer loop
      vertex -23.884708 19.429062 5.000000
      vertex -24.102701 19.912184 5.000000
      vertex -23.884708 19.429062 0.000000
    endloop
  endfacet
  facet normal -0.889872 -0.456210 0.000000
    outer loop
      vertex -24.102701 19.912184 0.000000
      vertex -24.344505 20.383841 5.000000
      vertex -24.344505 20.383841 0.000000
    endloop
  endfacet
  facet normal -0.889872 -0.456210 -0.000000
    outer loop
      vertex -24.102701 19.912184 5.000000
      vertex -24.344505 20.383841 5.000000
      vertex -24.102701 19.912184 0.000000
    endloop
  endfacet
  facet normal -0.866025 -0.500000 -0.000000
    outer loop
      vertex -24.344505 20.383841 5.000000
      vertex -24.609518 20.842855 5.000000
      vertex -24.344505 20.383841 0.000000
    endloop
  endfacet
  facet normal -0.866025 -0.500000 0.000000
    outer loop
      vertex -24.344505 20.383841 0.000000
      vertex -24.609518 20.842855 5.000000
      vertex -24.609518 20.842855 0.000000
    endloop
  endfacet
  facet normal -0.840027 -0.542545 0.000000
    outer loop
      vertex -24.609518 20.842855 0.000000
      vertex -24.609518 20.842855 5.000000
      vertex -24.897081 21.288092 0.000000
    endloop
  endfacet
  facet normal -0.840027 -0.542545 0.000000
    outer loop
      vertex -24.609518 20.842855 5.000000
      vertex -24.897081 21.288092 5.000000
      vertex -24.897081 21.288092 0.000000
    endloop
  endfacet
  facet normal -0.811938 -0.583744 -0.000000
    outer loop
      vertex -24.897081 21.288092 5.000000
      vertex -25.206482 21.718441 5.000000
      vertex -24.897081 21.288092 0.000000
    endloop
  endfacet
  facet normal -0.811938 -0.583744 0.000000
    outer loop
      vertex -24.897081 21.288092 0.000000
      vertex -25.206482 21.718441 5.000000
      vertex -25.206482 21.718441 0.000000
    endloop
  endfacet
  facet normal -0.781832 -0.623490 -0.000000
    outer loop
      vertex -25.206482 21.718441 5.000000
      vertex -25.536947 22.132832 5.000000
      vertex -25.206482 21.718441 0.000000
    endloop
  endfacet
  facet normal -0.781832 -0.623490 0.000000
    outer loop
      vertex -25.206482 21.718441 0.000000
      vertex -25.536947 22.132832 5.000000
      vertex -25.536947 22.132832 0.000000
    endloop
  endfacet
  facet normal -0.749780 -0.661687 0.000000
    outer loop
      vertex -25.536947 22.132832 0.000000
      vertex -25.887659 22.530235 5.000000
      vertex -25.887659 22.530235 0.000000
    endloop
  endfacet
  facet normal -0.715868 -0.698235 0.000000
    outer loop
      vertex -25.887659 22.530235 0.000000
      vertex -25.887659 22.530235 5.000000
      vertex -26.257742 22.909664 0.000000
    endloop
  endfacet
  facet normal -0.749780 -0.661687 -0.000000
    outer loop
      vertex -25.536947 22.132832 5.000000
      vertex -25.887659 22.530235 5.000000
      vertex -25.536947 22.132832 0.000000
    endloop
  endfacet
  facet normal -0.715868 -0.698235 0.000000
    outer loop
      vertex -25.887659 22.530235 5.000000
      vertex -26.257742 22.909664 5.000000
      vertex -26.257742 22.909664 0.000000
    endloop
  endfacet
  facet normal -0.680172 -0.733053 0.000000
    outer loop
      vertex -26.257742 22.909664 0.000000
      vertex -26.646280 23.270174 5.000000
      vertex -26.646280 23.270174 0.000000
    endloop
  endfacet
  facet normal -0.680172 -0.733053 -0.000000
    outer loop
      vertex -26.257742 22.909664 5.000000
      vertex -26.646280 23.270174 5.000000
      vertex -26.257742 22.909664 0.000000
    endloop
  endfacet
  facet normal -0.642788 -0.766044 0.000000
    outer loop
      vertex -26.646280 23.270174 0.000000
      vertex -27.052303 23.610868 5.000000
      vertex -27.052303 23.610868 0.000000
    endloop
  endfacet
  facet normal -0.603805 -0.797132 0.000000
    outer loop
      vertex -27.052303 23.610868 0.000000
      vertex -27.052303 23.610868 5.000000
      vertex -27.474804 23.930901 0.000000
    endloop
  endfacet
  facet normal -0.642788 -0.766044 -0.000000
    outer loop
      vertex -26.646280 23.270174 5.000000
      vertex -27.052303 23.610868 5.000000
      vertex -26.646280 23.270174 0.000000
    endloop
  endfacet
  facet normal -0.603805 -0.797132 0.000000
    outer loop
      vertex -27.052303 23.610868 5.000000
      vertex -27.474804 23.930901 5.000000
      vertex -27.474804 23.930901 0.000000
    endloop
  endfacet
  facet normal -0.563319 -0.826239 0.000000
    outer loop
      vertex -27.474804 23.930901 0.000000
      vertex -27.912733 24.229475 5.000000
      vertex -27.912733 24.229475 0.000000
    endloop
  endfacet
  facet normal -0.563319 -0.826239 -0.000000
    outer loop
      vertex -27.474804 23.930901 5.000000
      vertex -27.912733 24.229475 5.000000
      vertex -27.474804 23.930901 0.000000
    endloop
  endfacet
  facet normal -0.521436 -0.853291 0.000000
    outer loop
      vertex -27.912733 24.229475 0.000000
      vertex -28.365000 24.505850 5.000000
      vertex -28.365000 24.505850 0.000000
    endloop
  endfacet
  facet normal -0.521436 -0.853291 -0.000000
    outer loop
      vertex -27.912733 24.229475 5.000000
      vertex -28.365000 24.505850 5.000000
      vertex -27.912733 24.229475 0.000000
    endloop
  endfacet
  facet normal -0.478253 -0.878222 0.000000
    outer loop
      vertex -28.365000 24.505850 0.000000
      vertex -28.830481 24.759336 5.000000
      vertex -28.830481 24.759336 0.000000
    endloop
  endfacet
  facet normal -0.478253 -0.878222 -0.000000
    outer loop
      vertex -28.365000 24.505850 5.000000
      vertex -28.830481 24.759336 5.000000
      vertex -28.365000 24.505850 0.000000
    endloop
  endfacet
  facet normal -0.433886 -0.900968 0.000000
    outer loop
      vertex -28.830481 24.759336 0.000000
      vertex -29.308018 24.989307 5.000000
      vertex -29.308018 24.989307 0.000000
    endloop
  endfacet
  facet normal -0.433886 -0.900968 -0.000000
    outer loop
      vertex -28.830481 24.759336 5.000000
      vertex -29.308018 24.989307 5.000000
      vertex -28.830481 24.759336 0.000000
    endloop
  endfacet
  facet normal -0.388435 -0.921476 0.000000
    outer loop
      vertex -29.308018 24.989307 0.000000
      vertex -29.796425 25.195189 5.000000
      vertex -29.796425 25.195189 0.000000
    endloop
  endfacet
  facet normal -0.388435 -0.921476 -0.000000
    outer loop
      vertex -29.308018 24.989307 5.000000
      vertex -29.796425 25.195189 5.000000
      vertex -29.308018 24.989307 0.000000
    endloop
  endfacet
  facet normal -0.342018 -0.939694 0.000000
    outer loop
      vertex -29.796425 25.195189 0.000000
      vertex -30.294487 25.376467 5.000000
      vertex -30.294487 25.376467 0.000000
    endloop
  endfacet
  facet normal -0.342018 -0.939694 -0.000000
    outer loop
      vertex -29.796425 25.195189 5.000000
      vertex -30.294487 25.376467 5.000000
      vertex -29.796425 25.195189 0.000000
    endloop
  endfacet
  facet normal -0.294757 -0.955572 0.000000
    outer loop
      vertex -30.294487 25.376467 0.000000
      vertex -30.800966 25.532696 5.000000
      vertex -30.800966 25.532696 0.000000
    endloop
  endfacet
  facet normal -0.294757 -0.955572 -0.000000
    outer loop
      vertex -30.294487 25.376467 5.000000
      vertex -30.800966 25.532696 5.000000
      vertex -30.294487 25.376467 0.000000
    endloop
  endfacet
  facet normal -0.246759 -0.969077 0.000000
    outer loop
      vertex -30.800966 25.532696 0.000000
      vertex -31.314602 25.663485 5.000000
      vertex -31.314602 25.663485 0.000000
    endloop
  endfacet
  facet normal -0.246759 -0.969077 -0.000000
    outer loop
      vertex -30.800966 25.532696 5.000000
      vertex -31.314602 25.663485 5.000000
      vertex -30.800966 25.532696 0.000000
    endloop
  endfacet
  facet normal -0.198145 -0.980173 0.000000
    outer loop
      vertex -31.314602 25.663485 0.000000
      vertex -31.834120 25.768507 5.000000
      vertex -31.834120 25.768507 0.000000
    endloop
  endfacet
  facet normal -0.149043 -0.988831 0.000000
    outer loop
      vertex -31.834120 25.768507 0.000000
      vertex -31.834120 25.768507 5.000000
      vertex -32.358227 25.847504 0.000000
    endloop
  endfacet
  facet normal -0.198145 -0.980173 -0.000000
    outer loop
      vertex -31.314602 25.663485 5.000000
      vertex -31.834120 25.768507 5.000000
      vertex -31.314602 25.663485 0.000000
    endloop
  endfacet
  facet normal -0.149043 -0.988831 0.000000
    outer loop
      vertex -31.834120 25.768507 5.000000
      vertex -32.358227 25.847504 5.000000
      vertex -32.358227 25.847504 0.000000
    endloop
  endfacet
  facet normal -0.099566 -0.995031 0.000000
    outer loop
      vertex -32.358227 25.847504 0.000000
      vertex -32.885620 25.900276 5.000000
      vertex -32.885620 25.900276 0.000000
    endloop
  endfacet
  facet normal -0.099566 -0.995031 -0.000000
    outer loop
      vertex -32.358227 25.847504 5.000000
      vertex -32.885620 25.900276 5.000000
      vertex -32.358227 25.847504 0.000000
    endloop
  endfacet
  facet normal -0.049848 -0.998757 0.000000
    outer loop
      vertex -32.885620 25.900276 0.000000
      vertex -33.414986 25.926697 5.000000
      vertex -33.414986 25.926697 0.000000
    endloop
  endfacet
  facet normal -0.049848 -0.998757 -0.000000
    outer loop
      vertex -32.885620 25.900276 5.000000
      vertex -33.414986 25.926697 5.000000
      vertex -32.885620 25.900276 0.000000
    endloop
  endfacet
  facet normal 0.000000 -1.000000 0.000000
    outer loop
      vertex -33.414986 25.926697 0.000000
      vertex -33.945015 25.926697 5.000000
      vertex -33.945015 25.926697 0.000000
    endloop
  endfacet
  facet normal -0.000000 -1.000000 -0.000000
    outer loop
      vertex -33.414986 25.926697 5.000000
      vertex -33.945015 25.926697 5.000000
      vertex -33.414986 25.926697 0.000000
    endloop
  endfacet
  facet normal 0.049848 -0.998757 0.000000
    outer loop
      vertex -33.945015 25.926697 0.000000
      vertex -34.474380 25.900276 5.000000
      vertex -34.474380 25.900276 0.000000
    endloop
  endfacet
  facet normal 0.049848 -0.998757 0.000000
    outer loop
      vertex -33.945015 25.926697 5.000000
      vertex -34.474380 25.900276 5.000000
      vertex -33.945015 25.926697 0.000000
    endloop
  endfacet
  facet normal 0.099566 -0.995031 0.000000
    outer loop
      vertex -34.474380 25.900276 0.000000
      vertex -35.001774 25.847504 5.000000
      vertex -35.001774 25.847504 0.000000
    endloop
  endfacet
  facet normal 0.099566 -0.995031 0.000000
    outer loop
      vertex -34.474380 25.900276 5.000000
      vertex -35.001774 25.847504 5.000000
      vertex -34.474380 25.900276 0.000000
    endloop
  endfacet
  facet normal 0.149043 -0.988831 0.000000
    outer loop
      vertex -35.001774 25.847504 0.000000
      vertex -35.525879 25.768507 5.000000
      vertex -35.525879 25.768507 0.000000
    endloop
  endfacet
  facet normal 0.149043 -0.988831 0.000000
    outer loop
      vertex -35.001774 25.847504 5.000000
      vertex -35.525879 25.768507 5.000000
      vertex -35.001774 25.847504 0.000000
    endloop
  endfacet
  facet normal 0.198145 -0.980173 0.000000
    outer loop
      vertex -35.525879 25.768507 0.000000
      vertex -36.045399 25.663485 5.000000
      vertex -36.045399 25.663485 0.000000
    endloop
  endfacet
  facet normal 0.198145 -0.980173 0.000000
    outer loop
      vertex -35.525879 25.768507 5.000000
      vertex -36.045399 25.663485 5.000000
      vertex -35.525879 25.768507 0.000000
    endloop
  endfacet
  facet normal 0.246760 -0.969077 0.000000
    outer loop
      vertex -36.045399 25.663485 0.000000
      vertex -36.559032 25.532696 5.000000
      vertex -36.559032 25.532696 0.000000
    endloop
  endfacet
  facet normal 0.294756 -0.955573 0.000000
    outer loop
      vertex -36.559032 25.532696 0.000000
      vertex -36.559032 25.532696 5.000000
      vertex -37.065514 25.376467 0.000000
    endloop
  endfacet
  facet normal 0.246760 -0.969077 0.000000
    outer loop
      vertex -36.045399 25.663485 5.000000
      vertex -36.559032 25.532696 5.000000
      vertex -36.045399 25.663485 0.000000
    endloop
  endfacet
  facet normal 0.294756 -0.955573 0.000000
    outer loop
      vertex -36.559032 25.532696 5.000000
      vertex -37.065514 25.376467 5.000000
      vertex -37.065514 25.376467 0.000000
    endloop
  endfacet
  facet normal 0.342018 -0.939694 0.000000
    outer loop
      vertex -37.065514 25.376467 0.000000
      vertex -37.065514 25.376467 5.000000
      vertex -37.563576 25.195189 0.000000
    endloop
  endfacet
  facet normal 0.342018 -0.939694 0.000000
    outer loop
      vertex -37.065514 25.376467 5.000000
      vertex -37.563576 25.195189 5.000000
      vertex -37.563576 25.195189 0.000000
    endloop
  endfacet
  facet normal 0.388435 -0.921476 0.000000
    outer loop
      vertex -37.563576 25.195189 5.000000
      vertex -38.051983 24.989307 5.000000
      vertex -37.563576 25.195189 0.000000
    endloop
  endfacet
  facet normal 0.388435 -0.921476 0.000000
    outer loop
      vertex -37.563576 25.195189 0.000000
      vertex -38.051983 24.989307 5.000000
      vertex -38.051983 24.989307 0.000000
    endloop
  endfacet
  facet normal 0.433887 -0.900967 0.000000
    outer loop
      vertex -38.051983 24.989307 5.000000
      vertex -38.529518 24.759336 5.000000
      vertex -38.051983 24.989307 0.000000
    endloop
  endfacet
  facet normal 0.433887 -0.900967 0.000000
    outer loop
      vertex -38.051983 24.989307 0.000000
      vertex -38.529518 24.759336 5.000000
      vertex -38.529518 24.759336 0.000000
    endloop
  endfacet
  facet normal 0.478253 -0.878222 0.000000
    outer loop
      vertex -38.529518 24.759336 5.000000
      vertex -38.994999 24.505850 5.000000
      vertex -38.529518 24.759336 0.000000
    endloop
  endfacet
  facet normal 0.478253 -0.878222 0.000000
    outer loop
      vertex -38.529518 24.759336 0.000000
      vertex -38.994999 24.505850 5.000000
      vertex -38.994999 24.505850 0.000000
    endloop
  endfacet
  facet normal 0.521436 -0.853291 0.000000
    outer loop
      vertex -38.994999 24.505850 5.000000
      vertex -39.447266 24.229475 5.000000
      vertex -38.994999 24.505850 0.000000
    endloop
  endfacet
  facet normal 0.521436 -0.853291 0.000000
    outer loop
      vertex -38.994999 24.505850 0.000000
      vertex -39.447266 24.229475 5.000000
      vertex -39.447266 24.229475 0.000000
    endloop
  endfacet
  facet normal 0.563318 -0.826240 0.000000
    outer loop
      vertex -39.447266 24.229475 5.000000
      vertex -39.885197 23.930901 5.000000
      vertex -39.447266 24.229475 0.000000
    endloop
  endfacet
  facet normal 0.563318 -0.826240 0.000000
    outer loop
      vertex -39.447266 24.229475 0.000000
      vertex -39.885197 23.930901 5.000000
      vertex -39.885197 23.930901 0.000000
    endloop
  endfacet
  facet normal 0.603805 -0.797132 0.000000
    outer loop
      vertex -39.885197 23.930901 5.000000
      vertex -40.307697 23.610868 5.000000
      vertex -39.885197 23.930901 0.000000
    endloop
  endfacet
  facet normal 0.603805 -0.797132 0.000000
    outer loop
      vertex -39.885197 23.930901 0.000000
      vertex -40.307697 23.610868 5.000000
      vertex -40.307697 23.610868 0.000000
    endloop
  endfacet
  facet normal 0.642787 -0.766045 0.000000
    outer loop
      vertex -40.307697 23.610868 5.000000
      vertex -40.713722 23.270174 5.000000
      vertex -40.307697 23.610868 0.000000
    endloop
  endfacet
  facet normal 0.642787 -0.766045 0.000000
    outer loop
      vertex -40.307697 23.610868 0.000000
      vertex -40.713722 23.270174 5.000000
      vertex -40.713722 23.270174 0.000000
    endloop
  endfacet
  facet normal 0.680175 -0.733050 0.000000
    outer loop
      vertex -40.713722 23.270174 0.000000
      vertex -40.713722 23.270174 5.000000
      vertex -41.102257 22.909664 0.000000
    endloop
  endfacet
  facet normal 0.680175 -0.733050 0.000000
    outer loop
      vertex -40.713722 23.270174 5.000000
      vertex -41.102257 22.909664 5.000000
      vertex -41.102257 22.909664 0.000000
    endloop
  endfacet
  facet normal 0.715868 -0.698235 0.000000
    outer loop
      vertex -41.102257 22.909664 0.000000
      vertex -41.472340 22.530235 5.000000
      vertex -41.472340 22.530235 0.000000
    endloop
  endfacet
  facet normal 0.715868 -0.698235 0.000000
    outer loop
      vertex -41.102257 22.909664 5.000000
      vertex -41.472340 22.530235 5.000000
      vertex -41.102257 22.909664 0.000000
    endloop
  endfacet
  facet normal 0.749780 -0.661687 0.000000
    outer loop
      vertex -41.472340 22.530235 0.000000
      vertex -41.823051 22.132832 5.000000
      vertex -41.823051 22.132832 0.000000
    endloop
  endfacet
  facet normal 0.749780 -0.661687 0.000000
    outer loop
      vertex -41.472340 22.530235 5.000000
      vertex -41.823051 22.132832 5.000000
      vertex -41.472340 22.530235 0.000000
    endloop
  endfacet
  facet normal 0.781830 -0.623492 0.000000
    outer loop
      vertex -41.823051 22.132832 0.000000
      vertex -42.153519 21.718441 5.000000
      vertex -42.153519 21.718441 0.000000
    endloop
  endfacet
  facet normal 0.811939 -0.583742 0.000000
    outer loop
      vertex -42.153519 21.718441 0.000000
      vertex -42.153519 21.718441 5.000000
      vertex -42.462917 21.288092 0.000000
    endloop
  endfacet
  facet normal 0.781830 -0.623492 0.000000
    outer loop
      vertex -41.823051 22.132832 5.000000
      vertex -42.153519 21.718441 5.000000
      vertex -41.823051 22.132832 0.000000
    endloop
  endfacet
  facet normal 0.811939 -0.583742 0.000000
    outer loop
      vertex -42.153519 21.718441 5.000000
      vertex -42.462917 21.288092 5.000000
      vertex -42.462917 21.288092 0.000000
    endloop
  endfacet
  facet normal 0.840027 -0.542545 0.000000
    outer loop
      vertex -42.462917 21.288092 0.000000
      vertex -42.750481 20.842855 5.000000
      vertex -42.750481 20.842855 0.000000
    endloop
  endfacet
  facet normal 0.866024 -0.500003 0.000000
    outer loop
      vertex -42.750481 20.842855 0.000000
      vertex -42.750481 20.842855 5.000000
      vertex -43.015495 20.383841 0.000000
    endloop
  endfacet
  facet normal 0.840027 -0.542545 0.000000
    outer loop
      vertex -42.462917 21.288092 5.000000
      vertex -42.750481 20.842855 5.000000
      vertex -42.462917 21.288092 0.000000
    endloop
  endfacet
  facet normal 0.866024 -0.500003 0.000000
    outer loop
      vertex -42.750481 20.842855 5.000000
      vertex -43.015495 20.383841 5.000000
      vertex -43.015495 20.383841 0.000000
    endloop
  endfacet
  facet normal 0.889873 -0.456207 0.000000
    outer loop
      vertex -43.015495 20.383841 0.000000
      vertex -43.257298 19.912184 5.000000
      vertex -43.257298 19.912184 0.000000
    endloop
  endfacet
  facet normal 0.911505 -0.411290 0.000000
    outer loop
      vertex -43.257298 19.912184 0.000000
      vertex -43.257298 19.912184 5.000000
      vertex -43.475292 19.429062 0.000000
    endloop
  endfacet
  facet normal 0.889873 -0.456207 0.000000
    outer loop
      vertex -43.015495 20.383841 5.000000
      vertex -43.257298 19.912184 5.000000
      vertex -43.015495 20.383841 0.000000
    endloop
  endfacet
  facet normal 0.911505 -0.411290 0.000000
    outer loop
      vertex -43.257298 19.912184 5.000000
      vertex -43.475292 19.429062 5.000000
      vertex -43.475292 19.429062 0.000000
    endloop
  endfacet
  facet normal 0.930873 -0.365343 0.000000
    outer loop
      vertex -43.475292 19.429062 0.000000
      vertex -43.668934 18.935675 5.000000
      vertex -43.668934 18.935675 0.000000
    endloop
  endfacet
  facet normal 0.930873 -0.365343 0.000000
    outer loop
      vertex -43.475292 19.429062 5.000000
      vertex -43.668934 18.935675 5.000000
      vertex -43.475292 19.429062 0.000000
    endloop
  endfacet
  facet normal 0.947929 -0.318482 0.000000
    outer loop
      vertex -43.668934 18.935675 0.000000
      vertex -43.837738 18.433247 5.000000
      vertex -43.837738 18.433247 0.000000
    endloop
  endfacet
  facet normal 0.962623 -0.270844 0.000000
    outer loop
      vertex -43.837738 18.433247 0.000000
      vertex -43.837738 18.433247 5.000000
      vertex -43.981293 17.923031 0.000000
    endloop
  endfacet
  facet normal 0.947929 -0.318482 0.000000
    outer loop
      vertex -43.668934 18.935675 5.000000
      vertex -43.837738 18.433247 5.000000
      vertex -43.668934 18.935675 0.000000
    endloop
  endfacet
  facet normal 0.962623 -0.270844 0.000000
    outer loop
      vertex -43.837738 18.433247 5.000000
      vertex -43.981293 17.923031 5.000000
      vertex -43.981293 17.923031 0.000000
    endloop
  endfacet
  facet normal 0.974929 -0.222516 0.000000
    outer loop
      vertex -43.981293 17.923031 0.000000
      vertex -44.099232 17.406294 5.000000
      vertex -44.099232 17.406294 0.000000
    endloop
  endfacet
  facet normal 0.974929 -0.222516 0.000000
    outer loop
      vertex -43.981293 17.923031 5.000000
      vertex -44.099232 17.406294 5.000000
      vertex -43.981293 17.923031 0.000000
    endloop
  endfacet
  facet normal 0.984807 -0.173653 0.000000
    outer loop
      vertex -44.099232 17.406294 0.000000
      vertex -44.191273 16.884319 5.000000
      vertex -44.191273 16.884319 0.000000
    endloop
  endfacet
  facet normal 0.984807 -0.173653 0.000000
    outer loop
      vertex -44.099232 17.406294 5.000000
      vertex -44.191273 16.884319 5.000000
      vertex -44.099232 17.406294 0.000000
    endloop
  endfacet
  facet normal 0.992240 -0.124339 0.000000
    outer loop
      vertex -44.191273 16.884319 0.000000
      vertex -44.257175 16.358406 5.000000
      vertex -44.257175 16.358406 0.000000
    endloop
  endfacet
  facet normal 0.992240 -0.124339 0.000000
    outer loop
      vertex -44.191273 16.884319 5.000000
      vertex -44.257175 16.358406 5.000000
      vertex -44.191273 16.884319 0.000000
    endloop
  endfacet
  facet normal 0.997203 -0.074736 0.000000
    outer loop
      vertex -44.257175 16.358406 5.000000
      vertex -44.296787 15.829862 5.000000
      vertex -44.257175 16.358406 0.000000
    endloop
  endfacet
  facet normal 0.997203 -0.074736 0.000000
    outer loop
      vertex -44.257175 16.358406 0.000000
      vertex -44.296787 15.829862 5.000000
      vertex -44.296787 15.829862 0.000000
    endloop
  endfacet
  facet normal 0.999689 -0.024931 0.000000
    outer loop
      vertex -44.296787 15.829862 0.000000
      vertex -44.296787 15.829862 5.000000
      vertex -44.310001 15.300000 0.000000
    endloop
  endfacet
  facet normal 0.999689 -0.024931 0.000000
    outer loop
      vertex -44.296787 15.829862 5.000000
      vertex -44.310001 15.300000 5.000000
      vertex -44.310001 15.300000 0.000000
    endloop
  endfacet
  facet normal 0.999689 0.024931 -0.000000
    outer loop
      vertex -44.310001 15.300000 0.000000
      vertex -44.310001 15.300000 5.000000
      vertex -44.296787 14.770138 0.000000
    endloop
  endfacet
  facet normal 0.999689 0.024931 0.000000
    outer loop
      vertex -44.310001 15.300000 5.000000
      vertex -44.296787 14.770138 5.000000
      vertex -44.296787 14.770138 0.000000
    endloop
  endfacet
  facet normal 0.997203 0.074736 0.000000
    outer loop
      vertex -44.296787 14.770138 5.000000
      vertex -44.257175 14.241593 5.000000
      vertex -44.296787 14.770138 0.000000
    endloop
  endfacet
  facet normal 0.997203 0.074736 0.000000
    outer loop
      vertex -44.296787 14.770138 0.000000
      vertex -44.257175 14.241593 5.000000
      vertex -44.257175 14.241593 0.000000
    endloop
  endfacet
  facet normal 0.992240 0.124339 -0.000000
    outer loop
      vertex -44.257175 14.241593 0.000000
      vertex -44.257175 14.241593 5.000000
      vertex -44.191273 13.715681 0.000000
    endloop
  endfacet
  facet normal 0.992240 0.124339 0.000000
    outer loop
      vertex -44.257175 14.241593 5.000000
      vertex -44.191273 13.715681 5.000000
      vertex -44.191273 13.715681 0.000000
    endloop
  endfacet
  facet normal 0.984807 0.173653 -0.000000
    outer loop
      vertex -44.191273 13.715681 0.000000
      vertex -44.191273 13.715681 5.000000
      vertex -44.099232 13.193707 0.000000
    endloop
  endfacet
  facet normal 0.984807 0.173653 0.000000
    outer loop
      vertex -44.191273 13.715681 5.000000
      vertex -44.099232 13.193707 5.000000
      vertex -44.099232 13.193707 0.000000
    endloop
  endfacet
  facet normal 0.974929 0.222515 -0.000000
    outer loop
      vertex -44.099232 13.193707 0.000000
      vertex -44.099232 13.193707 5.000000
      vertex -43.981293 12.676969 0.000000
    endloop
  endfacet
  facet normal 0.974929 0.222515 0.000000
    outer loop
      vertex -44.099232 13.193707 5.000000
      vertex -43.981293 12.676969 5.000000
      vertex -43.981293 12.676969 0.000000
    endloop
  endfacet
  facet normal 0.962623 0.270844 0.000000
    outer loop
      vertex -43.981293 12.676969 5.000000
      vertex -43.837738 12.166753 5.000000
      vertex -43.981293 12.676969 0.000000
    endloop
  endfacet
  facet normal 0.962623 0.270844 0.000000
    outer loop
      vertex -43.981293 12.676969 0.000000
      vertex -43.837738 12.166753 5.000000
      vertex -43.837738 12.166753 0.000000
    endloop
  endfacet
  facet normal 0.947929 0.318483 -0.000000
    outer loop
      vertex -43.837738 12.166753 0.000000
      vertex -43.837738 12.166753 5.000000
      vertex -43.668934 11.664326 0.000000
    endloop
  endfacet
  facet normal 0.947929 0.318483 0.000000
    outer loop
      vertex -43.837738 12.166753 5.000000
      vertex -43.668934 11.664326 5.000000
      vertex -43.668934 11.664326 0.000000
    endloop
  endfacet
  facet normal 0.930873 0.365343 0.000000
    outer loop
      vertex -43.668934 11.664326 5.000000
      vertex -43.475292 11.170938 5.000000
      vertex -43.668934 11.664326 0.000000
    endloop
  endfacet
  facet normal 0.930873 0.365343 0.000000
    outer loop
      vertex -43.668934 11.664326 0.000000
      vertex -43.475292 11.170938 5.000000
      vertex -43.475292 11.170938 0.000000
    endloop
  endfacet
  facet normal 0.911505 0.411289 0.000000
    outer loop
      vertex -43.475292 11.170938 5.000000
      vertex -43.257298 10.687816 5.000000
      vertex -43.475292 11.170938 0.000000
    endloop
  endfacet
  facet normal 0.911505 0.411289 0.000000
    outer loop
      vertex -43.475292 11.170938 0.000000
      vertex -43.257298 10.687816 5.000000
      vertex -43.257298 10.687816 0.000000
    endloop
  endfacet
  facet normal 0.889873 0.456208 -0.000000
    outer loop
      vertex -43.257298 10.687816 0.000000
      vertex -43.257298 10.687816 5.000000
      vertex -43.015495 10.216160 0.000000
    endloop
  endfacet
  facet normal 0.889873 0.456208 0.000000
    outer loop
      vertex -43.257298 10.687816 5.000000
      vertex -43.015495 10.216160 5.000000
      vertex -43.015495 10.216160 0.000000
    endloop
  endfacet
  facet normal 0.866024 0.500002 0.000000
    outer loop
      vertex -43.015495 10.216160 5.000000
      vertex -42.750481 9.757144 5.000000
      vertex -43.015495 10.216160 0.000000
    endloop
  endfacet
  facet normal 0.866024 0.500002 0.000000
    outer loop
      vertex -43.015495 10.216160 0.000000
      vertex -42.750481 9.757144 5.000000
      vertex -42.750481 9.757144 0.000000
    endloop
  endfacet
  facet normal 0.840027 0.542545 0.000000
    outer loop
      vertex -42.750481 9.757144 5.000000
      vertex -42.462917 9.311908 5.000000
      vertex -42.750481 9.757144 0.000000
    endloop
  endfacet
  facet normal 0.840027 0.542545 0.000000
    outer loop
      vertex -42.750481 9.757144 0.000000
      vertex -42.462917 9.311908 5.000000
      vertex -42.462917 9.311908 0.000000
    endloop
  endfacet
  facet normal 0.811939 0.583743 0.000000
    outer loop
      vertex -42.462917 9.311908 5.000000
      vertex -42.153519 8.881559 5.000000
      vertex -42.462917 9.311908 0.000000
    endloop
  endfacet
  facet normal 0.811939 0.583743 0.000000
    outer loop
      vertex -42.462917 9.311908 0.000000
      vertex -42.153519 8.881559 5.000000
      vertex -42.153519 8.881559 0.000000
    endloop
  endfacet
  facet normal 0.781831 0.623491 -0.000000
    outer loop
      vertex -42.153519 8.881559 0.000000
      vertex -42.153519 8.881559 5.000000
      vertex -41.823051 8.467168 0.000000
    endloop
  endfacet
  facet normal 0.781831 0.623491 0.000000
    outer loop
      vertex -42.153519 8.881559 5.000000
      vertex -41.823051 8.467168 5.000000
      vertex -41.823051 8.467168 0.000000
    endloop
  endfacet
  facet normal 0.749780 0.661687 0.000000
    outer loop
      vertex -41.823051 8.467168 5.000000
      vertex -41.472340 8.069764 5.000000
      vertex -41.823051 8.467168 0.000000
    endloop
  endfacet
  facet normal 0.749780 0.661687 0.000000
    outer loop
      vertex -41.823051 8.467168 0.000000
      vertex -41.472340 8.069764 5.000000
      vertex -41.472340 8.069764 0.000000
    endloop
  endfacet
  facet normal 0.715868 0.698235 0.000000
    outer loop
      vertex -41.472340 8.069764 5.000000
      vertex -41.102257 7.690335 5.000000
      vertex -41.472340 8.069764 0.000000
    endloop
  endfacet
  facet normal 0.715868 0.698235 0.000000
    outer loop
      vertex -41.472340 8.069764 0.000000
      vertex -41.102257 7.690335 5.000000
      vertex -41.102257 7.690335 0.000000
    endloop
  endfacet
  facet normal 0.680175 0.733050 -0.000000
    outer loop
      vertex -41.102257 7.690335 0.000000
      vertex -41.102257 7.690335 5.000000
      vertex -40.713722 7.329826 0.000000
    endloop
  endfacet
  facet normal 0.680175 0.733050 0.000000
    outer loop
      vertex -41.102257 7.690335 5.000000
      vertex -40.713722 7.329826 5.000000
      vertex -40.713722 7.329826 0.000000
    endloop
  endfacet
  facet normal 0.642787 0.766045 0.000000
    outer loop
      vertex -40.713722 7.329826 5.000000
      vertex -40.307697 6.989131 5.000000
      vertex -40.713722 7.329826 0.000000
    endloop
  endfacet
  facet normal 0.642787 0.766045 0.000000
    outer loop
      vertex -40.713722 7.329826 0.000000
      vertex -40.307697 6.989131 5.000000
      vertex -40.307697 6.989131 0.000000
    endloop
  endfacet
  facet normal 0.603805 0.797132 0.000000
    outer loop
      vertex -40.307697 6.989131 5.000000
      vertex -39.885197 6.669099 5.000000
      vertex -40.307697 6.989131 0.000000
    endloop
  endfacet
  facet normal 0.603805 0.797132 0.000000
    outer loop
      vertex -40.307697 6.989131 0.000000
      vertex -39.885197 6.669099 5.000000
      vertex -39.885197 6.669099 0.000000
    endloop
  endfacet
  facet normal 0.563318 0.826240 0.000000
    outer loop
      vertex -39.885197 6.669099 0.000000
      vertex -39.447266 6.370524 5.000000
      vertex -39.447266 6.370524 0.000000
    endloop
  endfacet
  facet normal 0.563318 0.826240 0.000000
    outer loop
      vertex -39.885197 6.669099 5.000000
      vertex -39.447266 6.370524 5.000000
      vertex -39.885197 6.669099 0.000000
    endloop
  endfacet
  facet normal 0.521435 0.853291 -0.000000
    outer loop
      vertex -39.447266 6.370524 0.000000
      vertex -39.447266 6.370524 5.000000
      vertex -38.994999 6.094150 0.000000
    endloop
  endfacet
  facet normal 0.521435 0.853291 0.000000
    outer loop
      vertex -39.447266 6.370524 5.000000
      vertex -38.994999 6.094150 5.000000
      vertex -38.994999 6.094150 0.000000
    endloop
  endfacet
  facet normal 0.478254 0.878221 0.000000
    outer loop
      vertex -38.994999 6.094150 0.000000
      vertex -38.529518 5.840662 5.000000
      vertex -38.529518 5.840662 0.000000
    endloop
  endfacet
  facet normal 0.478254 0.878221 0.000000
    outer loop
      vertex -38.994999 6.094150 5.000000
      vertex -38.529518 5.840662 5.000000
      vertex -38.994999 6.094150 0.000000
    endloop
  endfacet
  facet normal 0.433885 0.900968 0.000000
    outer loop
      vertex -38.529518 5.840662 0.000000
      vertex -38.051983 5.610693 5.000000
      vertex -38.051983 5.610693 0.000000
    endloop
  endfacet
  facet normal 0.433885 0.900968 0.000000
    outer loop
      vertex -38.529518 5.840662 5.000000
      vertex -38.051983 5.610693 5.000000
      vertex -38.529518 5.840662 0.000000
    endloop
  endfacet
  facet normal 0.388435 0.921476 0.000000
    outer loop
      vertex -38.051983 5.610693 0.000000
      vertex -37.563576 5.404812 5.000000
      vertex -37.563576 5.404812 0.000000
    endloop
  endfacet
  facet normal 0.388435 0.921476 0.000000
    outer loop
      vertex -38.051983 5.610693 5.000000
      vertex -37.563576 5.404812 5.000000
      vertex -38.051983 5.610693 0.000000
    endloop
  endfacet
  facet normal 0.342020 0.939693 0.000000
    outer loop
      vertex -37.563576 5.404812 5.000000
      vertex -37.065514 5.223532 5.000000
      vertex -37.563576 5.404812 0.000000
    endloop
  endfacet
  facet normal 0.342020 0.939693 0.000000
    outer loop
      vertex -37.563576 5.404812 0.000000
      vertex -37.065514 5.223532 5.000000
      vertex -37.065514 5.223532 0.000000
    endloop
  endfacet
  facet normal 0.294754 0.955573 0.000000
    outer loop
      vertex -37.065514 5.223532 5.000000
      vertex -36.559032 5.067304 5.000000
      vertex -37.065514 5.223532 0.000000
    endloop
  endfacet
  facet normal 0.294754 0.955573 0.000000
    outer loop
      vertex -37.065514 5.223532 0.000000
      vertex -36.559032 5.067304 5.000000
      vertex -36.559032 5.067304 0.000000
    endloop
  endfacet
  facet normal 0.246759 0.969077 0.000000
    outer loop
      vertex -36.559032 5.067304 5.000000
      vertex -36.045399 4.936516 5.000000
      vertex -36.559032 5.067304 0.000000
    endloop
  endfacet
  facet normal 0.246759 0.969077 0.000000
    outer loop
      vertex -36.559032 5.067304 0.000000
      vertex -36.045399 4.936516 5.000000
      vertex -36.045399 4.936516 0.000000
    endloop
  endfacet
  facet normal 0.198146 0.980173 0.000000
    outer loop
      vertex -36.045399 4.936516 5.000000
      vertex -35.525879 4.831493 5.000000
      vertex -36.045399 4.936516 0.000000
    endloop
  endfacet
  facet normal 0.198146 0.980173 0.000000
    outer loop
      vertex -36.045399 4.936516 0.000000
      vertex -35.525879 4.831493 5.000000
      vertex -35.525879 4.831493 0.000000
    endloop
  endfacet
  facet normal 0.149042 0.988831 -0.000000
    outer loop
      vertex -35.525879 4.831493 0.000000
      vertex -35.525879 4.831493 5.000000
      vertex -35.001774 4.752497 0.000000
    endloop
  endfacet
  facet normal 0.149042 0.988831 0.000000
    outer loop
      vertex -35.525879 4.831493 5.000000
      vertex -35.001774 4.752497 5.000000
      vertex -35.001774 4.752497 0.000000
    endloop
  endfacet
  facet normal 0.099567 0.995031 0.000000
    outer loop
      vertex -35.001774 4.752497 5.000000
      vertex -34.474380 4.699724 5.000000
      vertex -35.001774 4.752497 0.000000
    endloop
  endfacet
  facet normal 0.099567 0.995031 0.000000
    outer loop
      vertex -35.001774 4.752497 0.000000
      vertex -34.474380 4.699724 5.000000
      vertex -34.474380 4.699724 0.000000
    endloop
  endfacet
  facet normal 0.049846 0.998757 0.000000
    outer loop
      vertex -34.474380 4.699724 5.000000
      vertex -33.945015 4.673304 5.000000
      vertex -34.474380 4.699724 0.000000
    endloop
  endfacet
  facet normal 0.049846 0.998757 0.000000
    outer loop
      vertex -34.474380 4.699724 0.000000
      vertex -33.945015 4.673304 5.000000
      vertex -33.945015 4.673304 0.000000
    endloop
  endfacet
  facet normal -0.000000 1.000000 0.000000
    outer loop
      vertex -33.945015 4.673304 5.000000
      vertex -33.414986 4.673304 5.000000
      vertex -33.945015 4.673304 0.000000
    endloop
  endfacet
  facet normal 0.000000 1.000000 0.000000
    outer loop
      vertex -33.945015 4.673304 0.000000
      vertex -33.414986 4.673304 5.000000
      vertex -33.414986 4.673304 0.000000
    endloop
  endfacet
  facet normal -0.049846 0.998757 0.000000
    outer loop
      vertex -33.414986 4.673304 5.000000
      vertex -32.885620 4.699724 5.000000
      vertex -33.414986 4.673304 0.000000
    endloop
  endfacet
  facet normal -0.049846 0.998757 0.000000
    outer loop
      vertex -33.414986 4.673304 0.000000
      vertex -32.885620 4.699724 5.000000
      vertex -32.885620 4.699724 0.000000
    endloop
  endfacet
  facet normal -0.099567 0.995031 0.000000
    outer loop
      vertex -32.885620 4.699724 5.000000
      vertex -32.358227 4.752497 5.000000
      vertex -32.885620 4.699724 0.000000
    endloop
  endfacet
  facet normal -0.099567 0.995031 0.000000
    outer loop
      vertex -32.885620 4.699724 0.000000
      vertex -32.358227 4.752497 5.000000
      vertex -32.358227 4.752497 0.000000
    endloop
  endfacet
  facet normal -0.149042 0.988831 0.000000
    outer loop
      vertex -32.358227 4.752497 5.000000
      vertex -31.834120 4.831493 5.000000
      vertex -32.358227 4.752497 0.000000
    endloop
  endfacet
  facet normal -0.149042 0.988831 0.000000
    outer loop
      vertex -32.358227 4.752497 0.000000
      vertex -31.834120 4.831493 5.000000
      vertex -31.834120 4.831493 0.000000
    endloop
  endfacet
  facet normal -0.198146 0.980172 0.000000
    outer loop
      vertex -31.834120 4.831493 5.000000
      vertex -31.314602 4.936516 5.000000
      vertex -31.834120 4.831493 0.000000
    endloop
  endfacet
  facet normal -0.198146 0.980172 0.000000
    outer loop
      vertex -31.834120 4.831493 0.000000
      vertex -31.314602 4.936516 5.000000
      vertex -31.314602 4.936516 0.000000
    endloop
  endfacet
  facet normal -0.246758 0.969077 0.000000
    outer loop
      vertex -31.314602 4.936516 0.000000
      vertex -30.800966 5.067304 5.000000
      vertex -30.800966 5.067304 0.000000
    endloop
  endfacet
  facet normal -0.246758 0.969077 0.000000
    outer loop
      vertex -31.314602 4.936516 5.000000
      vertex -30.800966 5.067304 5.000000
      vertex -31.314602 4.936516 0.000000
    endloop
  endfacet
  facet normal -0.294755 0.955573 0.000000
    outer loop
      vertex -30.800966 5.067304 0.000000
      vertex -30.294487 5.223532 5.000000
      vertex -30.294487 5.223532 0.000000
    endloop
  endfacet
  facet normal -0.294755 0.955573 0.000000
    outer loop
      vertex -30.800966 5.067304 5.000000
      vertex -30.294487 5.223532 5.000000
      vertex -30.800966 5.067304 0.000000
    endloop
  endfacet
  facet normal -0.342020 0.939693 0.000000
    outer loop
      vertex -30.294487 5.223532 0.000000
      vertex -29.796425 5.404812 5.000000
      vertex -29.796425 5.404812 0.000000
    endloop
  endfacet
  facet normal -0.342020 0.939693 0.000000
    outer loop
      vertex -30.294487 5.223532 5.000000
      vertex -29.796425 5.404812 5.000000
      vertex -30.294487 5.223532 0.000000
    endloop
  endfacet
  facet normal -0.388435 0.921476 0.000000
    outer loop
      vertex -29.796425 5.404812 0.000000
      vertex -29.308018 5.610693 5.000000
      vertex -29.308018 5.610693 0.000000
    endloop
  endfacet
  facet normal -0.388435 0.921476 0.000000
    outer loop
      vertex -29.796425 5.404812 5.000000
      vertex -29.308018 5.610693 5.000000
      vertex -29.796425 5.404812 0.000000
    endloop
  endfacet
  facet normal -0.433883 0.900969 0.000000
    outer loop
      vertex -29.308018 5.610693 0.000000
      vertex -28.830481 5.840662 5.000000
      vertex -28.830481 5.840662 0.000000
    endloop
  endfacet
  facet normal -0.478254 0.878221 0.000000
    outer loop
      vertex -28.830481 5.840662 0.000000
      vertex -28.830481 5.840662 5.000000
      vertex -28.365000 6.094150 0.000000
    endloop
  endfacet
  facet normal -0.433883 0.900969 0.000000
    outer loop
      vertex -29.308018 5.610693 5.000000
      vertex -28.830481 5.840662 5.000000
      vertex -29.308018 5.610693 0.000000
    endloop
  endfacet
  facet normal -0.478254 0.878221 0.000000
    outer loop
      vertex -28.830481 5.840662 5.000000
      vertex -28.365000 6.094150 5.000000
      vertex -28.365000 6.094150 0.000000
    endloop
  endfacet
  facet normal -0.521435 0.853291 0.000000
    outer loop
      vertex -28.365000 6.094150 0.000000
      vertex -27.912733 6.370524 5.000000
      vertex -27.912733 6.370524 0.000000
    endloop
  endfacet
  facet normal -0.521435 0.853291 0.000000
    outer loop
      vertex -28.365000 6.094150 5.000000
      vertex -27.912733 6.370524 5.000000
      vertex -28.365000 6.094150 0.000000
    endloop
  endfacet
  facet normal -0.563319 0.826239 0.000000
    outer loop
      vertex -27.912733 6.370524 0.000000
      vertex -27.474804 6.669099 5.000000
      vertex -27.474804 6.669099 0.000000
    endloop
  endfacet
  facet normal -0.563319 0.826239 0.000000
    outer loop
      vertex -27.912733 6.370524 5.000000
      vertex -27.474804 6.669099 5.000000
      vertex -27.912733 6.370524 0.000000
    endloop
  endfacet
  facet normal -0.603805 0.797132 0.000000
    outer loop
      vertex -27.474804 6.669099 0.000000
      vertex -27.052303 6.989131 5.000000
      vertex -27.052303 6.989131 0.000000
    endloop
  endfacet
  facet normal -0.603805 0.797132 0.000000
    outer loop
      vertex -27.474804 6.669099 5.000000
      vertex -27.052303 6.989131 5.000000
      vertex -27.474804 6.669099 0.000000
    endloop
  endfacet
  facet normal -0.642788 0.766044 0.000000
    outer loop
      vertex -27.052303 6.989131 0.000000
      vertex -26.646280 7.329826 5.000000
      vertex -26.646280 7.329826 0.000000
    endloop
  endfacet
  facet normal -0.642788 0.766044 0.000000
    outer loop
      vertex -27.052303 6.989131 5.000000
      vertex -26.646280 7.329826 5.000000
      vertex -27.052303 6.989131 0.000000
    endloop
  endfacet
  facet normal -0.680171 0.733053 0.000000
    outer loop
      vertex -26.646280 7.329826 0.000000
      vertex -26.257742 7.690335 5.000000
      vertex -26.257742 7.690335 0.000000
    endloop
  endfacet
  facet normal -0.680171 0.733053 0.000000
    outer loop
      vertex -26.646280 7.329826 5.000000
      vertex -26.257742 7.690335 5.000000
      vertex -26.646280 7.329826 0.000000
    endloop
  endfacet
  facet normal -0.715868 0.698235 0.000000
    outer loop
      vertex -26.257742 7.690335 0.000000
      vertex -25.887659 8.069764 5.000000
      vertex -25.887659 8.069764 0.000000
    endloop
  endfacet
  facet normal -0.715868 0.698235 0.000000
    outer loop
      vertex -26.257742 7.690335 5.000000
      vertex -25.887659 8.069764 5.000000
      vertex -26.257742 7.690335 0.000000
    endloop
  endfacet
  facet normal -0.749780 0.661687 0.000000
    outer loop
      vertex -25.887659 8.069764 5.000000
      vertex -25.536947 8.467168 5.000000
      vertex -25.887659 8.069764 0.000000
    endloop
  endfacet
  facet normal -0.749780 0.661687 0.000000
    outer loop
      vertex -25.887659 8.069764 0.000000
      vertex -25.536947 8.467168 5.000000
      vertex -25.536947 8.467168 0.000000
    endloop
  endfacet
  facet normal -0.781832 0.623489 0.000000
    outer loop
      vertex -25.536947 8.467168 5.000000
      vertex -25.206482 8.881559 5.000000
      vertex -25.536947 8.467168 0.000000
    endloop
  endfacet
  facet normal -0.781832 0.623489 0.000000
    outer loop
      vertex -25.536947 8.467168 0.000000
      vertex -25.206482 8.881559 5.000000
      vertex -25.206482 8.881559 0.000000
    endloop
  endfacet
  facet normal -0.811937 0.583745 0.000000
    outer loop
      vertex -25.206482 8.881559 5.000000
      vertex -24.897081 9.311908 5.000000
      vertex -25.206482 8.881559 0.000000
    endloop
  endfacet
  facet normal -0.811937 0.583745 0.000000
    outer loop
      vertex -25.206482 8.881559 0.000000
      vertex -24.897081 9.311908 5.000000
      vertex -24.897081 9.311908 0.000000
    endloop
  endfacet
  facet normal -0.840027 0.542545 0.000000
    outer loop
      vertex -24.897081 9.311908 5.000000
      vertex -24.609518 9.757144 5.000000
      vertex -24.897081 9.311908 0.000000
    endloop
  endfacet
  facet normal -0.840027 0.542545 0.000000
    outer loop
      vertex -24.897081 9.311908 0.000000
      vertex -24.609518 9.757144 5.000000
      vertex -24.609518 9.757144 0.000000
    endloop
  endfacet
  facet normal -0.866026 0.500000 0.000000
    outer loop
      vertex -24.609518 9.757144 5.000000
      vertex -24.344505 10.216160 5.000000
      vertex -24.609518 9.757144 0.000000
    endloop
  endfacet
  facet normal -0.866026 0.500000 0.000000
    outer loop
      vertex -24.609518 9.757144 0.000000
      vertex -24.344505 10.216160 5.000000
      vertex -24.344505 10.216160 0.000000
    endloop
  endfacet
  facet normal -0.889872 0.456211 0.000000
    outer loop
      vertex -24.344505 10.216160 0.000000
      vertex -24.102701 10.687816 5.000000
      vertex -24.102701 10.687816 0.000000
    endloop
  endfacet
  facet normal -0.889872 0.456211 0.000000
    outer loop
      vertex -24.344505 10.216160 5.000000
      vertex -24.102701 10.687816 5.000000
      vertex -24.344505 10.216160 0.000000
    endloop
  endfacet
  facet normal -0.911506 0.411286 0.000000
    outer loop
      vertex -24.102701 10.687816 0.000000
      vertex -23.884708 11.170938 5.000000
      vertex -23.884708 11.170938 0.000000
    endloop
  endfacet
  facet normal -0.911506 0.411286 0.000000
    outer loop
      vertex -24.102701 10.687816 5.000000
      vertex -23.884708 11.170938 5.000000
      vertex -24.102701 10.687816 0.000000
    endloop
  endfacet
  facet normal -0.930873 0.365343 0.000000
    outer loop
      vertex -23.884708 11.170938 0.000000
      vertex -23.691067 11.664326 5.000000
      vertex -23.691067 11.664326 0.000000
    endloop
  endfacet
  facet normal -0.947928 0.318486 0.000000
    outer loop
      vertex -23.691067 11.664326 0.000000
      vertex -23.691067 11.664326 5.000000
      vertex -23.522261 12.166753 0.000000
    endloop
  endfacet
  facet normal -0.930873 0.365343 0.000000
    outer loop
      vertex -23.884708 11.170938 5.000000
      vertex -23.691067 11.664326 5.000000
      vertex -23.884708 11.170938 0.000000
    endloop
  endfacet
  facet normal -0.947928 0.318486 0.000000
    outer loop
      vertex -23.691067 11.664326 5.000000
      vertex -23.522261 12.166753 5.000000
      vertex -23.522261 12.166753 0.000000
    endloop
  endfacet
  facet normal -0.962624 0.270841 0.000000
    outer loop
      vertex -23.522261 12.166753 0.000000
      vertex -23.378708 12.676969 5.000000
      vertex -23.378708 12.676969 0.000000
    endloop
  endfacet
  facet normal -0.962624 0.270841 0.000000
    outer loop
      vertex -23.522261 12.166753 5.000000
      vertex -23.378708 12.676969 5.000000
      vertex -23.522261 12.166753 0.000000
    endloop
  endfacet
  facet normal -0.974928 0.222519 0.000000
    outer loop
      vertex -23.378708 12.676969 0.000000
      vertex -23.260767 13.193707 5.000000
      vertex -23.260767 13.193707 0.000000
    endloop
  endfacet
  facet normal -0.974928 0.222519 0.000000
    outer loop
      vertex -23.378708 12.676969 5.000000
      vertex -23.260767 13.193707 5.000000
      vertex -23.378708 12.676969 0.000000
    endloop
  endfacet
  facet normal -0.984807 0.173650 0.000000
    outer loop
      vertex -23.260767 13.193707 0.000000
      vertex -23.168728 13.715681 5.000000
      vertex -23.168728 13.715681 0.000000
    endloop
  endfacet
  facet normal -0.984807 0.173650 0.000000
    outer loop
      vertex -23.260767 13.193707 5.000000
      vertex -23.168728 13.715681 5.000000
      vertex -23.260767 13.193707 0.000000
    endloop
  endfacet
  facet normal -0.992239 0.124342 0.000000
    outer loop
      vertex -23.168728 13.715681 0.000000
      vertex -23.102823 14.241593 5.000000
      vertex -23.102823 14.241593 0.000000
    endloop
  endfacet
  facet normal -0.992239 0.124342 0.000000
    outer loop
      vertex -23.168728 13.715681 5.000000
      vertex -23.102823 14.241593 5.000000
      vertex -23.168728 13.715681 0.000000
    endloop
  endfacet
  facet normal -0.997204 0.074732 0.000000
    outer loop
      vertex -23.102823 14.241593 0.000000
      vertex -23.063213 14.770138 5.000000
      vertex -23.063213 14.770138 0.000000
    endloop
  endfacet
  facet normal -0.999689 0.024931 0.000000
    outer loop
      vertex -23.063213 14.770138 0.000000
      vertex -23.063213 14.770138 5.000000
      vertex -23.049999 15.300000 0.000000
    endloop
  endfacet
  facet normal -0.997204 0.074732 0.000000
    outer loop
      vertex -23.102823 14.241593 5.000000
      vertex -23.063213 14.770138 5.000000
      vertex -23.102823 14.241593 0.000000
    endloop
  endfacet
  facet normal -0.999689 0.024931 0.000000
    outer loop
      vertex -23.063213 14.770138 5.000000
      vertex -23.049999 15.300000 5.000000
      vertex -23.049999 15.300000 0.000000
    endloop
  endfacet
endsolid Mesh
```