---
layout: post
title: Migrate installed Linux Mint to btrfs
tags: linux mint, btrfs
---

## Convert partition from Ext4 to Btrfs

```
sudo btrfs-convert /dev/sda2
```

## Mount Btrfs partition

```
sudo mount /dev/sda2 /mnt
cd /mnt
```

## Move files from "/home" to "@home"

```
sudo btrfs subvol create @home
sudo rsync --remove-source-files -avAHXP home/ @home
sudo rm -r home
```

## Move files from "/" to "@"

```
sudo btrfs subvol create @
sudo rsync --remove-source-files --exclude={'@','@home','ext2_saved'} -avAHXP ./ @
sudo rm -r $(ls -1|grep -Ev "^@|ext2_saved"|tr '\n' ' ')
```

## Update "/etc/fstab"

```
sudo blkid /dev/sda2
sudo nano @/etc/fstab 
```
