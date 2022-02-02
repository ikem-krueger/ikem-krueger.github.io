---
layout: post
title: Asus H81M-A NVME Mod
tags: asus, uefi, nvme, windows
---

I wanted to use an NVMe-SSD on my Asus H81M-A motherboard. The motherboard is not equipped with a native NVMe-Slot, hence I bought a PCIe-to-NVMe-Adapter.

With this adapter, Windows is seeing the drive. Unfortunately the UEFI doesn't recognize the NVMe-SSD to boot from it. But that can be changed...

Parts used:

- JEYI SK4 M.2 NVMe SSD Adapter
- Samsung 970 EVO Plus

Software used:

- AFUWINx64 and MMTool (can be found in [NVMe_UEFI_MOD.zip](http://dl.duckteam.org/mods/NVMe_UEFI_MOD/NVMe_UEFI_MOD.zip))
- [Macrium Reflect Free](https://www.macrium.com/reflectfree)

## Patch the UEFI with MMTool

- Download the BIOS file [H81M-A-ASUS-2203.zip](https://dlcdnets.asus.com/pub/ASUS/mb/LGA1150/H81M-A/H81M-A-ASUS-2203.zip) and the UEFI Module [NvmExpressDxe_4.rar](https://www.win-unattended.de/Benutzer/Fernando/BIOS-Files/non-Intel/NVMe%20Modules/NvmExpressDxe_4.rar)
- [Compile the new firmware with MMTool](https://rothlive.de/de/article/asus-rampage-iv-samsung-970-pro-einbauen-uefi-mod-bei-ami-uefi-bios)

## Flash the new UEFI

Open the command prompt as administrator and run:

```
afuwinx64 H81M-A-ASUS-2203.CAP
afuwinx64 H81M-A-ASUS-2203-NVMe.rom /GAN
```

## Activate the built-in NVMe driver during the boot

Open the command prompt as administrator and run:

```
sc.exe config stornvme start= boot
```

## Cloning Windows to the NVMe SSD

- [Cloning a disk using Macrium Reflect - YouTube](https://www.youtube.com/watch?v=LClr3FPg4_4)