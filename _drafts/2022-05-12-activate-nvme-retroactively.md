---
layout: post
title: Activate NVME retroactively
tags: windows, nvme, registry
---

## Boot into Windows Recovery Environment

## Open command prompt

## Load registry hive

```reg load "HKLM\temp" "X:\Windows\System32\config\SYSTEM"```

Adjust the drive letter "X:" accordingly.

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

- [Registry offline bearbeiten mit regedit.exe oder PowerShell | WindowsPro](https://www.windowspro.de/wolfgang-sommergut/registry-offline-bearbeiten-regeditexe-powershell)
- [Startmode eines Dienstes über die Registry verändern - Tipps & Tricks](https://www.wintotal.de/tipp/startmode-eines-dienstes-ueber-die-registry-veraendern/)
- [[Windows 10] - NVMe nachträglich aktivieren - WinFuture-Forum.de](https://www.winfuture-forum.de/index.php?showtopic=220017)
- [Mit WinRE Registry offline editieren | WindowsPro](https://www.windowspro.de/andreas-kroschel/mit-winre-registry-offline-editieren)
- [windows 7 - Reg.exe Offline registry edit - Super User](https://superuser.com/questions/834864/reg-exe-offline-registry-edit/1625932#1625932)
