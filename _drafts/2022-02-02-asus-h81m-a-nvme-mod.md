# Asus H81M-A NVME Mod

Parts used:

- JEYI SK4 M.2 NVMe SSD Adapter
- Samsung 970 EVO Plus

Software used:

- MMTool
- afuwinx64
- Macrium Reflect

## Install SSD on PCIe-Adapter

Lorem Ipsum

## Patch the UEFI with MMTool

- Download the original BIOS file [H81M-A-ASUS-2203.zip](https://www.asus.com/en/SupportOnly/H81M-A/HelpDesk_BIOS/) and the UEFI Module [NvmExpressDxe_4.rar](https://www.win-unattended.de/Benutzer/Fernando/BIOS-Files/non-Intel/NVMe%20Modules/NvmExpressDxe_4.rar)
- Compile the new firmware with MMTool (Insert As Compressed)

## Flash new UEFI

Open the command prompt as administrator and run:

```
afuwinx64 H81M-A-ASUS-2203.CAP
afuwinx64 H81M-A-ASUS-2203-NVMe.rom /GAN
```

## Activate the Windows built-in NVMe driver during the early boot phase

Open the command prompt as administrator and run:

```
sc.exe config stornvme start= boot
```

## Clone Windows with Macrium Reflect

Lorem Ipsum

## Links

- https://rothlive.de/de/article/asus-rampage-iv-samsung-970-pro-einbauen-uefi-mod-bei-ami-uefi-bios
- https://superuser.com/questions/1640562/inaccessible-boot-device-after-m-2-ssd-upgrade/1640566#1640566
