const dryFruitData = [
  {
    name: 'Almonds',
    carbs: 15,
    fats: 72,
    protein: 13,
  },
  {
    name: 'Raisins',
    carbs: 96,
    fats: 1,
    protein: 3,
  },
  {
    name: 'Cashews',
    carbs: 23,
    fats: 66,
    protein: 11,
  },
  {
    name: 'Walnuts',
    carbs: 9,
    fats: 83,
    protein: 8,
  },
  {
    name: 'Apricots',
    carbs: 93,
    fats: 2,
    protein: 5,
  },
  {
    name: 'Pistachios',
    carbs: 20,
    fats: 67,
    protein: 13,
  },
  {
    name: 'Figs',
    carbs: 94,
    fats: 3,
    protein: 3,
  },
  {
    name: 'Dates',
    carbs: 98,
    fats: 0,
    protein: 2,
  },
  {
    name: 'Prunes',
    carbs: 96,
    fats: 1,
    protein: 3,
  },
  {
    name: 'Hazelnuts',
    carbs: 11,
    fats: 81,
    protein: 8,
  },
];

const svg = d3.select('#chart');

const svgWidth = svg.node().clientWidth;
const svgHeight = svg.node().clientHeight;
// console.log(svgWidth, svgHeight);

svg.attr('viewBox', `0 ${-svgHeight} ${svgWidth} ${svgHeight}`);

let allGs = svg.selectAll('g').data(dryFruitData).join('g');

allGs.each((d, i, n) => {
  const gElement = d3.select(n[i]);

  gElement.call(stack, [d.carbs, d.fats, d.protein]);

  function stack(element, split) {
    let height = 0;
    element
      .selectAll('rect')
      .data(split)
      .join('rect')
      .attr('width', svgWidth / 21)
      .attr('height', (d) => d * 5)
      .attr('x', svgWidth / 21 + i * ((2 * svgWidth) / 21))
      .attr('y', (d, i) => {
        height += split[i];
        return -height * 5;
      })
      .attr('rx', 10)
      .attr('ry', 10)
      .style('fill', (d, i) => {
        return i === 0 ? 'burlywood' : i === 1 ? 'sandybrown' : 'navajowhite';
      });

    element
      .append('text')
      .data([dryFruitData[i]])
      .join('text')
      .attr('x', svgWidth / 21 + i * ((2 * svgWidth) / 21) - 15)
      .attr('y', '-250')
      .style('writing-mode', 'tb')
      .style('text-anchor', 'middle')
      .text((d) => `${d.name} (${d.carbs}, ${d.fats}, ${d.protein})`)
      .style('fill', 'lightgoldenrodyellow')
      .style('font-weight', '500');
  }
});
