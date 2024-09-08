---
layout: post
title: Fix virt-manager
tags: linux mint, kvm, qemu, virt-manager
---

On starting virt-manager, it asked me for a password and then silently failed.

Then I looked in the accourding desktop file and saw what was executed:

```
Exec=pkexec virt-manager
```

I run that from the terminal and got the error message:

```
ikem@ESPRIMO-D738:~$ pkexec virt-manager
ikem@ESPRIMO-D738:~$ 
(virt-manager:3531745): Gtk-WARNING **: 13:54:46.694: cannot open display: 
```

After a lot of research I found the solution.

Download the file `org.libvirt.virt-manager.policy` from [here](https://github.com/ikem-krueger/ikem-krueger.github.io/raw/master/_files/Virtual%20Machine%20Manager/org.libvirt.virt-manager.policy).

Move the file to `/usr/share/polkit-1/actions/`.

And run:

```
sudo systemctl restart polkit
```

The important parts of that file are:

```
      <annotate key="org.freedesktop.policykit.exec.path">/usr/bin/virt-manager</annotate>
      <annotate key="org.freedesktop.policykit.exec.allow_gui">true</annotate>
```
