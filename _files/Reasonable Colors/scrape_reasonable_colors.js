String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

let i = 0;

document.querySelectorAll(".color").forEach((n) => {
  const rgbColor = n.style.backgroundColor;
  
  let r, g, b;
  
  try {
    [, r, g, b] = rgbColor.match(/rgb\((\d+), (\d+), (\d+)\)/);
  } catch(e) {
    r = 246; g = 246; b = 246; // Gray Shade 1
  } 
  
  const colorName = n.parentNode.previousElementSibling.innerText;
  const j = (i % 6) + 1;
  
  console.log(`${r} ${g} ${b} ${colorName.capitalize()} Shade ${j}`);
  
  i++;
});
