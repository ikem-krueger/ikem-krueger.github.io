---
layout: post
title: Fix Adobe Flash Player is using ALSA instead of PulseAudio
tags: firefox, flashplayer, debian, linux, lmde
---

On my laptop I'm running Linux Mint Debian Edition.

I use Firefox, and everytime I opened a site where the Adobe Flash Player was used, VLC stopped playing music.

I vaguely remembered that some programs use ALSA to direct access the soundcard. But PulseAudio needs exclusive access to the soundcard to work properly.

So I checked who uses the soundcard:

```
user@box ~ $ fuser -v /dev/snd/*
                     USER        PID ACCESS COMMAND
/dev/snd/controlC0:  ikem     16017 F.... pulseaudio
/dev/snd/controlC1:  ikem     16017 F.... pulseaudio
/dev/snd/pcmC1D0p:   ikem     16031 F...m plugin-containe
```
The `plugin-container` was using the soundcard. And `plugin-container` usual means `flash`.

So I was opening Firefox `about:plugins` and looked at `Shockwave Flash`, which showed the path of the plugin used:

```
/opt/mint-flashplugin-11/libflashplayer.so
```

I checked if there is another package which provides `libflashplayer.so`:

```
user@box ~ $ apt-file search libflashplayer.so
flashplayer-mozilla: /usr/lib/flashplayer-mozilla/libflashplayer.so
mint-flashplugin-11: /opt/mint-flashplugin-11/libflashplayer.so
mint-flashplugin-24: /opt/mint-flashplugin-24/libflashplayer.so
```

And I thought: "What if I replace the `mint-flashplugin` with the `flashplayer-mozilla`?"

So I run:

```
sudo apt-get remove mint-flashplugin-11 mint-flashplugin-24
sudo apt-get install flashplayer-mozilla
```

And another:

```
user@box ~ $ fuser -v /dev/snd/*
                     USER        PID ACCESS COMMAND
/dev/snd/controlC0:  ikem     16023 F.... pulseaudio
/dev/snd/controlC1:  ikem     16023 F.... pulseaudio
/dev/snd/pcmC1D0p:   ikem     16023 F...m pulseaudio
```

Showed me, PulseAudio was being used.

Case closed.
