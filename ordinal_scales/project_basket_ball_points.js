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

    const colorScale = d3
      .scaleOrdinal()
      .domain([0, 1, 2])
      .range(['red', 'blue', 'green']);

    const radiusScale = d3
      .scaleLinear()
      .domain([0, Math.max(onePtValue * 1, twoPtValue * 2, threePtValue * 3)])
      .range([0, 100]);

    d3.select('svg')
      .selectAll('circle')
      .data([onePtValue * 1, twoPtValue * 2, threePtValue * 3])
      .join('circle')
      .attr('cx', (d, i) => 100 + i * 200)
      .attr('cy', 100)
      .attr('r', (d) => radiusScale(d))
      .style('fill', (d, i) => colorScale(i));
  }
});
