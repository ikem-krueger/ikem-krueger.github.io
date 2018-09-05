---
layout: post
title: Hide partitions without a label or UUID in Clover
tags: mac os x, clover, clover configurator, hackintosh, cc by-nc-sa
---

Show all possible volumes:

```
bdmesg|grep 'Volume: .*HD([0-9],.*)'
```

You get something like: 

```
5:689  0:000  - [06]: Volume: PcieRoot(0x0)\Pci(0x1F,0x2)\Sata(0x0,0x0,0x0)\HD(1,GPT,98DD79E1-77B8-4493-8C6D-1EB22CD317D9,0x28,0x64000)
5:691  0:000  - [07]: Volume: PcieRoot(0x0)\Pci(0x1F,0x2)\Sata(0x0,0x0,0x0)\HD(2,GPT,C8C1F84F-2102-4F9F-AF56-E1329F1D18D1,0x64028,0x1BEC0460)
5:691  0:000  - [08]: Volume: PcieRoot(0x0)\Pci(0x1F,0x2)\Sata(0x2,0x0,0x0)\HD(1,MBR,0x58CA9BE8,0x800,0x1327A0)
5:691  0:000  - [09]: Volume: PcieRoot(0x0)\Pci(0x1F,0x2)\Sata(0x2,0x0,0x0)\HD(2,MBR,0x58CA9BE8,0x133000,0x127732EA)
5:692  0:000  - [10]: Volume: PcieRoot(0x0)\Pci(0x1F,0x2)\Sata(0x2,0x0,0x0)\HD(3,MBR,0x58CA9BE8,0x128A6800,0x172000)
```

I have two disks.

My first disk on "Sata(0x0,0x0,0x0)" has two volumes (partitions):

```
HD(1,GPT,98DD79E1-77B8-4493-8C6D-1EB22CD317D9,0x28,0x64000)
HD(2,GPT,C8C1F84F-2102-4F9F-AF56-E1329F1D18D1,0x64028,0x1BEC0460)
```

My second disk on "Sata(0x2,0x0,0x0)" has three volumes (partitions):

```
HD(1,MBR,0x58CA9BE8,0x800,0x1327A0)
HD(2,MBR,0x58CA9BE8,0x133000,0x127732EA)
HD(3,MBR,0x58CA9BE8,0x128A6800,0x172000)
```

To determine what disk to hide, we use "diskutil" to get an idea of the disk/volume layout.

```
diskutil list
```

You get something like: 

```
/dev/disk0 (internal, physical):
   #:                       TYPE NAME                    SIZE       IDENTIFIER
   0:      GUID_partition_scheme                        *240.1 GB   disk0
   1:                        EFI EFI                     209.7 MB   disk0s1
   2:                 Apple_APFS Container disk1         239.8 GB   disk0s2

/dev/disk1 (synthesized):
   #:                       TYPE NAME                    SIZE       IDENTIFIER
   0:      APFS Container Scheme -                      +239.8 GB   disk1
                                 Physical Store disk0s2
   1:                APFS Volume Macintosh HD            73.8 GB    disk1s1
   2:                APFS Volume Preboot                 39.8 MB    disk1s2
   3:                APFS Volume Recovery                5.2 GB     disk1s3
   4:                APFS Volume VM                      20.5 KB    disk1s4

/dev/disk2 (internal, physical):
   #:                       TYPE NAME                    SIZE       IDENTIFIER
   0:     FDisk_partition_scheme                        *160.0 GB   disk2
   1:               Windows_NTFS System-reserviert       642.7 MB   disk2s1
   2:               Windows_NTFS Windows                 158.6 GB   disk2s2
   3:               Windows_NTFS                         775.9 MB   disk2s3

```

The mapping goes like this:

The disk on "Sata(0x`0`,0x0,0x0)" belongs to "/dev/disk`0`".

- "HD(`1`,GPT,98DD79E1-77B8-4493-8C6D-1EB22CD317D9,0x28,0x64000)" --> "disk0s`1`".
- "HD(`2`,GPT,C8C1F84F-2102-4F9F-AF56-E1329F1D18D1,0x64028,0x1BEC0460)" --> "disk0s`2`".

The disk on "Sata(0x`2`,0x0,0x0)" belongs to "/dev/disk`2`".

- "HD(`1`,MBR,0x58CA9BE8,0x800,0x1327A0)" --> "disk2s`1`".
- "HD(`2`,MBR,0x58CA9BE8,0x133000,0x127732EA)" --> "disk2s`2`".
- "HD(`3`,MBR,0x58CA9BE8,0x128A6800,0x172000)" --> "disk2s`3`".


-----

Mount the EFI partition:

```
diskutil mount EFI
```

Use the Clover Configurator to open "/Volumes/EFI/EFI/CLOVER/config.plist".

Click on the tab "GUI". On the right side you have a box, where it says "Hide Volume".

Click on the little "+" sign. Double click on the empty line. And paste one of the volume paths from above.
