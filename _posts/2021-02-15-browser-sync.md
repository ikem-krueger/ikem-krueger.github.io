---
layout: post
title: Edit a web page with a live updating web server
tags: nodejs, npm, browser-sync
---

When you are a web developer, you often edit a web page, load them in your browser and refresh the page. Several times...

I know there are IDEs out there, which provide a live updating web server, but for my taste, they are to heavy.

I prefer a simple text editor like [Notepad++](https://notepad-plus-plus.org/downloads/), but I also wanted the comfort of a live updating web server.

And so I searched the web. And finally I found [browser-sync](https://browsersync.io/).

It provides a live updating web server, without the overhead of a full blown IDE.

If you wanna use them, you have to:

1. download and install nodejs
2. install browser-sync
3. run browser-sync

## 1. Download and install nodejs:

Download [nodejs](https://nodejs.org/en/download/) and install it.

## 2. Install browser-sync:

Open your terminal and run:

```
npm install --global browser-sync
```

## 3. Use browser-sync:

Change in the directory where your `index.html` file lies.

And then run:

```
browser-sync start --server --files '*.html, *.css, *.js'
```

This opens your default web browser and opens your `index.html`.

Now edit the source code of your page, and see them instantly updated in your web browser.

Happy coding! :)
