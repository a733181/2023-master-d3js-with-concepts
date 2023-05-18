// select.data(data,key)

const cirlcleSvg1 = d3.selectAll('#svg1 circle');
console.log(cirlcleSvg1);

const radSvg1 = [10, 20, 30];
const radSvg2 = [25, 35, 40];
const colors = ['red', 'green', 'blue'];

const cirSvg1Data = cirlcleSvg1.data(radSvg1);
console.log(cirSvg1Data);

cirlcleSvg1.select(function (d, i, n) {
  console.log({ d, i, n });
});

cirSvg1Data.attr('r', function (d) {
  return d;
});

const cirlcleSvg2 = d3.selectAll('#svg2 circle');
let cirSvg2Data = cirlcleSvg2.data(radSvg1);
cirSvg2Data.attr('r', function (d) {
  return d;
});

cirSvg2Data = cirlcleSvg2.data(colors);
console.log(cirSvg2Data);

cirSvg2Data.style('fill', (d) => d);

const allCircle = d3.selectAll('svg').selectAll('circle');
console.log(allCircle);
const allCircleData = allCircle.data(radSvg2);
console.log(allCircleData);
allCircleData.attr('r', (d) => d);

console.clear();

cirSvg2Data.data(function (d, i, n) {
  console.log({ d, i, n });
  return [20, 30, 40];
});
console.log(cirSvg2Data);
console.log(cirSvg2Data.data());
