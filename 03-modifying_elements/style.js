// select.style(name,value)

const svg = d3.select('svg');
svg.style('background-color');
console.log(svg.style('background-color'));

svg.attr('width', 300);
svg.attr('height', 300);

const svgColor = svg.style('background-color', 'lightgray');
console.log(svg.style('background-color'));
console.log(svgColor);

svg.style('background-color', null);

const ellipses = svg.selectChildren('ellipse');
console.log(ellipses);

ellipses.select(function (d, i, n) {
  console.log({ d, i, n });
  const ellipse = d3.select(this);
  console.log(this, ellipse);

  ellipse
    .attr('cx', `${i * 100 + 110}`)
    .attr('cy', `${i * 80 + 80}`)
    .attr('rx', `${i * 20 + 50}`)
    .attr('ry', `${i * 20 + 70}`)
    .style(
      'fill',
      `rgb(${Math.floor(Math.random() * 120)},${Math.floor(
        Math.random() * 120
      )},${Math.floor(Math.random() * 120)})`
    );
});

ellipses.style('fill', function (d, i) {
  return `rgb(${Math.floor(
    Math.random() * 120
  )},${Math.floor(Math.random() * 120)},${Math.floor(Math.random() * 120)})`;
});
