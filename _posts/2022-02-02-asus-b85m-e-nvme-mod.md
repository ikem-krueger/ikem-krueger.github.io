---
layout: post
title: Asus B85M-E NVMe Mod
tags: asus, uefi, nvme, windows
---

I wanted to use an NVMe-SSD on my Asus B85M-E motherboard. The motherboard is not equipped with a native NVMe-Slot, hence I bought a PCIe-to-NVMe-Adapter.

With this adapter, Windows is seeing the drive. Unfortunately the UEFI doesn't recognize the NVMe-SSD to boot from it. But that can be changed...

Hardware used:

- [JEYI SK4 M.2 NVMe SSD Adapter](https://www.newegg.com/p/17Z-00AP-00004)
- [Samsung 970 EVO Plus](https://www.samsung.com/de/memory-storage/nvme-ssd/970-evo-plus-nvme-m-2-ssd-500gb-mz-v7s500bw/)

Software used:

- [Macrium Reflect Free](https://www.macrium.com/reflectfree)

## Manual patch the UEFI with MMTool

- Download AFUWINx64 and MMTool (can be found in [NVMe_UEFI_MOD.zip](http://dl.duckteam.org/mods/NVMe_UEFI_MOD/NVMe_UEFI_MOD.zip))
- Download the BIOS file [B85M-E-ASUS-3602.zip](https://dlcdnets.asus.com/pub/ASUS/mb/LGA1150/B85M-E/B85M-E-ASUS-3602.zip) and the UEFI Module [NvmExpressDxe_4.rar](https://www.win-unattended.de/Benutzer/Fernando/BIOS-Files/non-Intel/NVMe%20Modules/NvmExpressDxe_4.rar)
- [Compile the new firmware with MMTool](https://rothlive.de/de/article/asus-rampage-iv-samsung-970-pro-einbauen-uefi-mod-bei-ami-uefi-bios)

## Alternative use the patched UEFI file I created

- Download [B85M-E-ASUS-3602-NVMe.zip](https://github.com/ikem-krueger/ikem-krueger.github.io/raw/master/_files/UEFI/B85M-E-ASUS-3602-NVMe.zip)

## Flash the new UEFI

To circumvent the ASUS BIOS protection, you need to flash the BIOS twice.

Use an elevated command prompt and run the `AFUWINx64.EXE` file using the ORIGINAL UNMODIFIED .CAP file:

```
AFUWINx64.EXE B85M-E-ASUS-3602.CAP
```

Now run the program again with the modified ROM file with the `/GAN` tag after it:

```
AFUWINx64.EXE B85M-E-ASUS-3602-NVMe.rom /GAN
```

## Activate the built-in NVMe driver during the boot

If you had Windows installed on an SATA device, then only the SATA driver (e.g. StorAhci) is enabled for "boot start". The NVMe driver is deferred to a later phase.

To enable the NVMe driver for the "boot start" phase, run the command:

```
sc.exe config stornvme start= boot
```

## Cloning Windows to the NVMe SSD

- [Cloning a disk using Macrium Reflect - YouTube](https://www.youtube.com/watch?v=LClr3FPg4_4)
