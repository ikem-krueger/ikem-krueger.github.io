---
layout: post
title: Undervolt the AMD E-350 CPU+GPU with AmdMsrTweaker-Lnx
tags: undervolt, amd, e350, brazos, zacate, cc by-nc-sa
---

Download AmdMsrTweaker-Lnx:

https://github.com/johkra/amdmsrtweaker-lnx

Load neccessary modules:

```
sudo modprobe msr

sudo modprobe cpuid
```

Get some infos:

```
sudo amdmsr
```

Undervolt:

```
sudo amdmsrt P0=16@1.2 P1=12.8@1.0 P2=8@0.8 NB_P0=0.85 NB_P1=0.8
```

P-State=Multiplicator@Voltage

P0, P1, P2 are the p-states of the CPU.

NB_P0, NB_P1 are the p-states of the northbridge.

Example: “P0=16@1.2”

P-state “0”, multiplicator “16”, voltage “1.2” volts.

You have to experiment with the values!

The values work on my pc, but that doesn’t mean they work on yours too!
