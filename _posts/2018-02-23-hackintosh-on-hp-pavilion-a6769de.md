---
layout: post
title: Hackintosh on HP Pavilion a6769de
tags: mac os x, cc by-nc-sa
---

I owe an [HP Pavilion a6769de](https://support.hp.com/us-en/product/hp-pavilion-a6700-desktop-pc-series/3823602/model/3886081/product-info) desktop computer.

 | Hardware | Name |
 | :-- | :-- |
 | Motherboard: | ASUS IPIB-LB (Benicia) |
 | BIOS: | AMI v5.43 |
 | Chipset: | Intel G33 (Bearlake) |
 | CPU: | Intel Core 2 Quad 9300 @ 2.50 GHz (Penryn) |
 | RAM: | 8 GB DDR2-RAM |
 | Video: | Intel G33/G31 Express Chipset |
 | Audio: | Realtek ALC888S |
 | Ethernet: | Realtek 8111C |

I checked if I can install Mac OS X High Sierra on it.

Compatibility boils down to:

- [x] Chipset: Intel
- [x] CPU: Core 2 Duo 775 or above (1156, 1366, 1155, 2011 compatible)
- [x] Audio: Realtek
- [x] Ethernet: Realtek 8111 or Intel
- [x] Video:
  - Intel - HD3000 or HD4000
  - ATI - 5850, 5870, 5770, 6850, 6870
  - NVidia - 520 or above, 640 or above (any 6xx)

Almost all of my hardware is supported. 

Troublesome is the Intel GMA 3100 and the Realtek ALC888S.

I bought:

 | Hardware | Name |
 | :-- | :-- |
 | Video: | NVidia GeForce GT 710 [10DE:128B] |
 | Audio: | Sound Blaster Tactic(3D) Alpha [30DC:041E] |
 | WLAN: | Realtek 8812AU [0111:0BDA] |
 | SSD: | SPCC Solid State Disk |

### Create a bootable USB stick

You need Windows to create the USB stick.

Download "CloverBootDiskCreator.exe", "Clover.img" and "OSX_10.13.6_Installer.hfs" from [here](https://www.aioboot.com/en/clover-boot-disk/#Download).

Then run the "CloverBootDiskCreator.exe".

![](https://github.com/ikem-krueger/ikem-krueger.github.io/raw/master/images/Clover-Boot-Disk-Creator.jpg "Clover Boot Disk Creator")

1. Select the "Clover.img" file
2. Select the "OSX_10.13.6_Installer.hfs" file
3. Select your USB drive
4. Click "OK"

#### Fix Clover

When you install Mac OS X High Sierra on an SSD, it automatically create an APFS volume.

You need to configure Clover to recognize them:

```
mv EFI/CLOVER/drivers-Off/drivers64/ApfsDriverLoader-64.efi EFI/CLOVER/drivers64/ApfsDriverLoader-64.efi
mv EFI/CLOVER/drivers-Off/drivers64UEFI/ApfsDriverLoader-64.efi EFI/CLOVER/drivers64UEFI/ApfsDriverLoader-64.efi
```

### Change the BIOS settings

You get into the BIOS by hitting "F10". (You see an advanced menu with "Ctrl+F10".)

Change the BIOS settings to:

- SATA mode: AHCI
- Video: PCIe x16

### Booting from the USB stick

When the boot screen is shown, hit "Esc" to see the boot device selection screen.

Select the USB stick, and hit "Enter".

Choose "Boot Macintosh Install from HD".

Be patient. It takes around 5 minutes until the Mac OS X installer screen shows up.

### Install Mac OS X High Sierra

The installation takes around 30 minutes, with three reboots in between.

### Install Clover to harddisk

Download the [Clover Installation Package](https://sourceforge.net/projects/cloverefiboot/files/latest/download).

Mount the EFI partition:

```
diskutil mount EFI
```

Install Clover:

![](https://github.com/ikem-krueger/ikem-krueger.github.io/raw/master/images/Screen-Shot-2017-12-14-at-03.22.58.png "Clover Installation Type before clicking the Customize button")

![](https://github.com/ikem-krueger/ikem-krueger.github.io/raw/master/images/Screen-Shot-2017-12-14-at-03.23.26.png "Clover Installation Type after clicking the Customize button")

### Install additional drivers (kexts)

- Realtek 8812AU [[Direct Link]](https://github.com/chris1111/Wireless-USB-Adapter-Clover/files/1835745/Wireless.USB.Adapter.Clover.zip) [[Source]](https://github.com/chris1111/Wireless-USB-Adapter-Clover)

- NVidia GeForce GT 710 [[Direct Link]](https://raw.githubusercontent.com/Benjamin-Dobell/nvidia-update/master/nvidia-update.sh) [[Source]](https://github.com/Benjamin-Dobell/nvidia-update)

### Workarounds

Settings -> Energy Saver -> Computer Sleep: Never

### Tweaks

Enable subpixel font rendering on non-Apple LCDs:

```
defaults -currentHost write -globalDomain AppleFontSmoothing -int 2
```

Enable TRIM:

```
trimforce enable
```

