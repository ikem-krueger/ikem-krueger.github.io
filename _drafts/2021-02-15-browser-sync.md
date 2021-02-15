---
layout: post
title: Here comes the title
tags: tag
---

When you are a web developer, it's often a hazzle to ... and repeat that cycle.

I know there are IDEs out there, which provide a live web server, but for my taste, there are to heavy.

I prefer a simple text editor like Notepad++. But I also wanted the comfort of a live updating web server.

And so I searched the web and finally, I found browser-sync.

Browser-sync provides a web server which watches your files for changes which triggers a page reload.

Download and install [nodejs](https://nodejs.org/en/download/).

Install browser-sync:

```
npm install --global browser-sync
```

Use browser-sync:

```
browser-sync start --server --server --files '*.html, *.css, *.js'
```
