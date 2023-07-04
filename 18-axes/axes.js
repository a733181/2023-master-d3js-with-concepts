const SVG = d3.select('svg').attr('width', 500).attr('height', 500);
SVG.style('background-color', 'lightgray');

const SVG_HEIGHT = d3.select('svg').node().clientHeight;
const SVG_WIDTH = d3.select('svg').node().clientWidth;

// Data
const data = [23, 26, 67, 55, 49];

const dataScale = d3
  .scaleLinear()
  .domain([0, Math.max(...data)])
  .range([25, SVG_HEIGHT - 25]);

const yLeft = d3.axisLeft(dataScale);
const yLeftG = SVG.append('g').attr('id', 'yLeft');
yLeft(yLeftG);
yLeftG.attr('transform', 'translate(25, 0)');

const yRight = d3.axisRight(dataScale);
const yRightG = SVG.append('g').attr('id', 'yRight');
yRight(yRightG);
yRightG.attr('transform', `translate(${SVG_WIDTH - 25}, 0)`);

const xTop = d3.axisTop(dataScale);
const xTopG = SVG.append('g').attr('id', 'xTop');
xTop(xTopG);
xTopG.attr('transform', 'translate(0, 25)');

const xBottom = d3.axisBottom(dataScale);
const xBottomG = SVG.append('g').attr('id', 'xBottom');
xBottom(xBottomG);
xBottomG.attr('transform', `translate(0, ${SVG_HEIGHT - 25})`);

yLeft.ticks(6);
yLeft(yLeftG);
xBottom.ticks(4, '%');
xBottom(xBottomG);

// axis.ticks(interval,specifier(optional)) // only on a time scale

console.log(yLeft.tickValues());
yLeft.tickValues(data);
yLeft(yLeftG);
console.log(yLeft.tickValues());

console.log(xBottom.tickFormat());
xBottom.tickFormat(d3.format(',.0'));
xBottom(xBottomG);

//
console.log(yLeft.tickPadding());
yLeft.tickPadding(0);
yLeft(yLeftG);
yLeft.tickPadding(1.5);
yLeft(yLeftG);

//
console.log(yLeft.tickSizeInner());
yLeft.tickSizeInner(3);
yLeft(yLeftG);
yLeft.tickSizeInner(0);
yLeft(yLeftG);
yLeft.tickSizeInner(-6);
yLeft(yLeftG);
console.log(yLeft.tickSizeInner());

//
console.log(yLeft.tickSizeOuter());
yLeft.tickSizeOuter(3);
yLeft(yLeftG);
yLeft.tickSizeOuter(0);
yLeft(yLeftG);
yLeft.tickSizeOuter(10);
yLeft(yLeftG);

//
console.log(yLeft.tickSize());
yLeft.tickSize(6);
yLeft(yLeftG);
