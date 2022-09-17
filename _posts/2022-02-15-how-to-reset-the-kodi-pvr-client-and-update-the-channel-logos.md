---
layout: post
title: How to reset the Kodi pvr client and update the channel logos
tags: tvheadend, kodi, linux, raspberry pi, xbian
---

Go to Kodi Settings -> "PVR & Live TV" -> "General" and execute "Clear data".

Do the following to clear the logo cache:

```
rm -rf $HOME/.kodi/userdata/Thumbnails
rm $HOME/.kodi/userdata/Database/Textures*.db
```

Then restart kodi.
