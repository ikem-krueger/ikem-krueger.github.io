---
layout: post
title: Fix Adobe Flash Player uses ALSA instead of PulseAudio
tags: firefox, flashplayer, debian, linux, lmde
---

I had the problem that Firefox the flash player plugin was using ALSA.

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



```
sudo apt-get install flashplayer-mozilla
```

Which removes `mint-flashplugin-24, mint-flashplugin, mint-meta-debian-codecs`.
