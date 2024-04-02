---
layout: post
title: Linux for old PC (Part 2)
tags: linux mint, xfce
---

## Patch UEFI

### Backup BIOS

```
sudo flashrom -p ch341a_spi -c MX25L1605A/MX25L1606E/MX25L1608E -r bios.bin
```

### Remove whitelist

...

### Disable CSM

...

## Undervolt and underclock

Download and compile [amdmsrtweaker-lnx](https://github.com/johkra/amdmsrtweaker-lnx).

When done:

```
sudo modprobe msr
sudo modprobe cpuid
sudo amdmsrt P0=16@1.3 P1=12.8@1.235 P2=8@0.9875 # stock
sudo amdmsrt P0=16@1.15 P1=10.88@1.0 P2=8@0.8 # undervolt and underclock
```

### Links

 - [Overclocking the E-350 APU on Linux - Super User](https://superuser.com/questions/492292/overclocking-the-e-350-apu-on-linux/922418#922418)
 - [Undervolt, Underclock, Overclock AMD E-350 Zacate](https://forum.kodi.tv/showthread.php?tid=104716)
