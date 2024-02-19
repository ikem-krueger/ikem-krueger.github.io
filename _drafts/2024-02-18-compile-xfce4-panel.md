---
layout: post
title: Compile Xfce Panel
tags: xfce
---

Go to GitHub and fork [xfce4-panel](https://github.com/xfce-mirror/xfce4-panel).

Clone repo:

`git clone git@github.com:ikem-krueger/xfce4-panel.git`

Install development tools:

`sudo apt install xfce4-dev-tools gtk-doc-tools`

Create build dir:

`mkdir ./build`

Configure:

```
./autogen.sh
./configure --prefix=$PWD/build
```
