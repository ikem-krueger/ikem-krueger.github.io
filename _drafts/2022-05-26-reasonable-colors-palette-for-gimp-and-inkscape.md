---
layout: post
title: Reasonable Colors palette for Gimp and Inkscape
tags: gimp, inkscape, firefox, javascript
---

I recently stumbled upon [Reasonable Colors](https://reasonable.work/colors). And also recently I use [Inkscape](https://inkscape.org/) for vector graphics.

I know Inkscape supports custom color palettes, and I wanted the Reasonable Colors as an option.

So I wrote a little script for the Firefox console to scrape the colors from the website:

```javascript
let i = 0;

document.querySelectorAll(".color").forEach((n) => {
  const rgbColor = n.style.backgroundColor;
  
  let r, g, b;
  
  try {
    [, r, g, b] = rgbColor.match(/rgb\((\d+), (\d+), (\d+)\)/);
  } catch(e) {
    r = 246; g = 246; b = 246; // gray 1
  } 
  
  const colorName = n.parentNode.previousElementSibling.innerText;
  let j = (i % 6) + 1;
  
  console.log(`${r} ${g} ${b} ${colorName} ${j}`);
  
  i++;
});
```

After some tweaking, I got the result I wanted.

You can download the "Reasonable Colors.gpl" from here.

To import them into Inkscape, open "Edit > Settings > System" on the right side you find "User color palettes".

Click on "Open" and place the "Reasonable Colors.gpl" file there.

Restart Inkscape. When you now open Inkscape, click on hamburger menu in the right corner and choose "Reasonable Colors".
