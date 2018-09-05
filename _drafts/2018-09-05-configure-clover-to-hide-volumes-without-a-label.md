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

You can see I have two disks in it "Sata(0x0,0x0,0x0)" and "Sata(0x2,0x0,0x0)".

My first disk "Sata(0x0,0x0,0x0)" has two volumes (partitions):

```
HD(1,GPT,98DD79E1-77B8-4493-8C6D-1EB22CD317D9,0x28,0x64000)
HD(2,GPT,C8C1F84F-2102-4F9F-AF56-E1329F1D18D1,0x64028,0x1BEC0460)
```

My second disk "Sata(0x2,0x0,0x0)" has three volumes (partitions):

```
HD(1,MBR,0x58CA9BE8,0x800,0x1327A0)
HD(2,MBR,0x58CA9BE8,0x133000,0x127732EA)
HD(3,MBR,0x58CA9BE8,0x128A6800,0x172000)
```

Mount the EFI partition:

```
diskutil mount EFI
```

Use the Clover Configurator to open "/Volumes/EFI/EFI/CLOVER/config.plist".

Click on the tab "GUI". On the right side you have a box, where it says "Hide Volume".

Click on the little "+" sign. Double click on the empty line. And paste one of the volume paths from above.
