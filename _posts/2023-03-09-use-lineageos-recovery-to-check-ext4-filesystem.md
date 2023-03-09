---
layout: post
title: Use LineageOS recovery to check Ext4 filesystem
tags: adb, android, lineageos, recovery, ext4, samsung
---

Download [e2fsprogs-arm.tar](https://github.com/ikem-krueger/e2fsprogs-arm/releases/download/v1.45.6/e2fsprogs-arm.tar).

Bring smartphone into recovery mode.

On the smartphone in the LineageOS recovery, tap on `Advanced` and `Enable ADB`

Connect the smartphone with the pc.

Open a terminal and type:

```
adb push e2fsprogs.tar /
adb shell
```

On the shell type:

```bash
# extract e2fsprogs
tar xfv e2fsprogs.tar
```

```bash
# show available partitions
cat /proc/partitions
```

```bash
# check ext filesystem
e2fsck -p -C0 /dev/block/mmcblk1p1
```
