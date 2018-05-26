---
layout: post
title: Synchronize the Fritz!Box NAS with Dropbox
tags:  windows, dropbox, cc by-nc-sa
---

Disable Dropbox.

Move the dropbox folder to the external hard disk.

Connect the hard disk with the Fritz!Box.

Mount share to folder:

```
mklink /d “%HOMEPATH%\Dropbox” “\\fritz.box\fritz.nas\USB-DRIVE\Dropbox”
```

Enable Dropbox.
