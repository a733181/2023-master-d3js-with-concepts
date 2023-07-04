// d3.scaleQuantile()

const quantileScale = d3.scaleQuantile();
console.log(quantileScale);
console.log(quantileScale.domain());
console.log(quantileScale.range());

quantileScale.domain([0, 100]);
console.log(quantileScale.domain());
console.log(quantileScale.quantiles());

quantileScale.range([10, 20, 30]);
console.log(quantileScale.range());
console.log(quantileScale.quantiles());
console.log(quantileScale(30));

quantileScale.range([30, 20, 10]);
console.log(quantileScale(30));

quantileScale.domain([0, 25, 50, 100]);
quantileScale.range(['#d6e8c3', '#c7e9b4', '#7fcdbb', '#41b6c4']);
console.log(quantileScale.quantiles());
console.log(quantileScale(10));
console.log(quantileScale(20));
console.log(quantileScale(30));

quantileScale.invertExtent('#c7e9b4');
console.log(quantileScale.invertExtent('#c7e9b4'));

const quantileScale1 = quantileScale.copy();
