d3.csv('project_ibm_march_2020_stock_prices.csv', (d) => ({
  date: new Date(d.Date),
  close: Number(d.Close),
}))
  .then((data) => {
    const SVG = d3.select('#chart svg');

    const BUFFER = 30;
    const WIDTH = SVG.node().clientWidth - BUFFER;
    const HEIGHT = SVG.node().clientHeight - BUFFER;
    const MAX_CLOSE = d3.max(data, (d) => d.close);

    const Y_AXIS_SCALE = d3
      .scaleLinear()
      .domain([MAX_CLOSE, MAX_CLOSE / 2])
      .range([BUFFER, HEIGHT])
      .nice();
    const Y_AXIS = d3.axisLeft(Y_AXIS_SCALE).ticks(10, d3.format('$'));
    const Y_AXIS_GROUP = SVG.append('g')
      .attr('id', 'yAxis')
      .attr('transform', `translate(${BUFFER},0)`);
    Y_AXIS(Y_AXIS_GROUP);

    const X_AXIS_SCALE = d3
      .scaleTime()
      .domain([data[0].date, data[data.length - 1].date])
      .range([BUFFER, WIDTH])
      .nice();
    const X_AXIS = d3.axisBottom(X_AXIS_SCALE).ticks(15, '%d %b');
    const X_AXIS_GROUP = SVG.append('g')
      .attr('id', 'xAxis')
      .attr('transform', `translate(0,${HEIGHT})`);
    X_AXIS(X_AXIS_GROUP);

    SVG.append('g')
      .attr('id', 'lineChart')
      .selectAll('path')
      .data([data])
      .join('path')
      .attr(
        'd',
        d3
          .line()
          .x((d) => X_AXIS_SCALE(d.date))
          .y((d) => Y_AXIS_SCALE(d.close))
          .curve(d3.curveMonotoneX)
      )
      .style('fill', 'none')
      .style('stroke-width', '1.5')
      .style('stroke', 'cornflowerblue');

    const PATH = d3.select('#lineChart path');
    const PATH_LENGTH = PATH.node().getTotalLength();

    PATH.style('stroke-dasharray', PATH_LENGTH)
      .style('stroke-dashoffset', PATH_LENGTH)
      .transition()
      .duration(3000)
      .style('stroke-dashoffset', 0);

    SVG.append('g')
      .attr('id', 'lineChartDots')
      .selectAll('circle')
      .data(data)
      .join('circle')
      .attr('cx', (d) => X_AXIS_SCALE(d.date))
      .attr('cy', (d) => Y_AXIS_SCALE(d.close))
      .style('fill', 'cornflowerblue');

    d3.select('#lineChartDots')
      .selectAll('circle')
      .each((d, i, n) => {
        d3.select(n[i])
          .transition()
          .delay(100 * (i + 1))
          .duration(1000)
          .attr('r', 5);
      });

    SVG.append('g')
      .attr('id', 'lineChartText')
      .selectAll('text')
      .data(data)
      .join('text')
      .attr('x', (d) => X_AXIS_SCALE(d.date))
      .attr('y', (d) => Y_AXIS_SCALE(d.close) - 10)
      .style('fill', (d, i) => {
        if (i == 0) {
          return 'gray';
        }
        if (data[i].close - data[i - 1].close > 0) {
          return 'seagreen';
        }
        return 'tomato';
      })
      .style('text-anchor', 'start')
      .style('font-size', '10')
      .style('font-weight', '600');

    d3.select('#lineChartText')
      .selectAll('text')
      .each((d, i, n) => {
        d3.select(n[i])
          .transition()
          .delay(100 * (i + 2))
          .duration(1000)
          .text((d) => d3.format('.2f')(d.close));
      });
  })
  .catch((error) => {
    console.error(error);
  });
