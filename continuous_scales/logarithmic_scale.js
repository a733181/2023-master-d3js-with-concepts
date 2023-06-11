// d3.scaleLog()

let logScale = d3.scaleLog();
console.log(logScale.domain());
console.log(logScale.range());

console.log(logScale(0));
console.log(logScale(1));

logScale.base(5);

console.log(logScale.base());
