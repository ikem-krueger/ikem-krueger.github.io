---
layout: post
title: Use recovery mode to check Ext4 filesystem
tags: android, lineageos, recovery, ext4, samsung
---

Bring smartphone into recovery mode.

On the Samsung Galaxy S5 it is by pressing `Power+Home+Volume` Up and when the smartphone vibrates, letting go of `Power`.

On the smartphone in the LineageOS recovery mode, tap on "Advanced" and "Enable ADB"

Connect the smartphone with the pc.

Open a terminal and type:

```
adb push e2fsprogs.tar /
adb shell
```

On the shell type:

## extract e2fsprogs

```
tar xfv e2fsprogs.tar
```

## show available partitions

```
cat /proc/partitions
```

## check ext filesystem

```
e2fsck -p -C0 /dev/block/mmcblk1p1
```
