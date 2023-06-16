// d3.scaleSequential()

const seqScale = d3.scaleSequential();

console.log(seqScale.domain());
console.log(seqScale.range());
console.log(seqScale.interpolator());

seqScale.domain([0, 100]);
// seqScale.range([11, 100]);
console.log(seqScale.interpolator());

seqScale.interpolator(d3.interpolateRainbow);
console.log(seqScale.interpolator());
console.log(seqScale.domain());
console.log(seqScale.range());

console.log(seqScale(10));
console.log(seqScale(2, 5));

seqScale.clamp();

seqScale.rangeRound();

const seqScale1 = seqScale.copy();

// d3.sequentialLog()
// d3.sequentialPow()
// d3.sequentialQuantile()

seqScale.ticks();
seqScale.tickFormat();
