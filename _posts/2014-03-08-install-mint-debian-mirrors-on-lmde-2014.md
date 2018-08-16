---
layout: post
title: Install mint-debian-mirrors on LMDE 2014
tags: lmde, mint-debian-mirror, cc by-nc-sa
---

Download [mint-debian-mirrors_2013.09.23_all.deb](http://packages.linuxmint.com/pool/main/m/mint-debian-mirrors/mint-debian-mirrors_2013.09.23_all.deb).

Install the package with:

```
sudo dpkg -i mint-debian-mirrors_2013.09.23_all.deb
```

Open “/var/lib/dpkg/info/mint-debian-mirrors.postinst”.

Replace the first line starting with:

current_server = None

With the line:

current_server = “http://debian.linuxmint.com/”

And then run:

```
sudo mv /etc/apt/sources.list.d/official-package-repositories.list /etc/apt/sources.list

mint-choose-debian-mirror

sudo apt-get update
```
