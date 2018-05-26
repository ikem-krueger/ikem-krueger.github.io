---
layout: post
title: Setup sudo and disable root on your iPhone
tags: apple, iphone, cydia, sudo, cc by-nc-sa
---

![alt text](http://imgs.xkcd.com/comics/sandwich.png "XKCD Comic - Make Me a Sandwich!")

Beforehand you need to Jailbreak your iPhone!

- iOS 7.0.x use [evasi0n](http://evasi0n.com/)
- iOS 7.1.x use [Pangu 7](http://en.7.pangu.io/)
- iOS 8.0/8.1 use [Pangu 8](http://en.pangu.io/)
- iOS 8.1.3-8.3 use [TaiG](http://www.taig.com/en/)

Open Cydia and install “APT 0.7 Strict”, “Sudo”, “nano”, “MTerminal” and “SSH Connect”.

Go to “Settings”, “SSH” and turn it off.

(When we’re done you can turn it on again.)

Now we can setup sudo:

Open “Terminal”.

Login as root:

```
su
```

Enter password.

On default the “mobile” and “root” password is set to “alpine”.

Enable the sudo group “wheel”:

Open “/etc/sudoers”:

```
nano /etc/sudoers
```

To navigate left/right up/down tap the respective edge.

Scroll down to the line:

#%wheel
ALL=(ALL) ALL

Remove the “#” from the beginning of the line.

Safe file.

(Hold the center of the screen and hit “x”. Then “y” and “Return”.)

Add the user “mobile” to the sudo group “wheel”:

Open “/etc/group”:

```
nano /etc/group 
```

Scroll down to the line:

wheel:*:0:root

Add “,mobile” to the end of the line.

Safe file.

Change password for “mobile”:

```
passwd mobile 
```

Disable root account:

Open “/etc/master.passwd”:

```
nano /etc/master.passwd 
```

Scroll down to the line:

root:evGadcfc02lQR:0:0::0:0:System Administrator:/var/root:/bin/sh

Add a “!” to the second field.

Make sure that “root” and “System Administrator” are on the same line!

Or else the file get corrupted and you need to factory reset the iPhone!

Safe file.

Logout as root:

```
exit 
```

And you’re done.
