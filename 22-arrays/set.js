// d3.difference(iterable,...others)
const difference1 = d3.difference([1, 2, 3, 4, 5], [1, 3, 5]);
console.log(difference1);

// d3.union[....iterables]
const union1 = d3.union([1, 2, 3], [2, 3, 4], [3, 4, 5]);
console.log(union1);

// d3.intersection(...iterables)
const intersection1 = d3.intersection([1, 2, 3], [2, 3, 4], [3, 4, 5]);
console.log(intersection1);

// d3.superset(set, subset)
const superset1 = d3.superset([1, 2, 3, 4, 5], [1, 3, 5]);
console.log(superset1);
const superset2 = d3.superset([1, 2, 3, 4, 5], [6, 7]);
console.log(superset2);

// d3.subset(set, subset)
const subset1 = d3.subset([1, 2, 3, 4, 5], [1, 3, 5]);
console.log(subset1);
const subset2 = d3.subset([1, 2, 3, 4, 5], [6, 7]);
console.log(subset2);

// d3.disjoint(...iterables)
const disjoint1 = d3.disjoint([1, 2, 3], [2, 3, 4], [3, 4, 5]);
console.log(disjoint1);
