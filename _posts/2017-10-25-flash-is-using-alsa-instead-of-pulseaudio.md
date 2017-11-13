---
layout: post
title: Fix Adobe Flash Player is using ALSA instead of PulseAudio
tags: firefox, flashplayer, debian, linux, lmde
---

On my laptop I'm running Linux Mint Debian Edition.

There I use Firefox. And everytime I opened a site where the Adobe Flash Player was required, VLC stopped playing music.

I remembered that some programs use direct access to the soundcard via ALSA and PulseAudio need exclusive access to the soundcard.

So I checked who uses the soundcard:

```
fuser -v /dev/snd/*
```

```
                     USER        PID ACCESS COMMAND
/dev/snd/controlC0:  ikem     16017 F.... pulseaudio
/dev/snd/controlC1:  ikem     16017 F.... pulseaudio
/dev/snd/pcmC1D0p:   ikem     16031 F...m plugin-containe
```
The `plugin-container` or `flash` was using the soundcard.

I was opening Firefox `about:plugins` and looked at `Shockwave Flash`:

```
/opt/mint-flashplugin-11/libflashplayer.so
```

I checked if there is another package which provides `libflashplayer.so`:

```
apt-file search libflashplayer.so
```

```
flashplayer-mozilla: /usr/lib/flashplayer-mozilla/libflashplayer.so
mint-flashplugin-11: /opt/mint-flashplugin-11/libflashplayer.so
mint-flashplugin-24: /opt/mint-flashplugin-24/libflashplayer.so
```

And I thought, what if I replace the `mint-flashplugin` with the `flashplayer-mozilla` instead?

So I tried it and run:

```
sudo apt-get remove mint-flashplugin-11 mint-flashplugin-24
sudo apt-get install flashplayer-mozilla
```

And another:

```
fuser -v /dev/snd/*
```

```
                     USER        PID ACCESS COMMAND
/dev/snd/controlC0:  ikem     16023 F.... pulseaudio
/dev/snd/controlC1:  ikem     16023 F.... pulseaudio
/dev/snd/pcmC1D0p:   ikem     16023 F...m pulseaudio
```

Showed me, PulseAudio was used.

Case closed.
