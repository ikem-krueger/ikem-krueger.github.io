# Hackintosh on the ASUS VivoBook 14 F412FA

ASUS VivoBook 14 F412FA -> https://www.amazon.de/dp/B07MJBZ5Q2

Specifications:

- CPU: Intel Core i3-8145U
- GPU: Intel UHD 620
- RAM: 4 GB on board, 4 GB socketed
- SSD: 256 GB KINGSTON RBUSNS8180DS3256GJ
- Wi-Fi: Realtek ?
- Sound: Realtek ALC256
- Trackpad: Elan 1200 I2C

Modifications:

- Intel AX200NGW -> https://www.alternate.de/Intel/Wi-Fi-6-AX200-M-2-vPro-WLAN-Adapter/html/product/1586374
- 2,5 Zoll HDD-Cable -> https://www.amazon.de/dp/B07J547VMD/
- 240 GB SPCC Solid State Disk

## Downloads

- Mojave Olarila: https://www.olarila.com/topic/6278-olarila-vanilla-images/
- Clover Boot Disk Creator: https://www.aioboot.com/en/clover-boot-disk
- IntelBluetoothFirmware: https://github.com/OpenIntelWireless/IntelBluetoothFirmware
- itlwm: https://github.com/OpenIntelWireless/itlwm
- HeliPort: https://github.com/OpenIntelWireless/HeliPort
- VoodooI2C: https://github.com/VoodooI2C/VoodooI2C
- Apple HFS+ Windows Driver: https://forums.macrumors.com/threads/apple-hfs-windows-driver-download.1368010/
- APFS for Windows Driver: https://www.paragon-software.com/home/apfs-windows/

## Create the Installer USB-Stick

1. Extract "Olarila Mojave.raw.zip" with 7-Zip.
2. Extract "Olarila Mojave.raw" with 7-Zip.
3. Rename "disk image.hfsx" to "disk image.hfs".
4. Open Clover Boot Disk Creator:
    - Clover: "EFI System Partition.img"
    - OSX: "disk image.hfs"

## BIOS Configuration

## Post-Installation

- Wi-Fi and Bluetooth: https://blog.kulman.sk/using-intel-wifi-bt-on-macos/
- Graphics: https://elitemacx86.com/threads/intel-uhd-graphics-620-whiskey-lake-on-laptop-clover-opencore.455/
- Sound: https://www.youtube.com/watch?v=AVkX4NrdspY
- Trackpad: https://www.youtube.com/watch?v=XKwtwkqXkLE
