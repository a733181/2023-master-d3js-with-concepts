let point1 = [0, 10];
let point2 = [400, 10];

d3.select('svg')
  .append('line')
  .attr('x1', point1[0])
  .attr('y1', point1[1])
  .attr('x2', point2[0])
  .attr('y2', point2[1])
  .attr('stroke', 'black');

d3.select('svg')
  .append('g')
  .attr('id', 'line1')
  .selectAll('line')
  .data([point1, point2])
  .join('line');

let linePoints = d3.merge([point1, point2]);
console.log(linePoints);

d3.select('svg #line1')
  .selectAll('line')
  .data([linePoints])
  .join('line')
  .attr('x1', (d) => d[0])
  .attr('y1', (d) => d[1])
  .attr('x2', (d) => d[2])
  .attr('y2', (d) => d[3])
  .attr('stroke', 'blue');

linePoints = [
  [0, 40, 200, 40],
  [200, 40, 400, 40],
];

d3.select('svg')
  .append('g')
  .attr('id', 'line2')
  .selectAll('line')
  .data(linePoints)
  .join('line')
  .attr('x1', (d) => d[0])
  .attr('y1', (d) => d[1])
  .attr('x2', (d) => d[2])
  .attr('y2', (d) => d[3])
  .style('stroke', 'orange');

let points = [
  [0, 80],
  [100, 100],
  [200, 60],
  [300, 80],
  [400, 70],
];

let modifedPoints = d3.pairs(points);
console.log(modifedPoints);

d3.select('svg')
  .append('g')
  .attr('id', 'line3')
  .selectAll('line')
  .data(modifedPoints)
  .join('line')
  .attr('x1', (d) => d[0][0])
  .attr('y1', (d) => d[0][1])
  .attr('x2', (d) => d[1][0])
  .attr('y2', (d) => d[1][1])
  .style('stroke', (d, i) => d3.schemeCategory10[i])
  .style('stroke-width', 5);

// d3.line(x(optional),y(optional))

let data1 = [50, 100, 150, 200];

d3.select('svg')
  .append('g')
  .attr('id', 'path1')
  .selectAll('path')
  .data([data1])
  .join('path')
  .attr(
    'd',
    d3.line(
      (d) => d,
      (d) => d
    )
  )
  .style('stroke', 'red');

let pathPoints = [
  [50, 100, 150, 200],
  [40, 80, 120, 160],
];

d3.select('svg')
  .append('g')
  .attr('id', 'path2')
  .selectAll('path')
  .data([pathPoints[0]])
  .join('path')
  .attr(
    'd',
    d3.line(
      (d) => d,
      (d) => d
    )
  )
  .style('stroke', 'gray');

d3.select('svg')
  .append('g')
  .attr('id', 'path3')
  .selectAll('path')
  .data([pathPoints[1]])
  .join('path')
  .attr(
    'd',
    d3.line(
      (d) => d,
      (d) => d
    )
  )
  .style('stroke', 'brown');

let data2 = [
  [0, 200],
  [70, 150],
  [190, 220],
  [230, 320],
  [320, 200],
  [480, 300],
];

d3.select('svg')
  .append('g')
  .attr('id', 'path4')
  .selectAll('path')
  .data([data2])
  .join('path')
  .attr(
    'd',
    d3.line(
      (d) => d[0],
      (d) => d[1]
    )
  )
  .style('stroke', 'green')
  .style('fill', 'none');

let linegenerator = d3.line();

let linePathData = linegenerator(data2);

d3.select('svg')
  .append('g')
  .attr('id', 'path5')
  .selectAll('path')
  .data([linePathData])
  .join('path')
  .attr('d', (d) => d)
  .style('stroke', 'steelblue')
  .style('stroke-width', 5)
  .style('fill', 'none');

// .x() and .y() methods
linegenerator.x((d) => d[0] + 10).y((d) => d[1] + 5);
linePathData = linegenerator(data2);

d3.select('svg')
  .append('g')
  .attr('id', 'path5')
  .selectAll('path')
  .data([linePathData])
  .join('path')
  .attr('d', (d) => d)
  .style('stroke', 'skyblue')
  .style('stroke-width', 5)
  .style('fill', 'none');

// .defined(defined(optional))
linegenerator.defined((d) => d[0] > 50);
linePathData = linegenerator(data2);

d3.select('svg')
  .append('g')
  .attr('id', 'path5')
  .selectAll('path')
  .data([linePathData])
  .join('path')
  .attr('d', (d) => d)
  .style('stroke', 'seagreen')
  .style('stroke-width', 5)
  .style('fill', 'none');

// .curve(curve(optional))
linegenerator.curve(d3.curveBasis);
linePathData = linegenerator(data2);

d3.select('svg')
  .append('g')
  .attr('id', 'path5')
  .selectAll('path')
  .data([linePathData])
  .join('path')
  .attr('d', (d) => d)
  .style('stroke', 'purple')
  .style('stroke-width', 5)
  .style('fill', 'none');
