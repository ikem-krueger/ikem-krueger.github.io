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

- Download Original BIOS from [here](https://www.asus.com/en/SupportOnly/H81M-A/HelpDesk_BIOS/)
- Compile the new firmware with MMTool

Abweichung: "Insert As Compressed"

## Flash new UEFI

```
afuwinx64
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
