---
layout: post
title: Git for Windows and the secret GNU Toolchain
tags: windows, git, gnu-toolchain
---

I wanted Git on my Windows system. I went to install [Git-Scm](https://git-scm.com/).

It seems that Git-Scm comes with a lot of the GNU tools:

![_config.yml]({{ site.baseurl }}/_posts/2017-10-9-git-for-windows-and-the-secret-gnu-toolchain/git-gnu-tools.png)

I wanted to access them on the console.

So I went to:

```
My Computer ‣ Properties ‣ Advanced ‣ Environment Variables
```

Edit the system environment variable `Path` and added `C:\Program Files\Git\usr\bin`.

And now I have access to all the little GNU tools on my Windows box. :)
