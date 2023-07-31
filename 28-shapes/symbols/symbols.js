// d3.symbol()

let symbol = d3.symbol();
let symbolData = symbol();

d3.select('svg')
  .append('g')
  .attr('id', 'symbol')
  .selectAll('path')
  .data([symbolData])
  .join('path')
  .attr('d', (d) => d);

d3.select('#symbol').attr('transform', 'translate(100, 100)');

// symbol = d3.symbol().type(d3.symbolCircle).size(64);
// symbolData = symbol();

// symbol = d3.symbol().type(d3.symbolCross).size(64);
// symbolData = symbol();

// symbol = d3.symbol().type(d3.symbolDiamond).size(64);
// symbolData = symbol();

// symbol = d3.symbol().type(d3.symbolSquare).size(64);
// symbolData = symbol();

// symbol = d3.symbol().type(d3.symbolStar).size(64);
// symbolData = symbol();

// symbol = d3.symbol().type(d3.symbolTriangle).size(64);
// symbolData = symbol();

// symbol = d3.symbol().type(d3.symbolWye).size(64);
// symbolData = symbol();

// symbol = d3.symbol().type(d3.symbols[0]).size(64);
// symbolData = symbol();

symbol = d3.symbol().type(d3.symbols[1]).size(64);
symbolData = symbol();

d3.select('#symbol')
  .selectAll('path')
  .data([symbolData])
  .join('path')
  .attr('d', (d) => d)
  .style('fill', 'blue');
