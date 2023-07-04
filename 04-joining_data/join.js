// select.join(enter,update.exit)

const svg = d3.select('svg');

const dataArray = [10, 20, 30];

const allCircle = svg
  .selectAll('circle')
  .data(dataArray)
  .join('circle')
  .attr('cx', function (d, i, n) {
    return 150;
  })
  .attr('cy', function (d, i, n) {
    return d + i * 50;
  })
  .attr('r', (d) => d);
console.log(allCircle);

const dataArray1 = [5, 10, 15, 20];

const allCircle1 = allCircle
  .data(dataArray1)
  .join('circle')
  .attr('cx', function (d, i, n) {
    return 150;
  })
  .attr('cy', function (d, i, n) {
    return d + i * 50;
  })
  .attr('r', (d) => d);
console.log(allCircle1);

const dataArray2 = [30, 50];
const allCircle2 = allCircle
  .data(dataArray2)
  .join('circle')
  .attr('cx', function (d, i, n) {
    return 150;
  })
  .attr('cy', function (d, i, n) {
    return d + i * 50;
  })
  .attr('r', (d) => d);
console.log(allCircle2);

const allCircle2Color = allCircle.data(['red', 'blue']).join(
  (enter) => console.log(enter),
  // (update) => console.log(update),
  (update) => update.style('fill', (d) => d),
  (exit) => console.log(exit)
);
console.log(allCircle2Color);
