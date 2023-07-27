---
layout: post
title: Optimize Samsung S5 with LineageOS
tags: android, lineageos, samsung
---

I owe a Samsung Galaxy S5 where I installed Lineage OS 18.1 as described [here](https://wiki.lineageos.org/devices/klte/install).

After experimenting with Kernel Adiutor and enabling "Multicore Power Saving" the device was way snappier.

I was curious how it achieved that, so I looked into the source code of it.

Finally I found out what it did. It writes a "1" to "/sys/devices/system/cpu/sched_mc_power_savings".

I wanted this setting applied on every boot, and after some research, I found out I could use Magisk to run [boot scripts](https://topjohnwu.github.io/Magisk/guides.html#boot-scripts).

## Install Magisk

Connect your phone to the pc.

On your phone boot into recovery mode by holding `Volume Up` + `Home` + `Power`. When the blue text appears, release the buttons.

In recovery mode tap on `Advanced` > `Enable ADB`. Go back to the main menu.

Tap on `Apply update` > `Apply from ADB` > `ADB sideload`.

When asked "Signature verification failed. Install anyway?", tap on "Yes".

On your pc download Magisk-v26.1.apk from [here](https://github.com/topjohnwu/Magisk/releases/download/v26.1/Magisk-v26.1.apk).

Rename `Magisk-v26.1.apk` to `Magisk-v26.1.zip`.

Open a terminal and type:

```
adb sideload Magisk-*.zip
```

On your phone check if the last line says "Done". Reboot your phone.

On your phone open Magisk. You get an error message.

Next to the word "Magisk" tap on `Install`.

In the new dialog tap on `Method` > `Direct Installation`.

When the installation finished, tap on `Reboot`.

## Create custom.sh file

Create the file `/data/adb/post-fs-data.d/custom.sh`:

```bash
#!/bin/sh

echo 1 > /sys/devices/system/cpu/sched_mc_power_savings
```

Make it executable.

## Check if the script has run successfully

Download and install [Kernel Adiutor](https://f-droid.org/de/packages/com.nhellfire.kerneladiutor/).

Open  the menu and tap on `CPU`. Scroll down to `Multicore Power Saving` and check if it is set to enabled.

## Links

 - [Tunable sched_mc_power_savings=n [LWN.net]](https://lwn.net/Articles/297306/)
 - [Chapter 11. Power Management - 11.4. Tuning Options for C-states](http://www.vorkon.de/SU1210.001/drittanbieter/Dokumentation/openSUSE_11.4/manual/cha.tuning.power.html#sec.tuning.power.c-states.options)
