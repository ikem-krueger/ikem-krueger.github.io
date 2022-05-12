---
layout: post
title: Activate NVME retroactively
tags: windows, nvme, registry
---

## Boot into Windows Recovery Environment

[TODO]

## Load registry hive

```reg load "HKLM\temp" "X:\Windows\System32\config\SYSTEM"```

Adjust the drive letter "X:" accourdingly.

## Change service start type

```reg add "HKLM\temp\ControlSet001\Services\stornvme" /v "Start" /t REG_DWORD /d 0```

The service start type can be one of:

- 0 Boot
- 1 System
- 2 Automatic
- 3 Manual
- 4 Disabled

The default service start type for `stornvme` is "".

## Delete "StartOverride"

```reg del "HKLM\temp\ControlSet001\Services\stornvme\StartOverride"```

## Unload registry hive

```reg unload "HKLM\temp"```

## Restart system

```shutdown /r /f /t:0```

## Sources

- Registry offline bearbeiten mit regedit.exe oder PowerShell | WindowsPro
- Startmode eines Dienstes über die Registry verändern - Tipps & Tricks
- [Windows 10] - NVMe nachträglich aktivieren - WinFuture-Forum.de
- Mit WinRE Registry offline editieren
- Reg.exe Offline registry edit
