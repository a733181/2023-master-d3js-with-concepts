// d3.scaleLinear()

let xScale = d3.scaleLinear([0, 1], [0, 1]);
// [0,100] 輸入範圍
// [0,25] 輸出範圍
xScale = d3.scaleLinear([0, 100], [0, 25]);
console.log(xScale(60));

// .domain() 輸入範圍
// .range() 輸出範圍

xScale = d3.scaleLinear().domain([20, 80]).range([30, 50]);
console.log(xScale(51));

const svgWidth = d3.select('svg').attr('width');

d3.select('svg')
  .selectAll('rect')
  .data([75])
  .join('rect')
  .attr('width', (d) => xScale(d))
  .attr('height', 20)
  .attr('x', 0)
  .attr('y', 10);

xScale = d3.scaleLinear().domain([0, 80]).range([0, svgWidth]);

d3.select('svg')
  .selectAll('rect')
  .data([75])
  .join('rect')
  .attr('width', (d) => xScale(d))
  .attr('height', 20)
  .attr('x', 0)
  .attr('y', 10);

xScale = d3.scaleLinear().domain([0, 80, 140]).range([0, 150, svgWidth]);

d3.select('svg')
  .selectAll('rect')
  .data([140])
  .join('rect')
  .attr('width', (d) => xScale(d))
  .attr('height', 20)
  .attr('x', 0)
  .attr('y', 10);

let color = d3
  .scaleLinear()
  .domain([20, 80, 140])
  .range(['red', 'green', 'blue']);

d3.select('svg')
  .selectAll('rect')
  .data([40])
  .join('rect')
  .attr('width', (d) => xScale(d))
  .attr('height', 20)
  .attr('x', 0)
  .attr('y', 10)
  .attr('fill', (d) => color(d));

// .invert() 反轉輸入與輸出
console.log(xScale.invert(300));
console.log(xScale.invert(0));
console.log(xScale.invert(150));
console.log(xScale.invert(134.678));

// .rangeRound() 四捨五入
let xScale1 = d3.scaleLinear().domain([10, 100]).rangeRound([40, 50]);
console.log(xScale1(10));

// .clamp(boolean) 限制輸出範圍
xScale = d3.scaleLinear().domain([20, 40, 60]).range([0, 150, svgWidth]);

xScale.clamp(true);

console.log(xScale(10));
console.log(xScale(70));

// .unknown(value) 輸入值不在定義範圍內時，輸出值
xScale.unknown('unknown');

console.log(xScale());
console.log(xScale(null));

// .interpolate(interpolator) 插值器
color = d3
  .scaleLinear()
  .domain([20, 80, 140])
  .range(['red', 'green', 'blue'])
  .interpolate(d3.interpolateHcl);

d3.select('svg')
  .selectAll('rect')
  .data([40])
  .join('rect')
  .attr('width', (d) => xScale(d))
  .attr('height', 20)
  .attr('x', 0)
  .attr('y', 10)
  .attr('fill', (d) => color(d));

// .ticks(count) 產生刻度
console.log(xScale.ticks());

xScale = d3.scaleLinear().domain([20, 120]).range([0, svgWidth]);

console.log(xScale.ticks());

// .tickFormat(count, specifier) 刻度格式
let xTicks = xScale.ticks(6);
let xTickFormat = xScale.tickFormat(6, '+');

console.log(xTicks.map(xTickFormat));

// d3.tickFormat(start, stop, count, specifier(optional))
let d3TickFormat = d3.tickFormat(-1, 1, 5, '-');
console.log(d3TickFormat(-0.5));
console.log(d3TickFormat(0.5));
console.log(d3TickFormat(-6.5));

console.log(xTicks.map(d3TickFormat));

// .nice(count) 調整輸入範圍
let xScale2 = d3.scaleLinear().domain([1.256, 7.345]).range([20, 40]);

xScale2.nice();
console.log(xScale2.ticks());

// .copy() 複製比例尺
let xScale3 = xScale2.copy();
