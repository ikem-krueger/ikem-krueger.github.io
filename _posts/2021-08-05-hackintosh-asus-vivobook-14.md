---
layout: post
title: Hackintosh on the ASUS VivoBook 14
tags: mac os x, cc by-nc-sa
---

ASUS VivoBook 14 F412FA -> [Amazon](https://www.amazon.de/dp/B07MJBZ5Q2)

Specifications:

- CPU: Intel Core i3-8145U
- GPU: Intel UHD 620
- RAM: 4 GB on board, 4 GB socketed
- SSD: 256 GB KINGSTON RBUSNS8180DS3256GJ
- Wi-Fi: Realtek RTL8822BE
- Sound: Realtek ALC256
- Trackpad: Elan 1200 I2C

Modifications:

- Wi-Fi: Intel AX200NGW -> [Alternate](https://www.alternate.de/Intel/Wi-Fi-6-AX200-M-2-vPro-WLAN-Adapter/html/product/1586374)

Additions:

- SSD: 240 GB SPCC Solid State Disk
- 2,5 Zoll HDD-Cable -> [Amazon](https://www.amazon.de/dp/B07J547VMD/)

Windows 10 is installed on the 256 GB Kingston SSD.

Mac OS X "Mojave" will be installed on the "external" 240 GB SPCC SSD.

### Downloads

#### Windows

- [Clover Boot Disk Creator](https://www.aioboot.com/en/clover-boot-disk)
- [Mojave Olarila](https://www.olarila.com/topic/6278-olarila-vanilla-images/)
- [Apple HFS+ Windows Driver](https://forums.macrumors.com/threads/apple-hfs-windows-driver-download.1368010/)
- [APFS for Windows Driver](https://www.paragon-software.com/home/apfs-windows/)

#### Mac OS X

- [Clover Configurator](https://mackie100projects.altervista.org/download-clover-configurator/)
- [MaciASL](https://github.com/acidanthera/MaciASL)
- [Kext Wizard](https://noobsplanet.com/index.php?resources/kext-wizard.70/)
- [HeliPort](https://github.com/OpenIntelWireless/HeliPort)

#### Kexts

- [IntelBluetoothFirmware](https://github.com/OpenIntelWireless/IntelBluetoothFirmware)
- [itlwm](https://github.com/OpenIntelWireless/itlwm)
- [BrightnessKeys](https://github.com/acidanthera/BrightnessKeys)
- [VoodooI2C](https://github.com/VoodooI2C/VoodooI2C)

### Create the Installer USB-Stick

I used Windows 10 to create the installer USB-Stick:

1. Extract "Olarila Mojave.raw.zip" with 7-Zip.
2. Extract "Olarila Mojave.raw" with 7-Zip.
3. Rename "disk image.hfsx" to "disk image.hfs".
4. Open Clover Boot Disk Creator:
    - Clover: "EFI System Partition.img"
    - OSX: "disk image.hfs"

### BIOS Configuration

Hit "Esc" to open the boot menu.

Choose "Setup".

Change this settings:

- DVMT Pre-Allocated: 64MB
- Fast Boot: Disabled
- Secure Boot: Disabled
- CSM Support: Disabled
- SATA Mode Selection: AHCI
- VT-d: Disabled

### Installation

Hit "Esc" to open the boot menu.

Choose the prepared usb stick and "Mojave Installer".

You need an usb mouse during the installation. Setting up the trackpad happens post-install.

### Post-Installation

- [Clover](https://hackintosh.gitbook.io/-r-hackintosh-vanilla-desktop-guide/clover-setup)
- [Wi-Fi and Bluetooth](https://blog.kulman.sk/using-intel-wifi-bt-on-macos/)
- [Graphics](https://elitemacx86.com/threads/intel-uhd-graphics-620-whiskey-lake-on-laptop-clover-opencore.455/)
- [Backlight](https://dortania.github.io/Getting-Started-With-ACPI/Laptops/backlight-methods/manual.html)
- [Sound](https://www.youtube.com/watch?v=AVkX4NrdspY)
- [Function Keys](https://alfauzikri.my.id/Asus-Vivobook-Max-X441UVK-Hackintosh/)
- [Trackpad](https://www.youtube.com/watch?v=XKwtwkqXkLE)

#### Clover

Clover need to be version <=5122!

#### Wi-Fi

I use the itwlm/HeliPort combination.

- [v1.2.0](https://github.com/OpenIntelWireless/itlwm/releases/tag/v1.2.0) is rock solid, but limited to 2.4GHz networks
- v1.3.0 supports 2.4GHz/5.GHz networks, but drops the connection every 10 minutes
- [v2.0.0-alpha](https://github.com/OpenIntelWireless/itlwm/releases/tag/v2.0.0-alpha) same as v1.3.0, but drops the connection less frequently


#### Backlight

Download "[SSDT-PNLFCFL.dsl](https://github.com/acidanthera/OpenCorePkg/blob/master/Docs/AcpiSamples/Source/SSDT-PNLFCFL.dsl)" and rename them to "SSDT-PNLF.dsl".

Use MaciASL to edit "SSDT-PNLF.dsl" and replace all occurrences of "GFX0" with "IGPU".

- Save As: "SSDT-PNLF.aml"
- File Format: "ACPI Machine Language Binary"

Move the "SSDT-PNLF.aml" to "/EFI/Clover/ACPI/patched".

Reboot.

### Sound

- https://www.tonymacx86.com/threads/sound-loss-after-reboot-back-from-windows.264988/#post-1852911
- https://dortania.github.io/OpenCore-Post-Install/universal/audio.html#applealc-not-working-from-windows-reboot

#### Trackpad

Use "Kext Wizard" to install the VoodooI2C kexts to "/System/Library/Extensions"!

Open "System Preferences" > "Trackpad" and disable "Force click and haptic feedback".

### Links

 - https://githubmemory.com/repo/tctien342/Asus-Vivobook-S510UA-Hackintosh/issues?cursor=Y3Vyc29yOnYyOpK5MjAyMC0wMS0wNlQwODowOToxOSswODowMM4gg3aN&pagination=next&page=3
 - https://github.com/LeeBinder/Asus-Vivobook-S510UA-Hackintosh
