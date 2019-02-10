---
layout: post
title: Taming ASUS X59GL
tags: windows, undervolt, underclock
---

The ASUS X59GL has a heat issue.

The ASUS X59GL cpu and gpu are on the same heatpipe.

When both are under pressure, the cpu overheats and the laptop shuts down.

It took me a while to find that out.

I used [RealTemp](https://www.techpowerup.com/realtemp/) to stress test the CPU, and [FurMark](https://geeks3d.com/furmark/) to stress test the GPU.

## Upgrade

This ASUS X59GL comes pre-configured with an Intel Pentium T3200 Dual Core @ 2GHz, 3GB RAM, 250GB HDD and a DVD-Burner. Shipped with Windows Vista Home Premium 32bit.

### OS upgrade

Windows Vista is dead. So I decided to opt for Windows 7.

I went for Windows 7 Home Premium 64bit.

### CPU upgrade

The Intel Pentium T3200 is one of the worse cpus.

It has no SpeedStep, and an L3 cache of 1MB. Both leads to a mediocre performance.

I checked what CPU upgrade were possible. The PGA478 socket allowed any Intel Core 2 Duo/Quad.

I looked for several things: a similar cpu, with the same TDP, and a reasonable price.

I decided to upgrade the processor from an [Intel Pentium T3200](http://www.cpu-world.com/sspec/SL/SLAVG.html) to an [Intel Core 2 Duo T9400](http://www.cpu-world.com/sspec/SL/SLGEK.html).

After plugging the cpu in the socket, adding heat paste, hitting power, the laptop did... not boot.

After plugging in the old cpu, making a BIOS update from version 208 to [version 222](https://www.asus.com/supportonly/X59GL/HelpDesk_BIOS/) the new cpu was recognized.

### RAM upgrade

RAM upgrade from 3GB RAM from different brands to 2*2GB RAM of the same brand.

## Costs:

### Parts:

* 5€ [Intel Core 2 Duo T9400](https://www.ebay.de/itm/113327133419)
* 5€ [2GB RAM DDR2 SODIMM](https://www.ebay-kleinanzeigen.de/s-sortierung:preis/2gb-ram-ddr2-sodimm/k0)
* 3€ [Thermal Paste]

### Work hours:

* ?€ Better don't count that...

### Total:

13€ Parts + ?€ Work hours = 13€ Total

## Fixing the heat issue

### Install and configure ThrottleStop

Download [ThrottleStop](https://www.techpowerup.com/download/techpowerup-throttlestop/) and extract it to "C:\Program Files (x86)\ThrottleStop".

Download [ThrottleStop.ini] and put it into "C:\Program Files (x86)\ThrottleStop".

This will configure ThrottleStop to:

"Set Multiplier" to "7.5". Check "SLFM". Uncheck "Disable Turbo". Check "C States".

After that the maximum clock changed from 2.5GHz to 2.0 GHz.

It also let ThrottleStop start minimized with no tray icon.

### Configure Task Scheduler

Download [ThrottleStop.xml].

Open Task Scheduler and import "ThrottleStop.xml".

This let ThrottleStop start on boot.

## Conclusion

ASUS X59GL has now an Intel Core 2 Duo @ 2.5GHz, 4GB RAM, 250GB HDD.

Windows 7 works very well on it.

Web browsing, watching Youtube videos works fine. Older games should work too.

It had become a working horse. An old but solid working horse.

## Future improvements

I suggest to replace the fan with a [newer one](https://www.ebay.de/itm/273618471582). And replacing the 250GB HDD with a [250GB SSD].
