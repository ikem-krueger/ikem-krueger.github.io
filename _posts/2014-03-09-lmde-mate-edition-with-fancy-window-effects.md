---
layout: post
title: LMDE MATE edition with fancy window effects
tags:  lmde, mate-desktop, compton, cc by-nc-sa
---

You’re using LMDE with the MATE desktop and want some eye candy?

Download the following files:

- [compton_0.1~beta2-1_amd64.deb](http://ftp.de.debian.org/debian/pool/main/c/compton/compton_0.1%7Ebeta2-1_amd64.deb)
- [compton.conf](https://pastebin.com/N2Ga2hPS)
- [compton.desktop](https://pastebin.com/7gSSj5Cg)

Install “compton_0.1~beta2-1_amd64.deb”:

```
sudo dpkg -i compton_0.1~beta2-1_amd64.deb
sudo apt-get -f install
```

Place “compton.conf” to “~/.config”.

Place “compton.desktop” to “~/.config/autostart”.

Logout/login and you’re done.
