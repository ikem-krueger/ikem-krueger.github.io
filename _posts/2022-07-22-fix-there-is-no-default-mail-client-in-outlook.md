---
layout: post
title: Fix there is no default mail client in Outlook
tags: windows, outlook, office 365
---

When you get this error message:

![Microsoft Office Outlook Error](https://raw.githubusercontent.com/ikem-krueger/ikem-krueger.github.io/master/images/Microsoft%20Office%20Outlook.png)

Do the following:

- open the registry editor
- navigate to the key `HKCR\Installer\Components\F1291BD604B860441AB89E60BDEE0F9C`
- right click on the key, open permissions
- add the group "Users", allow "read", click "Ok"

And when you now open Outlook, the error is gone.
