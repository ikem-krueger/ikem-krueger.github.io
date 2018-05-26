---
layout: post
title: Fix Firefox plugin check reports the wrong flash version
tags: firefox, adobe flash player, windows, windows 10
---

I had Firefox running, made a plugin check, and it suggested me to update the Adobe Flash Player.

I updated the Adobe Flash Player, opened Firefox, run the check again, and still it reported an outdated version.

Then I investigated. And someone in the [Mozilla Support](https://support.mozilla.org/de/questions/690585#answer-16934) forum suggested to go to your profile directory and remove the “pluginreg.dat”.

I did that too. Restarted the browser. Run the plugin check again. No change.

I was curious, if I could open the “pluginreg.dat” and if so, what was in there. So I opened it with a text editor. And to my surprise, it was a simple text file.

I searched for “flash” and found a path:

Content `inline quote`.

```
C:\Windows\SysWOW64\Macromed\Flash
```

I opened the Windows Explorer, opened the path and what did I saw? Two versions of flash:

```
FlashPlayerPlugin_20_0_0_306.exe
NPSWF32_20_0_0_306.dll
```

```
FlashPlayerPlugin_19_0_0_245.exe
NPSWF32_19_0_0_245.dll
```
