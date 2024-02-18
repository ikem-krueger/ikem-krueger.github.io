---
layout: post
title: Compile Xfce Panel
tags: xfce
---
- fork [xfce4-panel](https://github.com/xfce-mirror/xfce4-panel)
- `git clone git@github.com:ikem-krueger/xfce4-panel.git`
- `sudo apt install xfce4-dev-tools gtk-doc-tools`
- `mkdir ./build`
- `./autogen.sh`
- `./configure --prefix=./build`
