---
layout: post
title: Configure clover to hide volumes without a label
tags: mac os x, clover, clover configurator, cc by-nc-sa
---

```
diskutil mount EFI
```

```
bdmesg|grep 'Volume: .*HD([0-9],.*)'
```
