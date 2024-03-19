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

## Tweaks

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

Install cpufrequtils:

```
sudo apt install -y cpufrequtils
```

Set scheduler to "on demand":

```
sudo cpufreq-set -g ondemand
```

Install PowerSaver service:

```
sudo bash -c "$(wget -qLO - https://github.com/alandoyle/helper-scripts/raw/main/installers/powersaver-installer)"
```

## Conclusion

It runs very well for such an old netbook!

### Links

 - [Linux for old PC — Bringing PC from 2007 back to life](https://notes.valdikss.org.ru/linux-for-old-pc-from-2007/en/)
 - [XanMod Kernel](https://xanmod.org/)
 - [Alan Doyle - Running PowerTOP on boot](https://alandoyle.com/blog/running-powertop-on-boot/)
 - [alandoyle_helper-scripts Collection of helper scripts to run on Ubuntu 22.04](https://github.com/alandoyle/helper-scripts/)
