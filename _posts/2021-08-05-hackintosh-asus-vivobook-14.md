---
layout: post
title: Hackintosh on the ASUS VivoBook 14
tags: mac os x, cc by-nc-sa
---

ASUS VivoBook 14 F412FA -> https://www.amazon.de/dp/B07MJBZ5Q2

Specifications:

- CPU: Intel Core i3-8145U
- GPU: Intel UHD 620
- RAM: 4 GB on board, 4 GB socketed
- SSD: 256 GB KINGSTON RBUSNS8180DS3256GJ
- Wi-Fi: Realtek RTL8822BE
- Sound: Realtek ALC256
- Trackpad: Elan 1200 I2C

Modifications:

- Wi-Fi: Intel AX200NGW -> https://www.alternate.de/Intel/Wi-Fi-6-AX200-M-2-vPro-WLAN-Adapter/html/product/1586374

Additions:

- 2,5 Zoll HDD-Cable -> https://www.amazon.de/dp/B07J547VMD/
- 240 GB SPCC Solid State Disk

### Downloads

#### Windows

- Mojave Olarila: https://www.olarila.com/topic/6278-olarila-vanilla-images/
- Clover Boot Disk Creator: https://www.aioboot.com/en/clover-boot-disk
- Apple HFS+ Windows Driver: https://forums.macrumors.com/threads/apple-hfs-windows-driver-download.1368010/
- APFS for Windows Driver: https://www.paragon-software.com/home/apfs-windows/

#### Mac OS X

- Clover Configurator: https://mackie100projects.altervista.org/download-clover-configurator/
- MaciASL: https://github.com/acidanthera/MaciASL
- Kext Wizard: https://noobsplanet.com/index.php?resources/kext-wizard.70/
- HeliPort: https://github.com/OpenIntelWireless/HeliPort

##### Kexts

- VoodooI2C: https://github.com/VoodooI2C/VoodooI2C
- IntelBluetoothFirmware: https://github.com/OpenIntelWireless/IntelBluetoothFirmware
- itlwm: https://github.com/OpenIntelWireless/itlwm

### Create the Installer USB-Stick

I used Windows 10 to create the installer USB-Stick:

1. Extract "Olarila Mojave.raw.zip" with 7-Zip.
2. Extract "Olarila Mojave.raw" with 7-Zip.
3. Rename "disk image.hfsx" to "disk image.hfs".
4. Open Clover Boot Disk Creator:
    - Clover: "EFI System Partition.img"
    - OSX: "disk image.hfs"

### BIOS Configuration

- DVMT Pre-Allocated: 64MB
- Fast Boot: Disabled
- Secure Boot: Disabled
- CSM Support: Disabled
- SATA Mode Selection: AHCI
- VT-d: Disabled

### Post-Installation

- Wi-Fi and Bluetooth: https://blog.kulman.sk/using-intel-wifi-bt-on-macos/
- Graphics: https://elitemacx86.com/threads/intel-uhd-graphics-620-whiskey-lake-on-laptop-clover-opencore.455/
- Backlight: https://dortania.github.io/Getting-Started-With-ACPI/Laptops/backlight-methods/manual.html
- Sound: https://www.youtube.com/watch?v=AVkX4NrdspY
- Function Keys: https://alfauzikri.my.id/Asus-Vivobook-Max-X441UVK-Hackintosh/
- Trackpad: https://www.youtube.com/watch?v=XKwtwkqXkLE

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

#### Trackpad

I used "Kext Wizard" to install the VoodooI2C kexts.

The VoodooI2C kexts need to go to "/System/Library/Extensions"!
