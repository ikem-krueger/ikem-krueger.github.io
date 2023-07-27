---
layout: post
title: Optimize Samsung S5 with LineageOS
tags: android, lineageos, samsung
---

I owe a Samsung Galaxy S5 where I installed Lineage OS 18.1 as described [here](https://wiki.lineageos.org/devices/klte/install).

Instead of distributing a work load across all cores with the effect that all cores are utilized only at a minimum level, the kernel can try to schedule processes on as few cores as possible.

This has the advantages, that idle cores can go to sleep more often, which safes battery and it causes less interrupts, which improves responsiveness.

## Install Magisk

Connect your phone to the pc.

On your phone boot into recovery mode by hold `Volume Up` + `Home` + `Power`.

In recovery-mode tap on `Advanced` > `Enable ADB`. Go back to the main menu.

Tap on `Apply update` > `Apply from adb`.

On your pc in Windows download Magisk-v26.1.apk from [here](https://github.com/topjohnwu/Magisk/releases/download/v26.1/Magisk-v26.1.apk).

Rename `Magisk-v26.1.apk` to `Magisk-v26.1.zip`.

Open a terminal and type:

```
adb sideload Magisk-*.zip
```

On your phone in recovery-mode check if Magisk installed successfully. Reboot your phone.

On your phone in Android open Magisk. You get an error message.

Next to Magisk tap on `Install`. In the new dialog tap on `Method` > `Direct Installation`. When the installation finished, tap on `Reboot`.

## Create custom.sh file

Create the file `/data/adb/post-fs-data.d/custom.sh`:

```bash
#!/bin/sh

echo 1 > /sys/devices/system/cpu/sched_mc_power_savings
```

Make it executable.

## Check if the script run successfully

Download and install [Kernel Adiutor](https://f-droid.org/de/packages/com.nhellfire.kerneladiutor/).

Open  the menu and tap on `CPU`. Scroll down to `Multicore Power Saving` and check if it is set to enabled.

## Links

 - [Tunable sched_mc_power_savings=n [LWN.net]](https://lwn.net/Articles/297306/)
 - [Chapter 11. Power Management - 11.4. Tuning Options for C-states](http://www.vorkon.de/SU1210.001/drittanbieter/Dokumentation/openSUSE_11.4/manual/cha.tuning.power.html#sec.tuning.power.c-states.options)
