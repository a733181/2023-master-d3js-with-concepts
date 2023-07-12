// d3.every(iterable,test)
const every1 = d3.every([1, 2, 3], (d) => d > 0);
console.log(every1);
const every2 = d3.every([1, 2, 3], (d) => d > 3);
console.log(every2);
const every3 = d3.every(new Set([1, 2, 3]), (d) => d > 0);
console.log(every3);
const every4 = d3.every(new Set([1, 2, 3]), (d) => d > 3);
console.log(every4);

// d3.some(iterable,test)
const some1 = d3.some([1, 2, 3], (d) => d > 0);
console.log(some1);
const some2 = d3.some([1, 2, 3], (d) => d > 3);
console.log(some2);
const some3 = d3.some(new Set([1, 2, 3]), (d) => d > 0);
console.log(some3);
const some4 = d3.some(new Set([1, 2, 3]), (d) => d > 3);
console.log(some4);

// d3.filter(iterable,test)
const filter1 = d3.filter([1, 2, 3], (d) => d > 0);
console.log(filter1);
const filter2 = d3.filter([1, 2, 3], (d) => d > 3);
console.log(filter2);
const filter3 = d3.filter(new Set([1, 2, 3]), (d) => d > 0);
console.log(filter3);
const filter4 = d3.filter(new Set([1, 2, 3]), (d) => d > 3);
console.log(filter4);

// d3.map(iterable,map)
const map1 = d3.map([1, 2, 3], (d) => d > 0);
console.log(map1);
const map2 = d3.map([1, 2, 3], (d) => d > 3);
console.log(map2);
const map3 = d3.map(new Set([1, 2, 3]), (d) => d > 0);
console.log(map3);
const map4 = d3.map(new Set([1, 2, 3]), (d) => d > 3);
console.log(map4);

// d3.reduce(iterable,reducer,initialValue(optional))
const reduce1 = d3.reduce([1, 2, 3], (x, y) => x + y);
console.log(reduce1);
const reduce2 = d3.reduce([1, 2, 3], (x, y) => x - y);
console.log(reduce2);
const reduce3 = d3.reduce(new Set([1, 2, 3]), (x, y) => x + y);
console.log(reduce3);
const reduce4 = d3.reduce(new Set([1, 2, 3]), (x, y) => x - y);
console.log(reduce4);

// d3.reverse(iterable)
const reverse1 = d3.reverse([1, 2, 3]);
console.log(reverse1);
const reverse2 = d3.reverse(new Set([1, 2, 3]));
console.log(reverse2);

// d3.sort(iterable,accessor)
// d3.sort(iterable,comparator)
const sort1 = d3.sort([3, 2, 1]);
console.log(sort1);
const sort2 = d3.sort([3, 2, 1], (d) => d / 3);
console.log(sort2);
const sort3 = d3.sort([3, 2, 1], (a, b) => a - b);
console.log(sort3);
const sort4 = d3.sort(new Set([3, 2, 1]));
console.log(sort4);
const sort5 = d3.sort(new Set([3, 2, 1]), (d) => d / 3);
console.log(sort5);
const sort6 = d3.sort(new Set([3, 2, 1]), (a, b) => a - b);
console.log(sort6);
