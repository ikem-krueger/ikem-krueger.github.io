---
layout: post
title: Taming ASUS X59GL
tags: windows, undervolt, underclock
---

This ASUS X59GL comes pre-configured with an Intel Pentium T3200 Dual Core @ 2GHz, 3GB RAM, 250GB HDD and a DVD-Burner. Shipped with Windows Vista Home Premium 32bit.

The ASUS X59GL has a heat issue. The cpu and gpu are on the same heatpipe. When the cpu and gpu are under heavy stress, the cpu overheats and the laptop randomly shuts down.

It took me a while to find that out.

How do I fixed that?

Part in hardware. Part in software.

### Hardware

The Intel Pentium T3200 is one of the worse cpus.

It has no SpeedStep, and an L3 cache of 1MB. Both leads to a mediocre performance.

I checked what CPU upgrade were possible. The PGA478 socket allowed any Intel Core 2 Duo/Quad.

I looked for several things: a similar cpu, with the same TDP, and a reasonable price.

I decided to upgrade the processor from an [Intel Pentium T3200](http://www.cpu-world.com/sspec/SL/SLAVG.html) to an [Intel Core 2 Duo T9400](http://www.cpu-world.com/sspec/SL/SLGEK.html).

After plugging the cpu in the socket, adding heat paste, hitting power, the laptop did nothing.

After plugging in the old cpu, making a BIOS update from version 208 to [version 222](https://dlcdnets.asus.com/pub/ASUS/nb/F5GL/F5GLAS222.zip) the new cpu was recognized.

## Software

### Install and configure ThrottleStop

Download [ThrottleStop](https://www.techpowerup.com/download/techpowerup-throttlestop/) and extract it to "C:\Program Files (x86)\ThrottleStop".

Download [ThrottleStop.ini](https://github.com/ikem-krueger/ikem-krueger.github.io/raw/master/_files/ThrottleStop/ThrottleStop.ini) and put it into "C:\Program Files (x86)\ThrottleStop".

This will configure ThrottleStop to:

"Set Multiplier" to "7.5". Check "SLFM". Uncheck "Disable Turbo". Check "C States".

After that the maximum clock changed from 2.5GHz to 2.0 GHz.

It also let ThrottleStop start minimized with no tray icon.

### Configure Task Scheduler

Download [ThrottleStop.xml](https://github.com/ikem-krueger/ikem-krueger.github.io/raw/master/_files/ThrottleStop/ThrottleStop.xml).

Open Task Scheduler and import "ThrottleStop.xml".

This let ThrottleStop start on boot.

## Conclusion

The combination of the more efficient processor, with a different multiplier fixes the heat issue.
