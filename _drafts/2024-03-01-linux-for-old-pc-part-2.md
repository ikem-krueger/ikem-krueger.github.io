---
layout: post
title: Linux for old PC (Part 2)
tags: linux mint, xfce
---

## Remove cpufrequtils

Because `powertop` is already setting the cpu governor to "ondemand", remove "cpufrequtils":

```
sudo apt remove -y cpufrequtils
```

## Remove undervolt

```
sudo trash /usr/sbin/undervolt
```


## Undervolt and underclock

Download and compile [amdmsrtweaker-lnx](https://github.com/johkra/amdmsrtweaker-lnx).

When done:

```
sudo modprobe msr
sudo modprobe cpuid
sudo amdmsrt P0=16@1.3 P1=12.8@1.235 P2=8@0.9875 # stock
sudo amdmsrt P0=16@1.15 P1=10.88@1.0 P2=8@0.8 # undervolt and underclock
```

## Set fan profile to silent

Download [acer_ec.pl](https://www.torsten-traenkner.de/linux/hardware/acer_ec.pl). Install missing Perl modules as described [here](https://www.fosslinux.com/69651/how-to-install-missing-perl-modules-on-debian.htm). Finally run:

```
sudo modprobe msr
sudo ./acer_ec.pl := 0x5A 0x01
```

## Firefox extensions

| Extension | Purpose |
|--|--|
| [Tab Stash](https://addons.mozilla.org/en-US/firefox/addon/tab-stash/) | Preserve RAM by unloading tabs |
| [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/) | Preserve CPU/RAM by blocking ads |
|  [h264ify](https://addons.mozilla.org/en-US/firefox/addon/h264ify/) | Force hardware accelerated h264 video |
| [I still don't care about cookies](https://addons.mozilla.org/en-US/firefox/addon/istilldontcareaboutcookies/) | Auto click cookie notifications |

## Fix glitchy USB mouse

I noticed that my USB mouse got stuck after a few seconds. The culprit is, that `powertop` is setting usb to autosuspend.

Follow [this](https://askubuntu.com/questions/185274/how-can-i-disable-usb-autosuspend-for-a-specific-device/525916#525916) comment to change that.

### Links

 - [Overclocking the E-350 APU on Linux - Super User](https://superuser.com/questions/492292/overclocking-the-e-350-apu-on-linux/922418#922418)
 - [Undervolt, Underclock, Overclock AMD E-350 Zacate](https://forum.kodi.tv/showthread.php?tid=104716)
