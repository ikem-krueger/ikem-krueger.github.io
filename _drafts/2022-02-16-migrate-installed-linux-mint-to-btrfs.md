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

Get the UUID for the Btrfs partition:

```
sudo blkid /dev/sda2
```

Change "/etc/fstab":

```
UUID="c5772dbe-013c-4a3c-85e4-5a9b3b94d783" /               btrfs    defaults,subvol=@ 0       0
UUID="c5772dbe-013c-4a3c-85e4-5a9b3b94d783" /home               btrfs    defaults,subvol=@home 0       0
```

## Update GRUB

**TODO**
