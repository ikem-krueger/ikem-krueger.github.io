---
layout: post
title: FRITZ!Box NAS Linux Mint
tags: windows 10, windows, smb, nas
---
Open "/etc/samba/smb.conf".

Under "[global]" add the lines:

client min protocol = NT1
server min protocol = NT1

Caja

File > Connect to Server...

Screenshot

FRITZ!Box

fritz.box

System > FRITZ!Box-Benutzer
