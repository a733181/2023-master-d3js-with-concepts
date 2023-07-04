// d3.scaleThreshold()

const thresholdScale = d3.scaleThreshold();

console.log(thresholdScale.domain());
console.log(thresholdScale.range());
console.log(thresholdScale(0.4));
console.log(thresholdScale(0.5));

thresholdScale.domain([5, 7]);
thresholdScale.range([1, 5, 10]);
console.log(thresholdScale(5));
console.log(thresholdScale(4));
console.log(thresholdScale(-4));

thresholdScale.domain(['F']);
console.log(thresholdScale('F'));
console.log(thresholdScale.invertExtent(5));

thresholdScale.domain([0.5]);
thresholdScale.range([0, 1]);
console.log(thresholdScale.invertExtent(0));
console.log(thresholdScale.invertExtent(1));

const thresholdScale1 = thresholdScale.copy();
