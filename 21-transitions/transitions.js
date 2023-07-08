const SVG_WIDTH = document.querySelector('svg').clientWidth;
const SVG_HEIGHT = document.querySelector('svg').clientHeight;

const rectData = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130];

let rect = d3
  .select('svg')
  .selectAll('rect')
  .data(rectData)
  .join('rect')
  .attr('x', (d, i) => (i * SVG_WIDTH) / rectData.length)
  .attr('y', (d, i) => SVG_HEIGHT - d * 3)
  .attr('width', SVG_WIDTH / rectData.length)
  .attr('rx', 5)
  .attr('ry', 5);

// create a transition
// let x = rect
//   .transition()
//   .duration(1000)
//   .attr('height', (d) => d * 3)
//   .transition()
//   .duration(1000)
//   .attr('fill', 'blue');

// let x = rect
//   .transition()
//   .duration(1000)
//   .attr('height', (d) => d * 3)
//   .transition()
//   .delay(1000)
//   .duration(1000)
//   .attr('fill', 'blue');

// let x = rect
//   .transition()
//   .ease(d3.easeBounce)
//   .duration(1000)
//   .attr('height', (d) => d * 3)
//   .transition()
//   .delay(1000)
//   .ease(d3.easeBounce)
//   .duration(1000)
//   .attr('fill', 'blue');

// Process B. d3.transition()

// let t1 = d3.transition();
// rect
//   .transition(t1)
//   .attr('height', (d) => d * 3)
//   .transition(t1)
//   .attr('fill', 'crimson');

// let t1 = d3.transition().delay(1000).ease(d3.easeBounce).duration(1000);
// rect
//   .transition(t1)
//   .attr('height', (d) => d * 3)
//   .transition(t1)
//   .attr('fill', 'crimson');

rect.each((d, i, n) => {
  d3.select(n[i])
    .transition()
    .delay(i * d)
    .ease(d3.easeBounce)
    .duration(i * d)
    .attr('height', (d) => d * 3)
    .transition()
    .delay(i * d)
    .ease(d3.easeBounce)
    .duration(i * d)
    .style('fill', 'slategrey');
});
