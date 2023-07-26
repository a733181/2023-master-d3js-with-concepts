const data = [
  [0, 30],
  [40, 90],
  [140, 120],
  [250, 70],
];

// const line = d3.line().curve(d3.curveLinear);
// const line = d3.line().curve(d3.curveLinearClosed);
// const line = d3.line().curve(d3.curveNatural);
const line = d3.line().curve(d3.curveStep);
const linePathData = line(data);

d3.select('#chart1')
  .selectAll('path')
  .data([linePathData])
  .join('path')
  .attr('d', (d) => d)
  .style('stroke', 'tomato')
  .style('fill', 'none')
  .style('stroke-width', '2px');

// const area = d3.area().curve(d3.curveLinear);
// const area = d3.area().curve(d3.curveLinearClosed);
// const area = d3.area().curve(d3.curveNatural);
const area = d3.area().curve(d3.curveStep);
const areaPathData = area(data);

d3.select('#chart2')
  .selectAll('path')
  .data([areaPathData])
  .join('path')
  .attr('d', (d) => d)
  .style('fill', 'tomato');
