---
layout: post
title: How to reset the Kodi pvr client and update the channel logos
tags: tvheadend, kodi, linux, raspberry pi, xbian
---

Go to Kodi Settings -> "PVR & Live TV" -> "General" and execute "Clear data".

Do the following to clear the logo cache:

```
trash $HOME/.kodi/userdata/Thumbnails
trash $HOME/.kodi/userdata/Database/Textures*.dB
```

The above assumes a Linux based OS. Alter the command for other platforms.

Then restart kodi.
