// d3.arc()

let arc = d3.arc();

arc = arc({
  startAngle: 0,
  endAngle: Math.PI * 2,
  innerRadius: 50,
  outerRadius: 100,
});

// console.log(arc);

d3.select('svg')
  .append('g')
  .attr('id', 'path1')
  .selectAll('path')
  .data([arc])
  .join('path')
  .attr('d', (d) => d);

const data = [
  {
    startAngle: 0,
    endAngle: Math.PI / 2,
    innerRadius: 50,
    outerRadius: 100,
  },
  {
    startAngle: Math.PI / 2,
    endAngle: Math.PI,
    innerRadius: 50,
    outerRadius: 100,
  },
  {
    startAngle: Math.PI,
    endAngle: Math.PI * 1.5,
    innerRadius: 50,
    outerRadius: 100,
  },
  {
    startAngle: Math.PI * 1.5,
    endAngle: Math.PI * 2,
    innerRadius: 50,
    outerRadius: 100,
  },
];

const path = d3
  .select('svg')
  .append('g')
  .attr('id', 'path2')
  .attr('transform', 'translate(200, 200)');

path.append('circle').attr('cx', '0').attr('cy', '0').attr('r', '3');
// path
//   .selectAll('path')
//   .data(data)
//   .join('path')
//   .attr(
//     'd',
//     d3
//       .arc()
//       .innerRadius((d) => d.innerRadius)
//       .outerRadius((d) => d.outerRadius)
//       .startAngle((d) => d.startAngle)
//       .endAngle((d) => d.endAngle)
//       .padAngle(0.03)
//       .padRadius(5)
//   )
//   .style('fill', (d, i) => d3.schemeTableau10[i]);
path
  .selectAll('path')
  .data(data)
  .join('path')
  .attr(
    'd',
    d3
      .arc()
      .innerRadius(0)
      .outerRadius((d) => d.outerRadius)
      .startAngle((d) => d.startAngle)
      .endAngle((d) => d.endAngle)
  )
  .style('fill', (d, i) => d3.schemeTableau10[i]);

data.forEach((item) => {
  let [X, Y] = d3.arc().centroid({
    innerRadius: item.innerRadius,
    outerRadius: item.outerRadius,
    startAngle: item.startAngle,
    endAngle: item.endAngle,
  });

  path
    .append('text')
    .attr('x', X)
    .attr('y', Y)
    .text(Math.round(item.startAngle))
    .style('text-anchor', 'middle');
});
