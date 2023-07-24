d3.csv('project_atlanta_airport.csv', (d) => ({
  year: Number(d.Year),
  passengers: Number(d.Passengers),
})).then((data) => {
  const SVG = d3.select('#chart svg');
  const WIDTH = SVG.node().clientWidth;
  const HEIGHT = SVG.node().clientHeight;
  const BUFFER = 35;

  const MAX = d3.max(data, (d) => d.passengers);
  const MIN = d3.min(data, (d) => d.passengers);

  const Y_SCALE = d3
    .scaleLinear()
    .domain([MAX, MIN])
    .range([BUFFER, HEIGHT - BUFFER])
    .nice();

  const X_SCALE = d3
    .scaleLinear()
    .domain([data[0].year, data[data.length - 1].year])
    .range([BUFFER, WIDTH - BUFFER])
    .nice();

  const Y_AXIS = d3.axisLeft(Y_SCALE).ticks(5);
  const Y_AXIS_G = SVG.append('g')
    .attr('id', 'yAxis')
    .attr('transform', `translate(${BUFFER}, 0)`);
  Y_AXIS(Y_AXIS_G);

  const X_AXIS = d3.axisBottom(X_SCALE).ticks(10, '.0f');
  const X_AXIS_G = SVG.append('g')
    .attr('id', 'xAxis')
    .attr('transform', `translate(0, ${HEIGHT - BUFFER})`);
  X_AXIS(X_AXIS_G);

  SVG.append('g')
    .attr('id', 'areaChart')
    .attr('transform', `translate(0, ${HEIGHT})`);

  d3.select('#areaChart')
    .selectAll('path')
    .data([data])
    .join('path')
    .attr(
      'd',
      d3.area(
        (d) => X_SCALE(d.year),
        -BUFFER,
        (d) => -(HEIGHT - Y_SCALE(d.passengers))
      )
    )
    .style('fill', 'tomato')
    .style('fill-opacity', '0.2')
    .style('stroke', 'tomato');

  data.forEach((year) => {
    d3.select('#areaChart')
      .append('text')
      .data([year])
      .join('text')
      .text((d) => d.passengers)
      .attr('x', (d) => X_SCALE(d.year))
      .attr('y', (d) => -(HEIGHT - Y_SCALE(d.passengers) + 10))
      .style('fill', 'tomato')
      .style('text-anchor', 'middle')
      .style('font-size', '12px')
      .style('font-weight', 'bold');

    d3.select('#areaChart')
      .append('circle')
      .data([year])
      .join('circle')
      .attr('cx', (d) => X_SCALE(d.year))
      .attr('cy', (d) => -(HEIGHT - Y_SCALE(d.passengers)))
      .attr('r', 5)
      .style('fill', 'tomato');
  });
});
