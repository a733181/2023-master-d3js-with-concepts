// d3.scaleOrdinal()

const ordinalScale = d3.scaleOrdinal();
console.log(ordinalScale.domain());
console.log(ordinalScale.range());

ordinalScale.domain([1, 2]);
console.log(ordinalScale(1));
console.log(ordinalScale(2));

ordinalScale.range(['red', 'blue']);
console.log(ordinalScale(1));
console.log(ordinalScale(2));
console.log(ordinalScale.domain());
console.log(ordinalScale(3));
console.log(ordinalScale(4));
console.log(ordinalScale('red'));
console.log(ordinalScale('blue'));
