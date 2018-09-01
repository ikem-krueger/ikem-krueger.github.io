---
layout: post
title: Hackintosh on HP Pavilion a6769de
tags: mac os x, cc by-nc-sa
---

I owe an [HP Pavilion a6769de](https://support.hp.com/us-en/product/hp-pavilion-a6700-desktop-pc-series/3823602/model/3886081/product-info) desktop computer.

 | Motherboard: | ASUS IPIB-LB (Benicia) |
 | -- | -- |
 | Chipset: | Intel G33 (Bearlake) |
 | CPU: | Intel Core 2 Quad 9300 @ 2.50 GHz (Penryn) |
 | RAM: | 8 GB DDR2-RAM |
 | Video: | Intel G33/G31 Express Chipset |
 | Audio: | Realtek ALC888S |
 | Ethernet: | Realtek 8111C |

I checked if I can install Mac OS X High Sierra on it.

Compatibility boils down to:

- [x] Intel Chipset, not nvidia or the like
- [x] Core 2 Duo 775 or above (1156, 1366, 1155, 2011 compatible)
- [x] Realtek audio
- [x] Realtek 8111 Ethernet or some Intel chips
- [x] A supported video card (ATI - 5850, 5870, 5770, 6850, 6870, Nvidia - 640 or above (any 6xx), 520 or above, Intel - HD3000 or HD4000)

The Intel GMA 3100 is a problem child. Some people got them to [work](https://www.insanelymac.com/forum/topic/325283-desktop-intel-hd-3000-graphics/), I'm none of them.

Hence I bought an Nvidia GeForce 8400 GS. This card works out-of-the-box without intervention.

### Create a bootable USB stick

You need Windows to create the USB stick.

Download "CloverBootDiskCreator.exe", "Clover.img" and "OSX_10.13.6_Installer.hfs" from [here](https://www.aioboot.com/en/clover-boot-disk/#Download).

Then run the "CloverBootDiskCreator.exe".

![](https://github.com/ikem-krueger/ikem-krueger.github.io/raw/master/images/Clover-Boot-Disk-Creator.jpg "Clover Boot Disk Creator")

1. Clover: Select the Clover.img file.
2. OSX: Selects the OSX_10.13.6_Installer.hfs file.
3. Target Disk: Select your USB.
4. Click OK.

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

Download the [Clover](https://sourceforge.net/projects/cloverefiboot/) installation package.

Mount the EFI partition:

```
diskutil mount EFI
```

![](https://github.com/ikem-krueger/ikem-krueger.github.io/raw/master/images/Screen-Shot-2017-12-14-at-03.22.58.png "Clover Installation Type before clicking the Customize button")

![](https://github.com/ikem-krueger/ikem-krueger.github.io/raw/master/images/Screen-Shot-2017-12-14-at-03.23.26.png "Clover Installation Type after clicking the Customize button")

### Install additional drivers (kexts)

- Realtek 8812AU [[Direct Link]](https://rehmann.co/blog/wp-content/uploads/2017/12/MacOS10.9_MacOS10.12_Driver.zip) [[Source]](https://rehmann.co/blog/amazonbasics-usb-wifi-adapter-driver/)

- NVidia GeForce 8400 GS [[Direct Link]](https://raw.githubusercontent.com/Benjamin-Dobell/nvidia-update/master/nvidia-update.sh) [[Source]](https://github.com/Benjamin-Dobell/nvidia-update)
