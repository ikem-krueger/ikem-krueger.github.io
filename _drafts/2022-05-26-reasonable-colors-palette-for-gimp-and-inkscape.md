---
layout: post
title: Reasonable Colors palette for Gimp and Inkscape
tags: gimp, inkscape
---

I recently stumbled upon [Reasonable Colors](https://reasonable.work/colors).

And also recently I use Inkscape for vector graphics.

so I wrote a little script:

```javascript
let i = 0;

document.querySelectorAll(".color").forEach((n) => {
	const rgbColor = n.style.backgroundColor;
  
  let r, g, b;
  
  try {
  	[, r, g, b] = rgbColor.match(/rgb\((\d+), (\d+), (\d+)\)/);
  } catch(e) {
   	r = 246; g = 246; b = 246;
    
    console.error(`No rgbColor: ${rgbColor}`);
  } 
  
	const colorName = n.parentNode.previousElementSibling.innerText;
  let j = (i % 6) + 1;
  
  console.log(`${r} ${g} ${b} ${colorName} ${j}`);
  
  i++;
});
```

The result is Reasonable Colors.gpl.

To import them into Inkscape, open Edit > Settings > ...
