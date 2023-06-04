d3.select('svg').attr('width', 300).attr('height', 300);

d3.select('svg')
  .selectAll('circle')
  .data([20, 20, 20])
  .join('circle')
  .attr('cx', (d, i) => d + i * 40)
  .attr('cy', 50)
  .attr('r', (d) => d);

const circles = d3.select('svg').selectAll('circle');
console.log(circles);

const circlesArr = [...circles];

console.log(circlesArr);
