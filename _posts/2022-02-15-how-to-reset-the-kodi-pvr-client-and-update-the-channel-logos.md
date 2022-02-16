---
layout: post
title: How to reset the Kodi pvr client and update the channel logos
tags: tvheadend, kodi, linux, raspberry pi, xbian
---

Go to Kodi Settings -> PVR & Live TV -> General. Under "General", there is a command to "Clear data".

If Picons/Channel Logo’s are not updating when changed, do the following to clear the logo cache in kodi:

```
trash $HOME/.kodi/userdata/Thumbnails/*/*.png
trash $HOME/.kodi/userdata/Database/Textures*.dB
```

The above assumes a Linux based OS. Alter the command for other platforms.

Then restart kodi.
