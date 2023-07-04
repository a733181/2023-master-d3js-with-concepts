const h1SA = d3.selectAll('h1');
console.log(h1SA);

const h1S = d3.select('h1');
console.log(h1S);

const circleSA = d3.selectAll('circle');
console.log(circleSA);

const rectSA = d3.selectAll('rect');
console.log(rectSA);

const svgSA = d3.selectAll('svg');
console.log(svgSA);

const svgreaSA = d3.selectAll('.svgrea');
console.log(svgreaSA);

const svgreaCircleSA = svgreaSA.selectAll('circle');
console.log(svgreaCircleSA);

const svgreaCircleS = svgSA.select('circle');
console.log(svgreaCircleS);

for (const circle of svgreaCircleSA) {
  console.log(circle);
}

for (const circle of svgreaCircleS) {
  console.log(circle);
}

svgreaSA.selectAll(function (d, i, n) {
  console.log({
    d,
    i,
    n,
  });
  console.log(n[i], this);
});
