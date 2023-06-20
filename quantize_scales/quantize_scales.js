// d3.scaleQuantize()

const quantizeScale = d3.scaleQuantize();

console.log(quantizeScale);
console.log(quantizeScale.domain());
console.log(quantizeScale.range());

console.log(quantizeScale(0.1));
console.log(quantizeScale(0.3));
console.log(quantizeScale(0.5));
console.log(quantizeScale(1.1));

quantizeScale.domain([1, 5, 10]);
console.log(quantizeScale.domain());
console.log(quantizeScale(1));
console.log(quantizeScale(2));
console.log(quantizeScale(3));

quantizeScale.range([10, 20, 30]);
console.log(quantizeScale.range());
console.log(quantizeScale(1));
console.log(quantizeScale(2));
console.log(quantizeScale(3));

quantizeScale.invertExtent();
console.log(quantizeScale.domain());
console.log(quantizeScale.invertExtent(20));
console.log(quantizeScale.range());

quantizeScale.thresholds();
console.log(quantizeScale.thresholds());

quantizeScale.range([10, 20, 30, 40]);
console.log(quantizeScale.range());
console.log(quantizeScale.thresholds());
