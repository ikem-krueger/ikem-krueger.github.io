# Asus H81M-A NVME Mod

- Parts
- Install SSD on PCIe-adapter
- Patch the UEFI with MMTool
- Activate the Windows built-in NVMe driver during the early boot phase
- Clone Windows with Macrium Reflect

## Parts

- JEYI SK4 M.2 NVMe SSD Adapter
- Samsung 970 EVO Plus

## Install SSD on PCIe-adapter

Lorem Ipsum

## Patch the UEFI with MMTool

- [Original BIOS herunterladen](https://www.asus.com/de/SupportOnly/H81M-A/HelpDesk_BIOS/)
- [Kompilieren einer neuen Firmware mit dem MMTool](https://rothlive.de/de/article/asus-rampage-iv-samsung-970-pro-einbauen-uefi-mod-bei-ami-uefi-bios)

Abweichung: "Insert As Compressed"

## Activate the Windows built-in NVMe driver during the early boot phase

Open the command prompt as administrator and run:

```
sc.exe config stornvme start= boot
```

## Clone Windows with Macrium Reflect

Lorem Ipsum

## Links

- https://superuser.com/questions/1640562/inaccessible-boot-device-after-m-2-ssd-upgrade/1640566#1640566
