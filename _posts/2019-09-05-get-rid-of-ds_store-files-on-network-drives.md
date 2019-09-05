---
layout: post
title: Get rid of .DS_store files on network drives
tags: mac os x, finder, smb
---

Clean network mounts from created .DS_store files:

```
dot_clean -m -v /Volumes/FRITZ.NAS/Daten
```

Disable the creation of .DS_store files:

```
defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool TRUE
```

Now either kill Finder, logout/login or reboot.
