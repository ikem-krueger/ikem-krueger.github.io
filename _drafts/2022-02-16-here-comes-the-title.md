---
layout: post
title: Here comes the title
tags: tag
---

## Clone boot

```
dd if=/dev/ of=/dev/
```

## Make btrfs snapshot of "root"

```
btrfs-auto-snapshot snapshot root
```

## Restore repositories and installed packages

```
apt-clone restore
```

## Restore "/etc"

```
tar -xvfz etc.tar.gz
```

## Make snapshot of "home"

```
btrfs-auto-snapshot snapshot home
```

## Restore "/home/xbian"

```
tar -xvfz xbian.tar.gz
```
