document.querySelector('button').addEventListener('click', () => {
  const onePtValue = Number(document.querySelector('#one').value);
  const twoPtValue = Number(document.querySelector('#two').value);
  const threePtValue = Number(document.querySelector('#three').value);

  if (onePtValue === 0 && twoPtValue === 0 && threePtValue === 0) {
    d3.select('svg').selectAll('circle').remove();

    d3.select('svg')
      .selectAll('text')
      .data(['You did not play a game!'])
      .join('text')
      .text((d) => d)
      .attr('x', 300)
      .attr('y', 100)
      .style('text-anchor', 'middle')
      .style('fill', 'orange');
  } else {
    d3.select('svg').selectAll('text').remove();

    const SVG_WIDTH = d3.select('svg').node().clientWidth;
    const SVG_HEIGHT = d3.select('svg').node().clientHeight;

    const colorScale = d3
      .scaleOrdinal()
      .domain([0, 1, 2])
      .range(['red', 'blue', 'green']);

    const heightScale = d3
      .scaleLinear()
      .domain([0, Math.max(onePtValue * 1, twoPtValue * 2, threePtValue * 3)])
      .range([0, SVG_HEIGHT]);

    const widthScale = d3
      .scalePoint()
      .domain([0, 1, 2])
      .range([0, SVG_WIDTH - SVG_WIDTH / 3]);

    d3.select('svg')
      .selectAll('rect')
      .data([onePtValue * 1, twoPtValue * 2, threePtValue * 3])
      .join('rect')
      .attr('width', SVG_WIDTH / 3)
      .attr('height', (d) => heightScale(d))
      .attr('x', (d, i) => widthScale(i))
      .attr('y', 0)
      .style('fill', (d, i) => colorScale(i));
  }
});
