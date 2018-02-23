---
layout: post
title: CCache for faster compilation
tags: ccache, gcc
---

Content `inline quote`.

```
sudo apt-get install ccache
```

```
for f in /usr/lib/ccache/*
do
  sudo ln -s /usr/bin/ccache /usr/local/bin/$f
done
```

```
ccache -s
```

