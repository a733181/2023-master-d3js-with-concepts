const revenues = [1857, 2169, 1615, 1511, 1434];

const SVG_WIDTH = d3.select('svg').node().clientWidth;
const SVG_HEIGHT = d3.select('svg').node().clientHeight;

const growthFactor = d3
  .scaleQuantize()
  .domain([Math.min(...revenues), Math.max(...revenues)])
  .range(['#f2f0f7', '#cbc9e2', '#9e9ac8']);

d3.select('svg')
  .selectAll('rect')
  .data(revenues)
  .join('rect')
  .attr('height', (d) => d / 5)
  .attr('width', SVG_WIDTH / revenues.length - 10)
  .attr('x', (d, i) => (i * SVG_WIDTH) / revenues.length)
  .attr('y', (d) => SVG_HEIGHT - d / 5 - 25)
  .attr('fill', (d) => growthFactor(d))
  .attr('rx', 5)
  .attr('ry', 5);

d3.select('svg')
  .selectAll('text')
  .data(revenues)
  .join('text')
  .text((d) => d)
  .attr('x', (d, i) => (i * SVG_WIDTH) / revenues.length + 40)
  .attr('y', SVG_HEIGHT)
  // .attr('text-anchor', 'start')
  .attr('fill', 'darkgray')
  .attr('font-weight', '600');
