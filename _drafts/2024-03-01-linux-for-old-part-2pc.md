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

 - [Tab Stash](https://addons.mozilla.org/en-US/firefox/addon/tab-stash/)
 - [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/)
 - [h264ify](https://addons.mozilla.org/en-US/firefox/addon/h264ify/)
 - [I still don't care about cookies](https://addons.mozilla.org/en-US/firefox/addon/istilldontcareaboutcookies/)

I noticed that my usb mouse got stuck after a few seconds. The culprit is, that `powertop` is setting usb to autosuspend.

To disable that for this device:

 - [power management - How can I disable USB autosuspend for a specific device - Ask Ubuntu](https://askubuntu.com/questions/185274/how-can-i-disable-usb-autosuspend-for-a-specific-device/525916#525916)
