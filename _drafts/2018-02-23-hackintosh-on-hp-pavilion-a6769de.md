---
layout: post
title: Hackintosh on HP Pavilion a6769de
tags: mac os x, cc by-nc-sa
---

I owe an [HP Pavilion a6769de](https://support.hp.com/us-en/product/hp-pavilion-a6700-desktop-pc-series/3823602/model/3886081/product-info).

The motherboard is an ASUS IPIB-LB (Benicia).

Specifications:

|||
| -- | -- |
| Chipset: | Intel G33 (Bearlake) |
| CPU: | Intel Core 2 Quad 9300 @ 2.50 GHz (Penryn) |
| RAM: | 8 GB DDR2-RAM |
| Video: | Intel G33/G31 Express Chipset |
| Audio: | Realtek ALC888S |
| Ethernet: | Realtek 8111C |

The Intel GMA 3100 is the problem child. Some people got them to work, but that's way over my head how they did it.

I bought this additional hardware:

|||
| -- | -- |
| Video: | NVidia GeForce 8400 GS [10de:06e4] |
| Audio: | Soundblaster SB 5.1 VX [1102:0007] |
| WLAN: | Realtek 8812AU [0111:0bda] |
| SSD: | SPCC Solid State Disk |

The most important piece here is the Nvidia GeForce 8400 GS. Works out-of-the-box without intervention.

The driver installed later, are for better performance.

## BIOS Settings

|||
| -- | -- |
| Vendor: | AMI |
| Version: | 5.43 |

You get into the BIOS by hitting "F10". (You see an advanced menu with "Ctrl+F10".)

Change the BIOS settings to:

- SATA mode: AHCI
- Firewire: disabled
- Video: PCIe x16
- Audio: internal disabled
- Ethernet: disabled

The boot device selection is shown by hitting "Esc".

I owe an USB keyboard, and wait until "Numlock" starts to blink and then I hit "Esc".

### Create bootable USB stick

You need Windows to create the USB stick.

Download "CloverBootDiskCreator.exe", "Clover.img" and "OSX_10.13.6_Installer.hfs" from [here](https://www.aioboot.com/en/clover-boot-disk/#Download).

Follow the instructions on [here](https://www.aioboot.com/en/clover-boot-disk/#Clover-Boot-Disk-Creator) to create the USB stick.

### Clover boot fix

When you install Mac OS X High Sierra on an SSD, it automatically create an APFS volume.

You need to configure Clover to recognize them:

```
mv EFI/CLOVER/drivers-Off/drivers64/ApfsDriverLoader-64.efi EFI/CLOVER/drivers64/ApfsDriverLoader-64.efi
mv EFI/CLOVER/drivers-Off/drivers64UEFI/ApfsDriverLoader-64.efi EFI/CLOVER/drivers64UEFI/ApfsDriverLoader-64.efi
```

### Install additional drivers (kexts)

- Realtek 8812AU [[Direct Link]](https://rehmann.co/blog/wp-content/uploads/2017/12/MacOS10.9_MacOS10.12_Driver.zip) [[Source]](https://rehmann.co/blog/amazonbasics-usb-wifi-adapter-driver/)

- NVidia GeForce 8400 GS [[Direct Link]](https://raw.githubusercontent.com/Benjamin-Dobell/nvidia-update/master/nvidia-update.sh) [[Source]](https://github.com/Benjamin-Dobell/nvidia-update)

### Install Clover to harddisk

```
diskutil mount EFI
```

custom install
