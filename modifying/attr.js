// selection.attr(name.value)

const svg1 = d3.select('svg');
console.log(svg1);

const svg1Width = svg1.attr('width');
console.log(svg1Width);

const svg1Height = svg1.attr('height');
console.log(svg1Height);

const svg1Class = svg1.attr('class');
console.log(svg1Class);

svg1.attr('class', 'svg1');

// 後面蓋前面
svg1.selectChildren().attr('class', 'my-circle');
svg1.selectChildren().attr('class', 'new-circle');
svg1.selectChildren().attr('class', 'my-circle');

const svg2 = d3.select('svg:nth-of-type(2)');
console.log(svg2);

const svg2Circle = svg2.selectAll('circle');
console.log(svg2Circle);

svg2Circle.attr('style', 'fill:peachpuff');
svg2Circle.attr('style', function (d, i, n) {
  console.log({ d, i, n });

  return `fill:rgb(${Math.floor(
    Math.random() * (250 * i)
  )},${Math.floor(Math.random() * (250 * i))},${Math.floor(Math.random() * (250 * i))})`;
});
