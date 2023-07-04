// select.data(data,key)

const svg = d3.select('svg');

const dataArray = [10, 15, 20];

const allCircle = svg
  .selectAll('circle')
  .data(dataArray, function (d) {
    return d.toString();
  })
  .join('circle')
  .attr('cx', (d, i) => d + i * 30)
  .attr('cy', 100)
  .attr('r', (d) => d);

console.log(allCircle);

const dataArray1 = [10, 20];

const allCircle1 = svg.selectAll('circle').data(dataArray1, function (d) {
  return d.toString();
});
// .join('circle')
// .attr('cx', (d, i) => d + i * 30)
// .attr('cy', 100)
// .attr('r', (d) => d);
console.log(allCircle1);

const dataArray2 = [5, 20];
const allCircle2 = svg
  .selectAll('circle')
  .data(dataArray2, function (d) {
    return d.toString();
  })
  .join('circle')
  .attr('cx', (d, i) => d + i * 30)
  .attr('cy', 100)
  .attr('r', (d) => d);
console.log(allCircle2);
