let rect = d3.select('rect');

let c1 = d3.color('rgb(134,55,67)');
console.log(c1);
rect.style('fill', c1);

c1 = d3.color('rgba(134,55,67,0.3)');
console.log(c1);
rect.style('fill', c1);

c1 = d3.color('rgb(14%,65%,7%)');
console.log(c1);
rect.style('fill', c1);

c1 = d3.color('rgba(14%,65%,7%,0.3)');
console.log(c1);
rect.style('fill', c1);

c1 = d3.color('#ffef2c');
console.log(c1);
rect.style('fill', c1);

c1 = d3.color('salmon');
console.log(c1);
rect.style('fill', c1);

c1.r = 34;
console.log(c1);
rect.style('fill', c1);

c1.opacity = 0.5;
console.log(c1);
rect.style('fill', c1);

rect.style('fill', c1.brighter(3));
rect.style('fill', c1.darker(5));

console.log(c1.displayable());
console.log(c1.formatHex());
console.log(c1.formatHsl());
console.log(c1.formatRgb());
console.log(c1.toString());

c1 = d3.rgb('navy');
console.log(c1);
rect.style('fill', c1);

c1 = d3.hsl('#bbceda');
console.log(c1);
rect.style('fill', c1);

c1 = d3.lab(44, -8, 151);
console.log(c1);
rect.style('fill', c1);

c1 = d3.gray(54);
console.log(c1);
rect.style('fill', c1);

c1 = d3.hcl(54, 54, 54);
console.log(c1);
rect.style('fill', c1);

c1 = d3.lch(100, 150, 289);
console.log(c1);
rect.style('fill', c1);

c1 = d3.cubehelix(154, 54, 254);
console.log(c1);
rect.style('fill', c1);
