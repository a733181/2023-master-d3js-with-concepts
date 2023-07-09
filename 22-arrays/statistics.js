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

let x = d3.min(data1);
let y = d3.min(data2, (d) => d.score);
console.log(x, y);

x = d3.minIndex(data1);
y = d3.minIndex(data2, (d) => d.score);
console.log(x, y);

x = d3.max(data1);
y = d3.max(data2, (d) => d.score);
console.log(x, y);

x = d3.maxIndex(data1);
y = d3.maxIndex(data2, (d) => d.score);
console.log(x, y);

x = d3.extent(data1);
y = d3.extent(data2, (d) => d.score);
console.log(x, y);

x = d3.sum(data1);
y = d3.sum(data2, (d) => d.score);
console.log(x, y);

x = d3.mean(data1);
y = d3.mean(data2, (d) => d.score);
console.log(x, y);

x = d3.median(data1);
y = d3.median(data2, (d) => d.score);
console.log(x, y);

x = d3.cumsum(data1);
y = d3.cumsum(data2, (d) => d.score);
console.log(x, y);

x = d3.quantile(data1, 0.25);
y = d3.quantile(data2, 0.6, (d) => d.score);
console.log(x, y);

// d3.quantileSorted(interable,accessorFn(optional));
// iterable: 這是一個有序的數值資料集，通常是一個陣列。資料集應該是按照升序或降序排列的。
// accessorFn（可選）: 這是一個函式，用於訪問資料集中的每個元素並返回要進行計算的數值。如果不提供這個參數，則默認使用資料集中的元素值。
x = d3.quantile(data1, 0.5);
y = d3.quantile(data2, 0.5, (d) => d.score);
console.log(x, y);

// d3.variance(interable,accessorFn(optional));
x = d3.variance(data1);
y = d3.variance(data2, (d) => d.score);
console.log(x, y);

// d3.deviation(interable,accessorFn(optional));
x = d3.deviation(data1);
y = d3.deviation(data2, (d) => d.score);
console.log(x, y);

// d3.fsum(interable,accessorFn(optional));
x = d3.fsum(data1);
y = d3.fsum(data2, (d) => d.score);
console.log(x, y);
