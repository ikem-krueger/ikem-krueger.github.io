---
layout: post
title: Fix Evolution not starting
tags: linux mint, evolution
---

Starting Evolution from the start menu did nothing.

Running Evolution from the console leads to a crash:

```
ikem@ESPRIMO-D738:~$ evolution

(evolution:3571447): dbind-WARNING **: 15:12:12.672: Couldn't connect to accessibility bus: Failed to connect to socket /root/.cache/at-spi/bus_0.0: Permission denied

(evolution-alarm-notify:3571465): dbind-WARNING **: 15:12:13.216: Couldn't connect to accessibility bus: Failed to connect to socket /root/.cache/at-spi/bus_0.0: Permission denied

** (evolution:3571447): WARNING **: 15:12:13.407: WEBKIT_FORCE_SANDBOX no longer allows disabling the sandbox. Use WEBKIT_DISABLE_SANDBOX_THIS_IS_DANGEROUS=1 instead.
bwrap: Can't find source path /root/.cache/at-spi: Permission denied

** (evolution:3571447): ERROR **: 15:12:13.421: Failed to fully launch dbus-proxy: The child process was terminated with status 1
Trace/breakpoint triggered (memory dump written)
```

The problems are two-fold:

1. Evolution tries to access `/root/.cache/at-spi/bus_0.0`
2. Evolution uses a Webkit version, which no longer allows disabling the sandbox

Both can be worked around by setting two variables:

```
NO_AT_BRIDGE=1
WEBKIT_DISABLE_SANDBOX_THIS_IS_DANGEROUS=1
```

To apply them to the start menu entry (for all users), you have to edit the file `/usr/share/applications/org.gnome.Evolution.desktop`.

And change all the lines starting with:

```
Exec=evolution
```

to:

```
Exec=env NO_AT_BRIDGE=1 WEBKIT_DISABLE_SANDBOX_THIS_IS_DANGEROUS=1 evolution
```

Alternatively you can download the `org.gnome.Evolution.desktop` file from [here](https://github.com/ikem-krueger/ikem-krueger.github.io/raw/master/_files/Fix%20Evolution%20not%20starting/org.gnome.Evolution.desktop).
