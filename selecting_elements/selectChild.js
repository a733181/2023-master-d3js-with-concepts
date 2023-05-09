const firctCircle = d3.select('svg').selectChild();
console.log(firctCircle);

const secondCircle = d3.select('svg').selectChild(':nth-child(2)');
console.log(secondCircle);

const firstRect = d3.select('svg:nth-of-type(2)').selectChild();
console.log(firstRect);
const secondRect = d3.select('svg:nth-of-type(2)').selectChild(':nth-child(2)');
console.log(secondRect);

const firstChild = d3.selectAll('svg').selectChild();
console.log(firstChild);
const secondChild = d3.selectAll('svg').selectChild(':nth-child(2)');
console.log(secondChild);

d3.select('svg').selectChild(function (c, i, cn) {
  console.log({
    c,
    i,
    cn,
  });
});

d3.selectAll('svg').selectChild(function (c, i, cn) {
  console.log({
    c,
    i,
    cn,
  });
});
