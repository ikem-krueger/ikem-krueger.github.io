---
layout: post
title: Fix Adobe Flash Player uses ALSA instead of PulseAudio
tags: firefox, flashplayer, debian, linux, lmde
---

On my laptop I'm running Linux Mint Debian Edition.

There I use Firefox. And everytime I opened a site where the Adobe Flash Player was required, VLC stopped playing music.

You can check that yourself with:

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

The output on using PulseAudio:

```
                     USER        PID ACCESS COMMAND
/dev/snd/controlC0:  ikem     16017 F.... pulseaudio
/dev/snd/controlC1:  ikem     16017 F.... pulseaudio
/dev/snd/pcmC1D0p:   ikem     16017 F...m pulseaudio
```

Notice the change in the last lines.

I checked then if there is more then one package which provides "libflashplayer.so":

```
apt-file search libflashplayer.so
```

```
sudo apt-get install flashplayer-mozilla
```

Which removes `mint-flashplugin-24, mint-flashplugin, mint-meta-debian-codecs`.
