// d3.scaleIdentity()

const identityScale = d3.scaleIdentity();

console.log(identityScale.domain());
console.log(identityScale.range());

identityScale.domain([0, 100]);
console.log(identityScale.domain());
console.log(identityScale.range());

identityScale.range([0, 20]);
console.log(identityScale.range());
