// select1.merge(select2)

const svg1 = d3.selectAll('#svg1 circle');
const svg2 = d3.selectAll('#svg2 circle');

console.log({
  svg1,
  svg2,
});

const svg1Odd = svg1.select(function (d, i, n) {
  console.log({ d, i, n });
  console.log(n[i], this);

  if (i % 2 === 0) {
    this.style.fill = 'orange';
    return this;
  } else {
    return null;
  }
});

const svg2Even = svg2.select(function (d, i, n) {
  if (i % 2 !== 0) {
    this.style.fill = 'orange';
    return this;
  } else {
    return null;
  }
});

const mergeCircle = svg1Odd.merge(svg2Even);
console.log(mergeCircle);
