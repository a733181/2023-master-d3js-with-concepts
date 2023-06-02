// select.node()
// select.nodes()

console.log(d3.select('svg'));

console.log(d3.select('svg').node());

console.log(d3.select('svg').selectAll('rect'));

console.log(d3.select('svg').selectAll('rect').node());

console.log(d3.select('svg').selectAll('rect').nodes());
