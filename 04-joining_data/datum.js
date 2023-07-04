// select.datum(value)

let allCircle = d3.selectAll('circle');
const radius = 25;
allCircle = allCircle.datum(radius);
console.log(allCircle);
console.log(allCircle.datum());

allCircle = allCircle.datum(null);
console.log(allCircle.datum());

allCircle = allCircle.datum(function (d, i, n) {
  console.log({ d, i, n });
  return (i + 1) * 15;
});
console.log(allCircle);

allCircle.attr('r', (d) => d);
