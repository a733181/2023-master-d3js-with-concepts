// d3.scaleTime()

const timeScale = d3.scaleTime();

console.log(timeScale.domain());
console.log(timeScale.range());

console.log(timeScale(2000, 0));
console.log(timeScale(-2000, 0));

console.log(timeScale(new Date(2000, 0, 31)));

let toDay = new Date();
console.log(toDay);

// Date(y,m,d,m,s,ms)

timeScale.domain([new Date(2000, 0, 1), new Date(2000, 12, 31)]);
timeScale.range([1, 31]);

console.log(timeScale(new Date(2000, 0, 31)));

// .invert()
console.log(timeScale.invert(26));

// .rangeRound()
timeScale.rangeRound([1, 10]);
console.log(timeScale(new Date(2000, 0, 21)));

// .clamp()
timeScale.clamp(true);

// .interpolate()
const color = d3
  .scaleTime()
  .domain([new Date(2000, 0, 1), new Date(2000, 0, 31)])
  .interpolate(d3.interpolateHcl);

console.log(color(new Date(2000, 0, 31)));

// .ticks(count(optional))
timeScale.ticks();
console.log(timeScale.ticks(5));

// .ticks(interval)
timeScale.ticks(d3.timeDay.every(1));
console.log(timeScale.ticks(d3.timeDay.every(1)));

// .tickFormat(count(optional))
let xTicks = timeScale.ticks(7);
let xTickFormat = timeScale.tickFormat(7, '%b %d');
// %B, %b, %d, %a, %H, %M, %S, %L, %Y, %y, %p, %I, %b, %m, %j, %w, %c, %x, %X, %%.

xTicks.map(xTickFormat);

console.log(xTicks.map(xTickFormat));

// .tickFormat(count(optional))
xTicks = timeScale.ticks(d3.timeDay.every(1));
xTickFormat = timeScale.tickFormat(7, '%b %d');
// %B, %b, %d, %a, %H, %M, %S, %L, %Y, %y, %p, %I, %b, %m, %j, %w, %c, %x, %X, %%.

xTicks.map(xTickFormat);

console.log(xTicks.map(xTickFormat));

// .nice(count(optional))
console.log(timeScale.nice(11).ticks());

// .copy()
const copyTimeScale = timeScale.copy();
console.log(copyTimeScale(new Date(2000, 0, 21)));
