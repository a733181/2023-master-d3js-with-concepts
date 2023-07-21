// d3.lineRadial()

const lineRadial1 = d3.lineRadial();
console.log(lineRadial1);

const data1 = [
  [0, 50],
  [35, 100],
  [80, 150],
  [150, 110],
  [210, 170],
  [270, 90],
];

const lineRadialData = lineRadial1(data1);
console.log(lineRadialData);

d3.select('svg')
  .append('g')
  .attr('id', 'chart1')
  .selectAll('path')
  .data([lineRadialData])
  .join('path')
  .attr('d', (d) => d)
  .style('fill', 'none')
  .style('stroke', 'black')
  .style('stroke-width', '2px');

const data2 = [
  [0, 50],
  [30, 100],
  [60, 150],
  [90, 80],
  [120, 40],
  [150, 110],
  [180, 70],
  [210, 170],
  [240, 120],
  [270, 90],
  [300, 150],
  [330, 200],
  [360, 50],
];

d3.select('svg')
  .append('g')
  .attr('id', 'chart2')
  .attr('transform', 'translate(200,200)')
  .selectAll('path')
  .data([data2])
  .join('path')
  .attr(
    'd',
    d3
      .lineRadial()
      .angle((d) => d[0] * (Math.PI / 180))
      .curve(d3.curveCardinal)
    // .defined((d, i, n) => console.log(d, i, n))
  )
  .style('fill', 'none')
  .style('stroke', 'orange')
  .style('stroke-width', '2px');

d3.select('#chart2')
  .append('circle')
  .attr('cx', '0')
  .attr('cy', '0')
  .attr('r', '5');
