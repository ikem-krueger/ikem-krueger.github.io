---
layout: post
title: Linux for old PC (Part 2)
tags: linux mint, xfce
---

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

Download [acer_ec.pl](https://www.torsten-traenkner.de/linux/hardware/acer_ec.pl) and safe them to `/usr/sbin/acer_ec.pl`. Install missing Perl modules as described [here](https://www.fosslinux.com/69651/how-to-install-missing-perl-modules-on-debian.htm).

Create `/usr/local/bin/hp.sh`:

```
#!/bin/bash

modprobe msr

acer_ec.pl := 0x5A 0x02
```

Create `/etc/systemd/system/hp.service`:

```
[Unit]
Description=Set hp fan profile to silent

[Service]
Type=simple
Exec=/usr/local/bin/hp.sh

[Install]
WantedBy=multi-user.agent
```

## Firefox extensions

| Extension | Purpose |
|--|--|
| [Tab Stash](https://addons.mozilla.org/en-US/firefox/addon/tab-stash/) | Preserve RAM by unloading tabs |
| [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/) | Preserve CPU/RAM by blocking ads |
|  [h264ify](https://addons.mozilla.org/en-US/firefox/addon/h264ify/) | Force hardware accelerated h264 video |
| [I still don't care about cookies](https://addons.mozilla.org/en-US/firefox/addon/istilldontcareaboutcookies/) | Auto click cookie notifications |

### Links

 - [Overclocking the E-350 APU on Linux - Super User](https://superuser.com/questions/492292/overclocking-the-e-350-apu-on-linux/922418#922418)
 - [Undervolt, Underclock, Overclock AMD E-350 Zacate](https://forum.kodi.tv/showthread.php?tid=104716)