---
layout: post
title: Linux Mint 21.3 XFCE on Asus VivoBook 14
tags: linux mint, xfce, asus, vivobook
---

Since I am very happy with Linux Mint 21.3 XFCE on my netbook, I installed it on my notebook too.

I made sure to use BTRFS during the installation. You have to specify this manually.

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

Compile the kernel module:

```
git clone git@github.com:daringer/asus.git
cd asus-fan/misc
./ubuntu_dkms_sudo_install.sh
```

Create the file `/usr/local/bin/asus.sh`:

```bash
#!/bin/bash

modprobe asus_fan force_load=1
```

Create the file `/etc/systemd/system/asus.service`:

```ini
[Unit]
Description=Force loading asus_fan kernel module

[Service]
Type=simple
ExecStart=/usr/local/bin/asus.sh

[Install]
WantedBy=multi-user.target
```

Set permissions:

```
sudo chmod +x /usr/local/bin/asus.sh
sudo chmod 644 /etc/systemd/system/asus.service
```

Enable the service:

```
sudo systemctl enable asus.service
```

## Intel CPU tweaks service

Create the file `/usr/local/bin/intel.sh`:

```bash
#!/bin/bash

echo 1 > /sys/devices/system/cpu/intel_pstate/hwp_dynamic_boost
echo 1 > /sys/devices/system/cpu/intel_pstate/no_turbo
#echo 1 > /sys/module/processor/parameters/ignore_ppc
#find /sys/devices/system/cpu/cpu*/cpufreq/scaling_max_freq -exec sh -c 'echo 1600000 > {}' \;
```

Create the file `/etc/systemd/system/intel.service`:

```ini
[Unit]
Description=Intel CPU tweaks

[Service]
Type=simple
ExecStart=/usr/local/bin/intel.sh

[Install]
WantedBy=multi-user.target
```

Set permissions:

```
sudo chmod +x /usr/local/bin/intel.sh
sudo chmod 644 /etc/systemd/system/intel.service
```

Enable the service:

```
sudo systemctl enable intel.service
```

## Firefox extensions

| Extension | Purpose |
|--|--|
| [Tab Stash](https://addons.mozilla.org/en-US/firefox/addon/tab-stash/) | Preserve RAM by unloading tabs |
| [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/) | Preserve CPU/RAM by blocking ads |
|  [h264ify](https://addons.mozilla.org/en-US/firefox/addon/h264ify/) | Force hardware accelerated h264 video |
| [I still don't care about cookies](https://addons.mozilla.org/en-US/firefox/addon/istilldontcareaboutcookies/) | Auto click cookie notifications |

## Links

 - [XanMod Kernel](https://xanmod.org/)
 - [daringer_asus-fan Kernel module to get_set (both) fan speed(s) on ASUS Zenbooks](https://github.com/daringer/asus-fan?tab=readme-ov-file#ubuntu)
 - [Alan Doyle - Running PowerTOP on boot](https://alandoyle.com/blog/running-powertop-on-boot/)
 - [alandoyle_helper-scripts Collection of helper scripts to run on Ubuntu 22.04](https://github.com/alandoyle/helper-scripts/)
