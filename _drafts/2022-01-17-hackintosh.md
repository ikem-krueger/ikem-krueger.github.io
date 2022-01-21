---
layout: post
title: Asus Vivobook Hackintosh
tags: vivobook, mac os x, hackintosh, clover, olarila
---

## Clover 5122 installieren und einrichten

- "Clover-5122-X64.iso.7z" herunterladen -> https://github.com/CloverHackyColor/CloverBootloader/releases/tag/5122
- Mit 7-Zip "Clover-5122-X64.iso.7z" entpacken
- Mit MiniTool Partition Wizard Partition "SYSTEM" Laufwerksbuchstaben "D:" zuweisen
- Alternativ mit CMD "SYSTEM" Laufwerksbuchstaben "D:" zuweisen -> https://manjaro.site/how-to-mount-macos-efi-partition-from-windows-10/
- Explorer++ mit Administratorrechten starten
- In Explorer++ mit 7-Zip "Clover-5122-X64.iso" öffnen und Ordner "CLOVER" nach "D:\EFI" entpacken
- Mit EasyUEFI Booteintrag für Clover anlegen -> https://www.youtube.com/watch?v=7fdv5BEg-ZE
- Alternativ im UEFI Setup Booteintrag anlegen -> https://www.thomas-krenn.com/en/wiki/Restoring_UEFI_boot_entry_via_motherboard_replacement_or_BIOS_update 
- Clover Backup öffnen und "ACPI", "drivers", "kexts", "themes", "config.plist" nach "D:\EFI\CLOVER" entpacken

## USB-Stick erstellen

- "Olarila Mojave 10.14.6.raw" herunterladen -> https://www.olarila.com/topic/6278-hackintosh-and-macintosh-olarila-vanilla-images-macos/
- Mit 7-Zip "Olarila Mojave 10.14.6.raw" entpacken
- Mit Explorer "1.disk image.hfsx" umbenennen zu "1.disk image.hfs"
- Clover Boot Disk Creator benutzen um "0.EFI System Partition.img" und "1.disk image.hfs" auf USB-Stick zu schreiben

## Installation von Mac OS X Mojave

- Rechner neustarten
- Im Clover Bootmenü verharren
- USB-Stick am USB 2.0 Anschluss anschliessen
- Menüpunkt "Install MacOs" auswählen
- USB-Maus anschliessen
- Nach erstem Neustart, USB-Stick abziehen
- Im Bootmenü Menüpunkt "Mac OS Mojave" auswählen

## Post Install

- HeliPort installieren
