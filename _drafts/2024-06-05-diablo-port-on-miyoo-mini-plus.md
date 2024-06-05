---
layout: post
title: Diablo Port on the Miyoo Mini+
tags: diablo, miyoo, onionos
---

Download [devilutionx-miyoo-mini-onion-os.zip](https://github.com/diasurgical/devilutionX/releases/download/1.5.2/devilutionx-miyoo-mini-onion-os.zip).

Extract the zip.

Install `innoextract`:

```
sudo apt install innoextract
```

Extract the assets from the setup.exe:

```
innoextract -I DIABDAT.MPQ -I hellfire.mpq -I hfmonk.mpq -I hfmusic.mpq -I hfvoice.mpq "setup_diablo_1.09_hellfire_v2_(30038).exe"
```

```
mv DIABDAT.MPQ hellfire.mpq hfmonk.mpq hfmusic.mpq hfvoice.mpq "Roms/PORTS/Games/Diablo.port/"```
```
