// d3.area(x(optional),y0(optional),y1(optional))

const area = d3.area();

let data1 = [
  [0, 100],
  [200, 130],
  [240, 80],
];

const areaPathData = area(data1);

d3.select('svg')
  .append('g')
  .attr('id', 'group1')
  .selectAll('path')
  .data([areaPathData])
  .join('path')
  .attr('d', (d) => d)
  .attr('fill', 'none')
  .attr('stroke', 'orange');

d3.select('svg')
  .append('g')
  .attr('id', 'group2')
  .selectAll('path')
  .data([data1])
  .join('path')
  .attr(
    'd',
    d3.area(
      (d) => d[0] + 10,
      (d) => 10,
      (d) => d[1] + 10
    )
  )
  .attr('fill', 'none')
  .attr('stroke', 'gray');

d3.select('svg')
  .append('g')
  .attr('id', 'group3')
  .selectAll('path')
  .data([data1])
  .join('path')
  .attr(
    'd',
    d3
      .area()
      .x0((d) => d[0] + 10)
      .x1((d) => d[0] + 10)
      .y0(10)
      .y1((d) => d[1] + 10)
  )
  .attr('fill', 'none')
  .attr('stroke', 'blue');

d3.select('svg')
  .append('g')
  .attr('id', 'group4')
  .attr('transform', 'translate(0,400)')
  .selectAll('path')
  .data([data1])
  .join('path')
  .attr('id', 'path2')
  .attr(
    'd',
    d3.area(
      (d) => d[0] + 10,
      (d) => -10,
      (d) => -(d[1] + 10)
    )
  )
  .style('stroke', 'green')
  .style('fill', 'none');
