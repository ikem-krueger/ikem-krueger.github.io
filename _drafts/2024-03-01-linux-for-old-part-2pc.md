---
layout: post
title: Linux for old PC (Part 2)
tags: linux mint, xfce
---

Because `powertop` is already settings the cpu governor to "ondemand", I dropped "cpufrequtils".

Hence you can uninstall them with:

```
sudo apt install -y cpufrequtils
```

I made use of "acer_ec.pl" to set fan profile to "silent":

```
acer_ac.pl 5A 10
```

I installed this Firefox extensions:

 - uBlock Origin
 - h264ify
 - I still don't care about cookies

I noticed that my usb mouse got stuck after a few seconds. The culprit is, that `powertop` is setting usb to autosuspend.

To disable that for this device:
