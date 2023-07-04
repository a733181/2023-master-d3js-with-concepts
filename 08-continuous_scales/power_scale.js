// d3.scalePow() = d3.scaleLinear()
let powerScale = d3.scalePow();
let scaleLinear = d3.scaleLinear();

console.log(powerScale(4), scaleLinear(4));

// exponent
powerScale.exponent(2);

console.log(powerScale(4), scaleLinear(4));

// domain() and range()
powerScale.domain([2, 4]).range([9, 10]);
scaleLinear.domain([2, 4]).range([9, 10]);

console.log(powerScale(2.1), scaleLinear(2.1));

console.log(powerScale.invert(9.1), scaleLinear.invert(9.1));

powerScale.rangeRound([11, 12]);
console.log(powerScale(3));

// clamp
console.log(powerScale.clamp(), scaleLinear.clamp());

// unknown
powerScale.unknown('NO POWER');
console.log(powerScale.unknown(), scaleLinear.unknown());

// interpolate(interpolate_value)
let color1 = d3
  .scalePow()
  .exponent(1.5)
  .domain([10, 20, 30])
  .range(['pink', 'green', 'yellow'])
  .interpolate(d3.interpolateHcl);
let color2 = d3
  .scaleLinear()
  .domain([10, 20, 30])
  .range(['pink', 'green', 'yellow'])
  .interpolate(d3.interpolateHcl);

console.log(color1(15), color2(15));

// ticks(county(optional))
console.log(powerScale.ticks());

// tickFormat(county(optional), specifier(optional))
let xTicks = powerScale.ticks(5);
let xTickFormat = powerScale.tickFormat(5, '%');

console.log(xTicks.map(xTickFormat));

// nice()
let powerScale1 = d3.scalePow().domain([2.345, 4.163]).range([2, 5]);
powerScale1.nice();
console.log(powerScale1.ticks());

// copy()
let powerScale2 = powerScale1.copy();
let radius = [4, 5, 6];
let radPower = d3.scalePow().exponent(2);

d3.select('svg')
  .attr('width', 300)
  .attr('height', 300)
  .selectAll('circle')
  .data(radius)
  .join('circle')
  .attr('cx', 150)
  .attr('cy', 150)
  .attr('r', (d) => radPower(d))
  .style('fill-opacity', 0.5);
