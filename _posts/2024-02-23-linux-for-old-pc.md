---
layout: post
title: Linux for old PC
tags: linux mint, xfce
---

I have an "HP Pavilion dm1 3101sg" netbook from 2011.

Out of the box it has an AMD E-350 Dual Core CPU @ 1.6GHz, 2GB RAM, 500GB HDD and Windows 7.

One of the first things I did, was an upgrade to 4GB RAM, and a 250GB SSD.

For years I had been using Linux Mint 20.3 XFCE from ValdikSS, but I wasn't quite happy with the performance.

Since I am very happy with Linux Mint 21.3 XFCE on my desktop PC, I installed it on the netbook.

I made sure to use BTRFS during the installation. You have to specify this manually.

I was inspired by the tweaks from ValdikSS:

## Basic tweaks

Install XanMod Kernel:

```
wget -qO - https://dl.xanmod.org/archive.key | sudo gpg --dearmor -o /usr/share/keyrings/xanmod-archive-keyring.gpg
echo 'deb [signed-by=/usr/share/keyrings/xanmod-archive-keyring.gpg] http://deb.xanmod.org releases main' | sudo tee /etc/apt/sources.list.d/xanmod-release.list
sudo apt update
sudo apt install -y linux-xanmod-x64v2
```

Install zram:

```
sudo apt install -y zram-config zram-tools
```

Install preload:

```
sudo apt install -y preload
```

## PowerSaver service

```
sudo bash -c "$(wget -qLO - https://github.com/alandoyle/helper-scripts/raw/main/installers/powersaver-installer)"
```

Create `/etc/powersaver.d/custom-rules.conf`:

```
#
# Additional PowerSaver Rules
#
################################################################################

# Disable auto suspend for usb-device usb receiver [Logitech]
echo 'on' > '/sys/bus/usb/devices/1-2/power/control'
```

## Fan profile service

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

Set permissions:

```
sudo chmod +x /usr/sbin/acer_ec.pl
sudo chmod +x /usr/local/bin/hp.sh
sudo chmod 644 /etc/systemd/system/hp.service
```

Enable the service:

```
sudo systemctl enable hp.service
```

## Firefox extensions

| Extension | Purpose |
|--|--|
| [Tab Stash](https://addons.mozilla.org/en-US/firefox/addon/tab-stash/) | Preserve RAM by unloading tabs |
| [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/) | Preserve CPU/RAM by blocking ads |
|  [h264ify](https://addons.mozilla.org/en-US/firefox/addon/h264ify/) | Force hardware accelerated h264 video |
| [I still don't care about cookies](https://addons.mozilla.org/en-US/firefox/addon/istilldontcareaboutcookies/) | Auto click cookie notifications |

## Conclusion

It runs very well for such an old netbook!

## Links

 - [Overclocking the E-350 APU on Linux - Super User](https://superuser.com/questions/492292/overclocking-the-e-350-apu-on-linux/922418#922418)
 - [Undervolt, Underclock, Overclock AMD E-350 Zacate](https://forum.kodi.tv/showthread.php?tid=104716)
 - [Linux for old PC — Bringing PC from 2007 back to life](https://notes.valdikss.org.ru/linux-for-old-pc-from-2007/en/)
 - [XanMod Kernel](https://xanmod.org/)
 - [Alan Doyle - Running PowerTOP on boot](https://alandoyle.com/blog/running-powertop-on-boot/)
 - [alandoyle_helper-scripts Collection of helper scripts to run on Ubuntu 22.04](https://github.com/alandoyle/helper-scripts/)
