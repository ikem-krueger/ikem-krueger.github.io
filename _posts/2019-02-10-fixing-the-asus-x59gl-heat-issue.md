---
layout: post
title: Fixing the ASUS X59GL heat issue
tags: windows, undervolt, underclock
---

The ASUS X59GL comes pre-configured with an Intel Pentium T3200 Dual Core @ 2.0 GHz, 3GB RAM, 250GB HDD and a DVD-Burner. Shipped with Windows Vista Home Premium 32bit.

The ASUS X59GL has a heat issue. The cpu and gpu are on the same heatpipe. When the cpu and gpu are under heavy stress, the cpu overheats and the laptop randomly shuts down.

It took me a while to find that out.

How do I fixed that?

One part in hardware, one part in software:

- Hardware: upgrading the processor to a more efficient processor
- Software: fixing the maximum clock speed to 2.0 GHz

## Hardware: upgrading the processor to a more efficient processor

The Intel Pentium T3200 is one of the worse cpus. It has no SpeedStep, and an L3 cache of 1MB. Both leads to a mediocre performance.

I checked what CPU upgrade paths were possible. I looked for several things: a similar cpu, with the same TDP, and a reasonable price.

The PGA478 socket allowed for an Intel Core 2 Duo/Quad.

I decided to upgrade the processor to an [Intel Core 2 Duo T9400](http://www.cpu-world.com/sspec/SL/SLGEK.html).

After plugging the cpu in the socket, adding heat paste, hitting power, the laptop did nothing.

After plugging in the [old cpu](http://www.cpu-world.com/sspec/SL/SLAVG.html), making a BIOS update from version 208 to [version 222](https://dlcdnets.asus.com/pub/ASUS/nb/F5GL/F5GLAS222.zip) the new cpu was recognized.

So update the BIOS before you upgrade the CPU!

## Software: fixing the maximum clock speed to 2.0 GHz

Fixing the clock speed is done by [ThrottleStop](https://www.techpowerup.com/download/techpowerup-throttlestop/).

### Install and configure ThrottleStop

Download ThrottleStop and extract it to "C:\Program Files (x86)\ThrottleStop".

Either manually configure ThrottleStop to:

* "Multiplier" "7.5"
* "SLFM" checked
* "Disable Turbo" unchecked
* "C States" checked

Or download [ThrottleStop.ini](https://github.com/ikem-krueger/ikem-krueger.github.io/raw/master/_files/ThrottleStop/ThrottleStop.ini) and put it into "C:\Program Files (x86)\ThrottleStop".

After that, the maximum clock speed changed from 2.5 GHz to 2.0 GHz.

### Configure Task Scheduler

To let ThrottleStop start on boot, download [ThrottleStop.xml](https://github.com/ikem-krueger/ikem-krueger.github.io/raw/master/_files/ThrottleStop/ThrottleStop.xml) and open the Task Scheduler and import "ThrottleStop.xml".

## Conclusion

The combination of the more efficient processor, with a different multiplier results in a lower TDP, which fixes the heat issue.
