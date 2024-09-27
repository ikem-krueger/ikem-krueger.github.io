---
layout: post
title: Fix black screen after suspend
tags: linux mint, xfce
---
I fixed it by removing `light-locker`:

    sudo apt remove light-locker

And replacing it with `dm-tool`:

    xfconf-query -n -c xfce4-session -p /general/LockCommand -t string -s "dm-tool switch-to-greeter"
