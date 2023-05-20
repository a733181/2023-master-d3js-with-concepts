// select.enter()

const svg = d3.select('svg');

svg.append('circle').attr('cx', 150).attr('cy', 50).attr('r', 40);
svg.append('circle').attr('cx', 150).attr('cy', 150).attr('r', 30);

// const dataArray = [10, 20, 30];
const dataArray = [15, 15, 15];

const allCircle = d3
  .selectAll('circle')
  .data(dataArray)
  .attr('r', (d) => d);

console.log(allCircle);

const allCircleEnter = allCircle.enter();
console.log(allCircleEnter);

const svgAppend = svg
  .selectAll('circle')
  .data(dataArray)
  .enter()
  .append('circle')
  .attr('cx', 150)
  .attr('cy', 250)
  .attr('r', (d) => d);
console.log(svgAppend);
