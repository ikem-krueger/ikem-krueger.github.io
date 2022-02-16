---
layout: post
title: Restore XBian
tags: xbian, kodi
---

## Clone boot

```
dd if=/dev/sdb1 of=/dev/mmcblk0p1
```

## Restore repositories and installed packages

```
btrfs-auto-snapshot snapshot root
wget http://ftp.de.debian.org/debian/pool/main/a/apt-clone/apt-clone_0.4.3+nmu1~bpo11+1_all.deb
dpkg -i apt-clone_0.4.3+nmu1~bpo11+1_all.deb
apt-clone restore apt-clone_xbian-11-2022-01-09.tar.gz
```

## Restore "/etc"

```
btrfs-auto-snapshot snapshot root
trash /etc
tar -xvfz etc.tar.gz
```

## Restore "/home/xbian"

```
btrfs-auto-snapshot snapshot home
trash /home/xbian
tar -xvfz xbian.tar.gz
```
