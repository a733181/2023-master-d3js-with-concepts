const data1 = [75, 50, 100, 25, 150];
const data2 = [
  {
    name: 'Jill',
    score: 40,
  },
  {
    name: 'Jane',
    score: 20,
  },
  {
    name: 'Jack',
    score: 50,
  },
];
const data3 = [25, 50, 75, 100, 150];
const data4 = [
  {
    name: 'Jane',
    score: 20,
  },
  {
    name: 'Jill',
    score: 40,
  },
  {
    name: 'Jack',
    score: 50,
  },
];

// d3.least(iterable,accesorFn(optional))
// d3.least(iterable,comparator(optional))
let a = d3.least(data1);
console.log(a);
let b = d3.least(data2, (d) => d.score);
console.log(b);
let c = d3.least(data2, (a, b) => a.score - b.score);
console.log(c);
let d = d3.least(data2, (a, b) => b.score - a.score);
console.log(d);

// d3.leastIndex(iterable,accesorFn(optional))
// d3.leastIndex(iterable,comparator(optional))
a = d3.leastIndex(data1);
console.log(a);
b = d3.leastIndex(data2, (d) => d.score);
console.log(b);
c = d3.leastIndex(data2, (a, b) => a.score - b.score);
console.log(c);
d = d3.leastIndex(data2, (a, b) => b.score - a.score);
console.log(d);

// d3.greatest(iterable,accesorFn(optional))
// d3.greatest(iterable,comparator(optional))
a = d3.greatest(data1);
console.log(a);
b = d3.greatest(data2, (d) => d.score);
console.log(b);
c = d3.greatest(data2, (a, b) => a.score - b.score);
console.log(c);
d = d3.greatest(data2, (a, b) => b.score - a.score);
console.log(d);

// d3.greatestIndex(iterable,accesorFn(optional))
// d3.greatestIndex(iterable,comparator(optional))
a = d3.greatestIndex(data1);
console.log(a);
b = d3.greatestIndex(data2, (d) => d.score);
console.log(b);
c = d3.greatestIndex(data2, (a, b) => a.score - b.score);
console.log(c);
d = d3.greatestIndex(data2, (a, b) => b.score - a.score);
console.log(d);

// d3.bisectLeft(array,x,lo(optional),hi(optional))
a = d3.bisectLeft(data3, 120);
console.log(a);
b = d3.bisectLeft(data3, 60);
console.log(b);
c = d3.bisectLeft(data3, 60, 0, 3);
console.log(c);

// d3.bisectCenter(array,x,lo(optional),hi(optional))
a = d3.bisectCenter(data3, 100);
console.log(a);
b = d3.bisectCenter(data3, 50);
console.log(b);
c = d3.bisectCenter(data3, 25, 0, 3);
console.log(c);

// d3.bisector(accessor)
// d3.bisector(comparator)

// bisector.left
const bisectLeft = d3.bisector((d) => d.score).left;
const data4LeftIndex = bisectLeft(data4, 30);
console.log(data4LeftIndex);

const bisectLeft2 = d3.bisector((a, x) => a.score - x).left;
const data4LeftIndex2 = bisectLeft2(data4, 45);
console.log(data4LeftIndex2);

// bisector.right
const bisectRight = d3.bisector((d) => d.score).right;
const data4RightIndex = bisectRight(data4, 30);
console.log(data4RightIndex);

const bisecRight2 = d3.bisector((a, x) => a.score - x).right;
const data4RightIndex2 = bisecRight2(data4, 60);
console.log(data4RightIndex2);

// bisector.center
const bisectCenter = d3.bisector((d) => d.score).center;
const data4CenterIndex = bisectCenter(data4, 20);
console.log(data4CenterIndex);

const bisecCenter2 = d3.bisector((a, x) => a.score - x).center;
const data4CenterIndex2 = bisecCenter2(data4, 30);
console.log(data4CenterIndex2);

// d3.ascending()
// comparator function
a = d3.ascending(23, 42);
console.log(a);
a = d3.ascending(73, 42);
console.log(a);
a = d3.ascending(42, 42);
console.log(a);

// d3.descending()
// comparator function
a = d3.descending(23, 42);
console.log(a);
a = d3.descending(73, 42);
console.log(a);
a = d3.descending(42, 42);
console.log(a);
