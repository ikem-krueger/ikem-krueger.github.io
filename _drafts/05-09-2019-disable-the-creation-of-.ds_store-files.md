---
layout: post
title: Disable the creation of .DS_store files
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

And either kill Finder, logout/login or reboot.
