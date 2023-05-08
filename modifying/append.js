// select.append(type)

const div1 = d3.select('#title');

const divH1 = div1.append('h1');

divH1.text('Append');

const rectsData = [
  { x: '10', y: '10', width: '50', height: '30' },
  { x: '10', y: '50', width: '50', height: '30' },
];

const svgRects = d3.select('#svg').append('svg');
console.log(svgRects);

svgRects.attr('width', '300').attr('height', '300');

for (const item of rectsData) {
  svgRects.append('rect');
}

d3.selectAll('rect').select(function (d, i, n) {
  d3.select(n[i])
    .attr('x', rectsData[i].x)
    .attr('y', rectsData[i].y)
    .attr('width', rectsData[i].width)
    .attr('height', rectsData[i].height);
});

for (const item of rectsData) {
  svgRects.append(function () {
    return document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  });
}
