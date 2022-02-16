---
layout: post
title: Migrate installed Linux Mint to btrfs
tags: linux mint, btrfs
---

```
sudo btrfs-convert /dev/sda2
sudo mkdir /mnt/sda2
sudo mount /dev/sda2 /mnt/sda2
cd /mnt/sda2
sudo btrfs subvol create @home
sudo rsync --remove-source-files -avAHXP home/ @home
sudo rm -r home
sudo btrfs subvol create @
sudo rsync --remove-source-files --exclude '@' --exclude '@home' --exclude 'ext2_saved' -avAHXP ./ @
sudo rm -r $(ls -1|grep -Ev "^@|ext2_saved"|tr '\n' ' ')
sudo blkid /dev/sda2
sudo nano @/etc/fstab 
```
