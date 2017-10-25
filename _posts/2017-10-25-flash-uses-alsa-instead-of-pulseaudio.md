---
layout: post
title: Fix Adobe Flash Player uses ALSA instead of PulseAudio
tags: firefox, flashplayer, debian, linux, lmde
---

On my laptop I'm running Linux Mint Debian Edition.

There I use Firefox. And everytime I opened a site where the Adobe Flash Player was required, VLC stopped playing music.

I remembered that PulseAudio need exclusive access to the soundcard. And that some programs use direct access to the soundcard via ALSA.

So I checked for that with:

```
fuser -v /dev/snd/*
```

The output on using ALSA:

```
                     USER        PID ACCESS COMMAND
/dev/snd/controlC0:  ikem     16017 F.... pulseaudio
/dev/snd/controlC1:  ikem     16017 F.... pulseaudio
/dev/snd/pcmC1D0p:   ikem     16017 F...m plugin-containe
```

I was opening Firefox `about:plugins` and looked at `Shockwave Flash` and `File`:

```
/opt/mint-flashplugin-11/libflashplayer.so
```

I checked if there is another package which provides `libflashplayer.so`:

```
apt-file search libflashplayer.so
```

And I got:

```
flashplayer-mozilla: /usr/lib/flashplayer-mozilla/libflashplayer.so
mint-flashplugin-11: /opt/mint-flashplugin-11/libflashplayer.so
mint-flashplugin-24: /opt/mint-flashplugin-24/libflashplayer.so
```

So I thought, what if I remove the `mint-flashplugin` and use `flashplayer-mozilla` instead?

So I tried it and run:

```
sudo apt-get remove mint-flashplugin-11 mint-flashplugin-24
sudo apt-get install flashplayer-mozilla
```

I run another:

```
fuser -v /dev/snd/*
```

The output on using PulseAudio:

```
                     USER        PID ACCESS COMMAND
/dev/snd/controlC0:  ikem     16017 F.... pulseaudio
/dev/snd/controlC1:  ikem     16017 F.... pulseaudio
/dev/snd/pcmC1D0p:   ikem     16017 F...m plugin-containe
```

Which fixed it.
