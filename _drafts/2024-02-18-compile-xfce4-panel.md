---
layout: post
title: Compile Xfce Panel
tags: xfce
---

## Upstream

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

## Apt

Install sources:

```
apt source xfce4-panel
```

Install build dependencies:

```
sudo apt build-dep xfce4-panel
```

Commit the changes:

```
DEBEMAIL="your.email.address@example.org"
DEBFULLNAME="Firstname Lastname"

cd xfce4-panel-4.18.2/
dpkg-source --commit
```

Build the package:

```
dpkg-buildpackage -us -uc
```
