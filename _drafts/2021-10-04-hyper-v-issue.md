---
layout: post
title: Fix Hyper-V error 0x80070003
tags: windows, hyper-v
---

I was creating a new virtual machine, and was getting the error "0x80070003", "the vm configuration ... is no longer accessible".

After some research and experimenting, I found a working solution:

Open the Hyper-V-Manager, right click on the PC and then on "Stop Service".

Delete "%systemdrive%\ProgramData\Microsoft\Windows\Hyper-V\Virtual Machines Cache".

Go back to the Hyper-V-Manager, right click on the PC and then on "Start Service".

Done.
