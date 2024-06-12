---
layout: post
title: Fix Logitech C270HD image orientation
tags: windows, webcam
---

For video conferences I bought the Logitech C270 HD webcam. The setup is really easy, plug-and-play. Plug the camera into a free USB 2.0 port, and Windows 10 recognize them immediatly. A short check with the Windows 10 "Camera" app showed, the picture quality is totally fine and the framerate is fast enough.

But one thing bothered me. The image is horizontally flipped. My first thought was, change that in the Windows settings. Well, there were no such settings. My second thought was, maybe Logitech has a tool to change that. Yes, they have a tool `Logitech Camera Settings`, no, there is no setting to flip the image.

Then I searched the internet even more, and found out, that Logitech had another software `Logitech WebCam Software`. And screenshots showed, exactly the setting I wanted:

![Screenshot](https://raw.githubusercontent.com/ikem-krueger/ikem-krueger.github.io/master/images/webcam.png)

Logitech abonded the software, but ~~Softpedia~~[FileHippo](https://filehippo.de/download_logitech_webcam_software/) has them.

What you get is the file `lws280.exe`. If you run that, a setup dialog pops up, and if you're not careful, a lot of garbage is installed. So don't do that. Just extract the file with 7-Zip, go into the `Drivers` folder and install `LWS_Driver_Installer_x64.exe` or `LWS_Driver_Installer_x86.exe`, depending on your system.

And now the fun part, this driver comes with a tool, the `LogiDPPApp.exe`. And that tool is just the camera settings in the screenshot and nothing else. Jackpot.

## TL;DR

1. Download the `Logitech WebCam Software` from ~~Softpedia~~[FileHippo](https://filehippo.de/download_logitech_webcam_software/)
2. Extract the file with 7-Zip
3. Install the driver accordingly to your system
4. Run `%CommonProgramFiles%\logishrd\DriverStore\PRO564\LogiDPPApp.exe`
5. Adjust the settings to your likings
