---
layout: post
title: Undervolt the AMD E-350 CPU with Undervolt
tags: undervolt, amd, e350, brazos, zacate, cc by-nc-sa
---

Download Undervolt:

<https://sourceforge.net/projects/undervolt/>

Load neccessary modules:

```
sudo modprobe msr
```

Get some infos:

```
sudo undervolt -r
```

Undervolt:

```
sudo undervolt -p 0:0x1C,2.00 -p 1:0x2C,2.50 -p 2:0x3C,4.00
```

P-State:Voltage_ID,Divider

Example: “0:0x1C,2.00”

P-state “0”, voltage id “0x1C”, divider “2.00”.

You have to experiment with the values!

The values work on my pc, but that doesn’t mean they work on yours too!
