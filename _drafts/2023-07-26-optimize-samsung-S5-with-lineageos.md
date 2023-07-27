---
layout: post
title: Optimize Samsung S5 with LineageOS
tags: android, lineageos, samsung
---

Instead of distributing a work load across all cores with the effect that all cores are utilized only at a minimum level, the kernel can try to schedule processes on as few cores as possible.

This has the advantages, that idle cores can go to sleep more often, which safes battery and it causes less interrupts, which improves responsiveness.

## Install Magisk

Connect your phone to the pc.

 - On your phone: boot into recovery mode
 - On your phone: In recovery-mode: `Advanced` > `Enable ADB`
 - On your phone: In recovery-mode: `Apply update` > `Apply from adb`
 - On your pc: In Windows: download Magisk-*.apk from [here](https://github.com/topjohnwu/Magisk/releases)
 - On your pc: In Windows: rename apk to zip
 - On your pc: In Windows: open a terminal and type: `adb sideload Magisk-*.zip`
 - On your phone: In recovery-mode: check if installed successfully
 - On your phone: In recovery-mode: reboot
 - On your phone: In Android: open Magisk -> Error -> "Direct Installation"

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

## Check if the script run successfully

Download and install [Kernel Adiutor ](https://f-droid.org/de/packages/com.nhellfire.kerneladiutor/).

Open  the menu and tap on `CPU`. Scroll down to `Multicore Power Saving` and check if it is set to `Enabled`.

## Links

 - [Tunable sched_mc_power_savings=n [LWN.net]](https://lwn.net/Articles/297306/)
 - [Chapter 11. Power Management - 11.4. Tuning Options for C-states](http://www.vorkon.de/SU1210.001/drittanbieter/Dokumentation/openSUSE_11.4/manual/cha.tuning.power.html#sec.tuning.power.c-states.options)
