---
layout: post
title: CCache for faster compilation
tags: debian, ubuntu, gcc, make, ccache
---

I was working on Debian, modifying GPicView.

I have to edit the source and compiling them several times.

I know that it is a time costly process and I know that gcc, make, and some other tools create cache files, but throw them away after the binary is build.

So I looked for a way to keep the cached files, to speed up the building process. And that's where I found [ccache](https://ccache.samba.org/).

From the site:

> ccache is a compiler cache. It speeds up recompilation by caching previous compilations and detecting when the same compilation is being done again.

Under Debian you install ccache with:

```
sudo apt-get install ccache
```

But how do you use ccache for all compilations? Well, the question is answered [here](https://ccache.samba.org/manual/latest.html#_run_modes).

I decided for the "symlinks" method:

```
for tool in /usr/lib/ccache/*
do
  sudo ln -s /usr/bin/ccache /usr/local/bin/$(basename $tool)
done
```

And after installing I run "which gcc" to make sure that the correct link is being used.

```
which gcc
```

How do you check if ccache is used? Compile something and then run:

```
ccache -s
```
