const firstSvg = d3.select('svg').selectChildren();
console.log(firstSvg);

const secondSvg = d3.select('svg:nth-of-type(2)').selectChildren();
console.log(secondSvg);

const allSvg = d3.selectAll('svg').selectChildren();
console.log(allSvg);

d3.select('svg').selectChildren(function (d, i, cn) {
  console.log({ d, i, cn });
});

d3.selectAll('svg').selectChildren(function (d, i, cn) {
  console.log({ d, i, cn });
});
