---
layout: post
title: Linux for old PC (Part 2)
tags: linux mint, xfce
---

If `powertop` is already setting the cpu governor to "ondemand", then drop "cpufrequtils":

```
sudo apt install -y cpufrequtils
```

Use "[acer_ec.pl](https://www.torsten-traenkner.de/linux/hardware/acer_ec.pl)" to set fan profile to "silent":

```
sudo acer_ec.pl := 0x5A 0x01
```

Firefox extensions:

 - [Tab Stash](https://addons.mozilla.org/en-US/firefox/addon/tab-stash/)
 - [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/)
 - [h264ify](https://addons.mozilla.org/en-US/firefox/addon/h264ify/)
 - [I still don't care about cookies](https://addons.mozilla.org/en-US/firefox/addon/istilldontcareaboutcookies/)

I noticed that my usb mouse got stuck after a few seconds. The culprit is, that `powertop` is setting usb to autosuspend.

To disable that for this device:

 - [power management - How can I disable USB autosuspend for a specific device - Ask Ubuntu](https://askubuntu.com/questions/185274/how-can-i-disable-usb-autosuspend-for-a-specific-device/525916#525916)

### Links

 - [How to install missing Perl modules on Debian FOSS Linux](https://www.fosslinux.com/69651/how-to-install-missing-perl-modules-on-debian.htm)
