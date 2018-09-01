---
layout: post
title: Hackintosh on HP Pavilion a6769de
tags: mac os x, cc by-nc-sa
---

I owe an [HP Pavilion a6769de](https://support.hp.com/us-en/product/hp-pavilion-a6700-desktop-pc-series/3823602/model/3886081/product-info) desktop computer.

I checked if I can install Mac OS X High Sierra on it.

Compatibility boils down to:

- [x] Intel Chipset, not nvidia or the like
- [x] Core 2 Duo 775 or above (1156, 1366, 1155, 2011 compatible)
- [x] Realtek audio
- [x] Realtek 8111 Ethernet or some Intel chips
- [x] A supported video card (ATI - 5850, 5870, 5770, 6850, 6870, Nvidia - 640 or above (any 6xx), 520 or above, Intel - HD3000 or HD4000)

The Intel GMA 3100 is a problem child. Some people got them to work, I'm not one of them.

Hence I bought an Nvidia GeForce 8400 GS. This card works out-of-the-box without intervention.

### Create a bootable USB stick

You need Windows to create the USB stick.

Download "CloverBootDiskCreator.exe", "Clover.img" and "OSX_10.13.6_Installer.hfs" from [here](https://www.aioboot.com/en/clover-boot-disk/#Download).

Follow the instructions [here](https://www.aioboot.com/en/clover-boot-disk/#Clover-Boot-Disk-Creator) to create the USB stick.

![Foo](https://github.com/ikem-krueger/ikem-krueger.github.io/raw/master/images/Clover-Boot-Disk-Creator.jpg "Bar")

#### Fix Clover

When you install Mac OS X High Sierra on an SSD, it automatically create an APFS volume.

You need to configure Clover to recognize them:

```
mv EFI/CLOVER/drivers-Off/drivers64/ApfsDriverLoader-64.efi EFI/CLOVER/drivers64/ApfsDriverLoader-64.efi
mv EFI/CLOVER/drivers-Off/drivers64UEFI/ApfsDriverLoader-64.efi EFI/CLOVER/drivers64UEFI/ApfsDriverLoader-64.efi
```

### Change the BIOS settings

|||
| -- | -- |
| Vendor: | AMI |
| Version: | 5.43 |

You get into the BIOS by hitting "F10". (You see an advanced menu with "Ctrl+F10".)

Change the BIOS settings to:

- SATA mode: AHCI
- Video: PCIe x16

The boot device selection is shown by hitting "Esc".

### Install Clover to harddisk

Download [Clover](https://sourceforge.net/projects/cloverefiboot/).

```
diskutil mount EFI
```

![Foo](https://github.com/ikem-krueger/ikem-krueger.github.io/raw/master/images/Screen-Shot-2017-12-14-at-03.23.26.png "Bar")

### Install additional drivers (kexts)

- Realtek 8812AU [[Direct Link]](https://rehmann.co/blog/wp-content/uploads/2017/12/MacOS10.9_MacOS10.12_Driver.zip) [[Source]](https://rehmann.co/blog/amazonbasics-usb-wifi-adapter-driver/)

- NVidia GeForce 8400 GS [[Direct Link]](https://raw.githubusercontent.com/Benjamin-Dobell/nvidia-update/master/nvidia-update.sh) [[Source]](https://github.com/Benjamin-Dobell/nvidia-update)
