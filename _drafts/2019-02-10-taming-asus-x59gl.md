---
layout: post
title: Taming ASUS X59GL
tags: windows
---

The ASUS X59GL has a heat issue.

The ASUS X59GL cpu and gpu are on the same heatpipe.

When both are under pressure, the cpu overheats and the laptop shuts down.

It took me a while to find that out.

## Upgrade

This ASUS X59GL comes pre-configured with an Intel Pentium T3200 Dual Core @ 2GHz, 3GB RAM, 250GB HDD and a DVD-Burner. Shipped with Windows Vista Home Premium 32bit.

### OS upgrade

Windows Vista is dead. So I decided to opt for Windows 7.

I went for Windows 7 Home Premium 64bit.

### CPU upgrade

The Intel Pentium T3200 is one of the worse cpus.

It has no SpeedStep, and L3 cache of 1MB. Both leads to a mediocre performance.

I checked what CPU upgrade were possible. The PGA478 socket allowed any Intel Core 2 Duo/Quad.

I looked for several things: a similar cpu, with the same TDP, and a reasonable price.

I decided to upgrade the processor from an [Intel Pentium T3200](http://www.cpu-world.com/sspec/SL/SLAVG.html) to an [Intel Core 2 Duo T9400](http://www.cpu-world.com/sspec/SL/SLGEK.html).

After plugging the cpu in the socket, adding heat paste, hitting power, the laptop did... not boot.

After plugging in the old cpu, making a BIOS update from x.xx to 2.50 the new cpu was recognized.

### RAM upgrade

RAM upgrade from 3GB RAM from different brands to 2*2GB RAM of the same brand.

## Fixing the heat issue

I used [RealTemp](https://www.techpowerup.com/realtemp/) to stress test the CPU, and [FurMark](https://geeks3d.com/furmark/) to stress test the GPU.

Replacing thermal paste.

ThrottleStop configuration.

Setting multiplicator from 9.0 to 7.5.

So the maximum clock changed from 2.5GHz to 2.0 GHz.

Aufgabenplanung.

## Costs:

### Parts:

* 5€ [Intel Core 2 Duo T9400]
* 5€ [2GB RAM]
* 3€ [Thermal Paste]

Total: 13€

### Work hours:

* ?€ Better don't count that...

### Total:

13€ Parts + ?€ Work hours = 13€ Total

## Conclusion

ASUS X59GL has now an Intel Core 2 Duo @ 2.5GHz, 4GB RAM, 250GB HDD.

Windows 7 works very well on it.

Web browsing, watching Youtube videos works fine. Older games should work too.

It had become a working horse. An old working horse.

## Future improvements

I suggest to replace the fan with a [newer one]. And replacing the 250GB HDD with a [250GB SSD].
