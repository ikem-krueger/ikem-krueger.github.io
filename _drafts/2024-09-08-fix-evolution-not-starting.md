---
layout: post
title: Fix Evolution not starting
tags: linux mint, evolution
---

Starting Evolution from the start menu did nothing.

Running Evoltion causes this errors:

```
ikem@ESPRIMO-D738:~$ evolution

(evolution:3571447): dbind-WARNING **: 15:12:12.672: Couldn't connect to accessibility bus: Failed to connect to socket /root/.cache/at-spi/bus_0.0: No permission

(evolution-alarm-notify:3571465): dbind-WARNING **: 15:12:13.216: Couldn't connect to accessibility bus: Failed to connect to socket /root/.cache/at-spi/bus_0.0: No permission

** (evolution:3571447): WARNING **: 15:12:13.407: WEBKIT_FORCE_SANDBOX no longer allows disabling the sandbox. Use WEBKIT_DISABLE_SANDBOX_THIS_IS_DANGEROUS=1 instead.
```

Open the file `/usr/share/applications/org.gnome.Evolution.desktop` and change the line from:

```
Exec=evolution %U
```

to:

```
Exec=env NO_AT_BRIDGE=1 WEBKIT_DISABLE_SANDBOX_THIS_IS_DANGEROUS=1 evolution %U
```
