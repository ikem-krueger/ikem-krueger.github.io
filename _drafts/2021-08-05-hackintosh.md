# Hackintosh on the ASUS VivoBook 14 F412FA

ASUS VivoBook 14 F412FA: https://www.amazon.de/dp/B07MJBZ5Q2

Specifications:

Modifications:

- Intel AX200NGW -> ?
- 2,5 Zoll HDD-Cable -> https://www.amazon.de/dp/B07J547VMD/
- SPCC Solid State Disk

## Downloads

- Mojave Olarila: https://www.olarila.com/topic/6278-olarila-vanilla-images/
- Clover Boot Disk Creator: https://www.aioboot.com/en/clover-boot-disk
- itlwm: https://github.com/OpenIntelWireless/itlwm
- HeliPort: https://github.com/OpenIntelWireless/HeliPort
- IntelBluetoothFirmware: https://github.com/OpenIntelWireless/IntelBluetoothFirmware

## Create the Installer USB-Stick

Extract "Olarila Mojave.raw.zip" with 7-Zip.

Extract "Olarila Mojave.raw" with 7-Zip.

Rename "disk image.hfsx" to "disk image.hfs".

Open Clover Boot Disk Creator:

- Clover: "EFI System Partition.img"
- OSX: "disk image.hfs"

## Post-Installation

- Wi-Fi and Bluetooth: https://blog.kulman.sk/using-intel-wifi-bt-on-macos/
- Intel UHD Graphics 620: https://elitemacx86.com/threads/intel-uhd-graphics-620-whiskey-lake-on-laptop-clover-opencore.455/
- Trackpad: https://www.youtube.com/watch?v=XKwtwkqXkLE
