d3.csv('project_best5_countries.csv', (d) => ({
  country: d.Country.toUpperCase(),
  gdp: Number(d.GDP),
  adv: Number(d.Adventure),
  ci: Number(d['Cultural Influence']),
  ent: Number(d.Entrepreneurship),
  her: Number(d.Heritage),
  pow: Number(d.Power),
})).then((data) => {
  // console.log(data);

  const SVG = d3.select('#chart svg');
  const WIDTH = SVG.node().clientWidth;
  const HEIGHT = SVG.node().clientHeight;
  const BUFFER = 35;

  const Y_SCALE = d3
    .scaleLinear()
    .domain([100, 0])
    .range([BUFFER, HEIGHT - BUFFER]);
  const Y_AXIS = d3.axisLeft(Y_SCALE);
  const Y_AXIS_G = SVG.append('g')
    .attr('id', 'yAxis')
    .attr('transform', `translate(${BUFFER}, 0)`);
  Y_AXIS(Y_AXIS_G);

  const X_SCALE = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.gdp)])
    .range([BUFFER, WIDTH - BUFFER]);
  const X_AXIS = d3.axisBottom(X_SCALE);
  const X_AXIS_G = SVG.append('g')
    .attr('id', 'xAxis')
    .attr('transform', `translate(0, ${HEIGHT - BUFFER})`);
  X_AXIS(X_AXIS_G);

  SVG.append('g')
    .attr('id', 'minorYAxis')
    .attr('transform', `translate(${BUFFER},${HEIGHT - BUFFER})`);

  for (let i = 0; i < 5000; i += 500) {
    d3.select('#minorYAxis')
      .append('line')
      .attr('x1', X_SCALE(i) - BUFFER)
      .attr('x2', X_SCALE(i) - BUFFER)
      .attr('y1', 0)
      .attr('y2', -(HEIGHT - 2 * BUFFER))
      .style('stroke', 'gray')
      .style('stroke-width', '0.1');
  }

  SVG.append('g')
    .attr('id', 'minorXAxis')
    .attr('transform', `translate(${BUFFER},${HEIGHT})`);

  for (let i = 0; i <= 100; i += 10) {
    d3.select('#minorXAxis')
      .append('line')
      .attr('x1', '0')
      .attr('y1', -Y_SCALE(i))
      .attr('x2', WIDTH - 2 * BUFFER)
      .attr('y2', -Y_SCALE(i))
      .style('stroke', 'gray')
      .style('stroke-width', '0.1');
  }

  // chart
  const CHART = SVG.append('g')
    .attr('id', 'chart')
    .attr('transform', `translate(${BUFFER},${HEIGHT - BUFFER})`);

  data.forEach((item, index) => {
    CHART.append('g').attr('id', `${item.country}`);

    d3.select(`#${item.country}`)
      .selectAll('path')
      .data([item.adv, item.ci, item.ent, item.her, item.pow])
      .join('path')
      .each((d, i, n) => {
        d3.select(n[i])
          .attr(
            'transform',
            `translate(${X_SCALE(item.gdp) - BUFFER}, ${-(
              HEIGHT -
              BUFFER -
              Y_SCALE(d)
            )})`
          )
          .attr('d', d3.symbol().type(d3.symbols[i]))
          .style('fill', d3.schemeDark2[index]);
      });

    d3.select(`#${item.country}`)
      .selectAll('text')
      .data([item.adv, item.ci, item.ent, item.her, item.pow])
      .join('text')
      .each((d, i, n) => {
        d3.select(n[i])
          .text((d) => d)
          .attr('x', X_SCALE(item.gdp) - BUFFER - 10)
          .attr('y', -(HEIGHT - BUFFER - Y_SCALE(d)))
          .style('text-anchor', 'end')
          .style('font-size', '0.5rem')
          .style('font-weight', 'bold')
          .style('fill', d3.schemeDark2[index]);
      });
  });

  data.forEach((item, index) => {
    d3.select('#legend1')
      .append('p')
      .text(item.country)
      .style('color', d3.schemeDark2[index]);
  });

  data.columns.forEach((item, index) => {
    if (index === 0 || index == 1) {
    } else {
      d3.select('#legend2')
        .append('div')
        .append('svg')
        .attr('width', '15')
        .attr('height', '15')
        .append('path')
        .attr('transform', 'translate(7.5, 7.5)')
        .attr('d', d3.symbol().type(d3.symbols[index - 2]))
        .style('fill', d3.schemeDark2[index]);
    }
  });
  d3.select('#legend2')
    .selectAll('div')
    .each((d, i, n) => {
      d3.select(n[i])
        .append('p')
        .text(data.columns[i + 2]);
    });
});
