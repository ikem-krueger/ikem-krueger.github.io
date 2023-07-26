---
layout: post
title: Optimize Samsung S5 with LineageOS
tags: android, lineageos, samsung
---

Instead of distributing a work load across all cores with the effect that all cores are utilized only at a minimum level, the kernel can try to schedule processes on as few cores as possible so that the others can go idle.

## Create custom.sh file

File content:

    #!/bin/sh
    
    echo 1 > /sys/devices/system/cpu/sched_mc_power_savings

## Put the file on the right path

|App|Path|
|:---|:---|
|[Run Userinit](https://f-droid.org/de/packages/de.lisas.alex.runuserinit/)|/data/local/userinit.d/|
|[Init.d Light](https://f-droid.org/packages/x1125io.initdlight/)|/data/user/0/x1125io.initdlight/files/|
|[Magisk](https://github.com/topjohnwu/Magisk)|/data/adb/post-fs-data.d/|

## Links

 - [Tunable sched_mc_power_savings=n [LWN.net]](https://lwn.net/Articles/297306/)
 - [Chapter 11. Power Management - 11.4. Tuning Options for C-states](http://www.vorkon.de/SU1210.001/drittanbieter/Dokumentation/openSUSE_11.4/manual/cha.tuning.power.html#sec.tuning.power.c-states.options)
