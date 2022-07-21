---
layout: post
title: Reset Thunderbird To Default Settings
tags: thunderbird
---

If you like to reset Thunderbird to the default settings, close Thunderbird, open a command prompt and type:

```
del %AppData%\Thunderbird\Profiles\*
del %AppData%\Thunderbird\profiles.ini
```

When you now open Thunderbird, you will be greeted with the "add account" dialog, like on the first run.
