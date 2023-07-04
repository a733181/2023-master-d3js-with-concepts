// d3.scaleDiverging()

const divScale = d3.scaleDiverging();

console.log(divScale);
console.log(divScale.domain());
console.log(divScale.clamp());
console.log(divScale.range());
console.log(divScale.rangeRound());
console.log(divScale.interpolator());

divScale.domain([0, 100, 200]);

console.log(divScale(0));
console.log(divScale(100));
console.log(divScale(200));

// d3.scaleDivergingLog()
// d3.scaleDivergingPow()

divScale.domain([0, 100, 200]).interpolator(d3.interpolateSpectral);
console.log(divScale(30));
