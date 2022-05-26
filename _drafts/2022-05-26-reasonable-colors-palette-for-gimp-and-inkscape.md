---
layout: post
title: Reasonable Colors palette for Gimp and Inkscape
tags: gimp, inkscape, firefox, javascript
---

I use [Inkscape](https://inkscape.org/) for vector graphics and recently I found [Reasonable Colors](https://reasonable.work/colors).

I know Inkscape supports custom color palettes, and I wanted the Reasonable Colors as an option.

So I wrote a little script for the Firefox console to scrape the colors from the website:

```javascript
let i = 0;

document.querySelectorAll(".color").forEach((n) => {
  const rgbColor = n.style.backgroundColor;
  
  let r, g, b;
  
  try {
    [, r, g, b] = rgbColor.match(/rgb\((\d+), (\d+), (\d+)\)/);
  } catch(e if e instanceof TypeError) {
    r = 246; g = 246; b = 246; // gray 1
  } 
  
  const colorName = n.parentNode.previousElementSibling.innerText;
  let j = (i % 6) + 1;
  
  console.log(`${r} ${g} ${b} ${colorName} ${j}`);
  
  i++;
});
```

After some tweaking, I got the result I wanted. Click on "[Reasonable Colors.gpl](https://github.com/ikem-krueger/ikem-krueger.github.io/raw/master/_drafts/2022-05-26-reasonable-colors-palette-for-gimp-and-inkscape/Reasonable%20Colors.gpl)" to download the color palette.

To import them into Inkscape, follow this [tutorial](https://daviesmediadesign.com/how-to-import-palettes-into-inkscape/).
