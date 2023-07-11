let data1 = [45, 35, 25];
let data2 = [
  {
    name: 'Jack',
    score: 40,
  },
  {
    name: 'Jill',
    score: 60,
  },
  {
    name: 'Jack',
    score: 20,
  },
];

// d3.group(iterable,...keys)
const group1 = d3.group(data1, (d) => d);
console.log(group1);
const group2 = d3.group(data2, (d) => d.name);
console.log(group2);

// d3.groups(iterables,...keys)
const groups1 = d3.groups(data2, (d) => d);
console.log(groups1);

// d3.index(iterable,...keys)
const index1 = d3.index(data2, (d) => d);
console.log(index1);

// d3.indexes(iterable,...keys)
const indexes1 = d3.indexes(data2, (d) => d);
console.log(indexes1);

// d3.rollup(iterable,reduce,...keys)
const rollup1 = d3.rollup(
  data2,
  (v) => v.length,
  (d) => d.score
);
console.log(rollup1);

// d3.rollups(iterable,reduce,...keys)
const rollups1 = d3.rollups(
  data2,
  (v) => v.length,
  (d) => d.score
);
console.log(rollups1);

// d3.count(iterable,accessor(optional))
const count1 = d3.count(data2, (d) => d.score);
console.log(count1);

// d3.cross(...iterables, reducer(optional))
const cross1 = d3.cross([1, 2], [3, 4]);
console.log(cross1);
const cross2 = d3.cross([1, 2], [3, 4], (a, b) => a * b);
console.log(cross2);

// d3.merge(iterables)
const merge1 = d3.merge([[1, 2], [2]]);
console.log(merge1);

// d3.pairs(iterable,reducer(optional))
const pairs1 = d3.pairs([1, 2, 3, 4]);
console.log(pairs1);
const pairs2 = d3.pairs([1, 2, 3, 4], (a, b) => a * b);
console.log(pairs2);

// d3.permute(source,keys)
const permute1 = d3.permute(['a', 'b', 'c'], [2, 0, 1]);
console.log(permute1);

// d3.shuffle(array,start(optional),stop(optional))
const shuffle1 = d3.shuffle([2, 5, 8, 3]);
console.log(shuffle1);
const shuffle2 = d3.shuffle([2, 5, 8, 3], 1, 3);
console.log(shuffle2);

// d3.ticks(start,stop,count)
const ticks1 = d3.ticks(0, 10, 5);
console.log(ticks1);
const ticks2 = d3.ticks(1.23, 10.54, 4);
console.log(ticks2);

// d3.tickStep(start,stop,count)
const tickStep1 = d3.tickStep(0, 10, 5);
console.log(tickStep1);
const tickSte2 = d3.tickStep(1.23, 10.54, 4);
console.log(tickSte2);

// d3.tickIncrement(start,stop,count)
const tickIncrement1 = d3.tickIncrement(1, 10, 4);
console.log(tickIncrement1);
const tickIncrement2 = d3.tickIncrement(9, 1, 4);
console.log(tickIncrement2);

// d3.nice(start,stop,count)
const nice1 = d3.nice(1.23, 10.54, 4);
console.log(nice1);

// d3.range(start(optional),stop,step(optional))
const range1 = d3.range(1.23, 10.54, 4);
console.log(range1);

// d3.zip(...arrays)
const zip1 = d3.zip([1, 2, 3], [4, 5, 6]);
console.log(zip1);

// d3.transpose(matrix)
const transpose1 = d3.transpose([[1, 2, 3, 4]]);
console.log(transpose1);
const transpose2 = d3.transpose([
  [1, 2, 3, 4],
  [5, 6],
]);
console.log(transpose2);
