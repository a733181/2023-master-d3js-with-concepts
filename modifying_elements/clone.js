// select.clone(deep)

const svg = d3.select('svg');

let svgClone = svg.clone();
console.log(svgClone);

svgClone = svg.clone(true);
console.log(svgClone);
