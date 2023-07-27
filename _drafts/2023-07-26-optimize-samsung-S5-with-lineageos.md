---
layout: post
title: Optimize Samsung S5 with LineageOS
tags: android, lineageos, samsung
---

Instead of distributing a work load across all cores with the effect that all cores are utilized only at a minimum level, the kernel can try to schedule processes on as few cores as possible.

This has two advantages: 1. the idle cores can go to sleep more often, which safes battery, 2. it causes less interrupts, which improves responsiveness.

## Create custom.sh file

Create the file `/data/adb/post-fs-data.d/custom.sh`:

```bash
#!/bin/sh

echo 1 > /sys/devices/system/cpu/sched_mc_power_savings
```

Make it executable with:

```bash
~# chmod +x /data/adb/post-fs-data.d/custom.sh
```

## Links

 - [Tunable sched_mc_power_savings=n [LWN.net]](https://lwn.net/Articles/297306/)
 - [Chapter 11. Power Management - 11.4. Tuning Options for C-states](http://www.vorkon.de/SU1210.001/drittanbieter/Dokumentation/openSUSE_11.4/manual/cha.tuning.power.html#sec.tuning.power.c-states.options)
