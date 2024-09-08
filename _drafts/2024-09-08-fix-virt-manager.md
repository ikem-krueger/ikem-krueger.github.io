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

These are the changes I had to make:

```
--- /usr/share/polkit-1/actions/org.libvirt.unix.policy.old	2024-09-08 13:37:43.414264026 +0200
+++ /usr/share/polkit-1/actions/org.libvirt.unix.policy	2024-09-08 02:36:40.737352220 +0200
@@ -47,5 +47,7 @@
         <allow_inactive>auth_admin_keep</allow_inactive>
         <allow_active>auth_admin_keep</allow_active>
       </defaults>
+      <annotate key="org.freedesktop.policykit.exec.path">/usr/bin/virt-manager</annotate>
+      <annotate key="org.freedesktop.policykit.exec.allow_gui">true</annotate>
     </action>
 </policyconfig>
```

Download the modified `org.libvirt.unix.policy` from [here](https://github.com/ikem-krueger/ikem-krueger.github.io/raw/master/_files/Virtual%20Machine%20Manager/org.libvirt.unix.policy).

Move the file to `/usr/share/polkit-1/actions/`.

And run:

```
sudo systemctl restart polkit
```
