---
layout: post
title: Fix there is no default mail client in Outlook
tags: windows, outlook, office 365
---

When you get this error message:

[TODO]

Do the following:

- open the registry editor
- navigate to the key `HKCR\Installer\Components\F1291BD604B860441AB89E60BDEE0F9C`
- right click on the key, open permissions
- add the group "Users", allow "read"
