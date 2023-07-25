d3.csv('project_business_outreach_spending.csv', (d) => ({
  month: d['Month'].substring(0, 3).toUpperCase(),
  mktg: Number(d.Marketing),
  sales: Number(d.Sales),
  dMktg: Number(d['Digital Marketing']),
})).then((data) => {
  // console.log(data);

  const MAX = {
    MKTG: d3.max(data, (d) => d.mktg),
    SALES: d3.max(data, (d) => d.sales),
    DMKTG: d3.max(data, (d) => d.dMktg),
  };
  MAX.VALUE = d3.max([MAX.MKTG, MAX.SALES, MAX.DMKTG]);

  const SVG = d3.select('#chart svg');
  const BUFFER = 35;
  const WIDTH = SVG.node().clientWidth;
  MAX.RADIUS = WIDTH / 2 - BUFFER;

  SVG.append('g')
    .attr('id', 'radialChart')
    .attr('transform', `translate(${WIDTH / 2}, ${WIDTH / 2})`);

  const RADIAL_SCALE = d3
    .scaleLinear()
    .domain([0, MAX.VALUE])
    .range([0, MAX.RADIUS]);

  const RADIAL_LINE = d3
    .lineRadial()
    .angle((d) => d[0] * (Math.PI / 100))
    .radius((d) => RADIAL_SCALE(d[1]));

  const ANGEL = 360 / data.length;

  data.forEach((spend, index) => {
    SVG.select('#radialChart')
      .append('path')
      .attr('id', `axisMoth${index}`)
      .attr(
        'd',
        RADIAL_LINE([
          [index * ANGEL, 0],
          [index * ANGEL, MAX.VALUE],
        ])
      )
      .style('fill', 'none')
      .style('stroke-width', '0.5')
      .style('stroke', '#ccc');

    const PATH_LENGTH = SVG.select(`#axisMoth${index}`).node().getTotalLength();

    SVG.select(`#axisMoth${index}`)
      .style('stroke-dasharray', PATH_LENGTH)
      .style('stroke-dashoffset', PATH_LENGTH)
      .transition()
      .duration(2000)
      .style('stroke-dashoffset', 0);

    const PATH = RADIAL_LINE([
      [index * ANGEL, 0],
      [index * ANGEL, MAX.VALUE],
    ]);

    const SELECT_INDEX = PATH.indexOf('L');
    const SELECT_POSITION = PATH.slice(SELECT_INDEX + 1);
    let [X, Y] = [...SELECT_POSITION.split(',')];

    SVG.select('#radialChart')
      .append('text')
      .attr('class', 'axisMonthText')
      .text(() => spend.month)
      .attr('x', Number(X) + 10)
      .attr('y', Number(Y) + 10)
      .style('text-anchor', 'middle')
      .style('font-size', '9')
      .style('fill', '#666')
      .transition()
      .duration(2000)
      .style('fill', '#333');
  });

  function createMinorAxis(rad) {
    SVG.select('#radialChart')
      .append('g')
      .attr('class', 'minorAxis')
      .selectAll('path')
      .data([data])
      .join('path')
      .attr(
        'd',
        d3
          .lineRadial()
          .angle((d, i) => i * ANGEL * (Math.PI / 180))
          .radius(() => RADIAL_SCALE(MAX.VALUE / rad))
          .curve(d3.curveLinearClosed)
      )
      .style('fill', 'none')
      .style('stroke', '#ccc')
      .style('stroke-width', '0.5');
  }

  createMinorAxis(2);
  createMinorAxis(1);

  function createRadialLine(dept, color) {
    SVG.select('#radialChart')
      .append('g')
      .attr('id', dept)
      .selectAll('path')
      .data([data])
      .join('path')
      .attr(
        'd',
        d3
          .lineRadial()
          .angle((d, i) => i * ANGEL * (Math.PI / 180))
          .radius((d) => RADIAL_SCALE(d[dept]))
          .curve(d3.curveLinearClosed)
      )
      .style('fill', 'none')
      .style('stroke-width', '2')
      .style('stroke-opacity', '0.65')
      .style('stroke', color);

    const PATH_LENGTH = SVG.select(`#${dept} path`).node().getTotalLength();

    SVG.select(`#${dept} path`)
      .style('stroke-dasharray', PATH_LENGTH)
      .style('stroke-dashoffset', PATH_LENGTH)
      .transition()
      .delay(2000)
      .duration(2000)
      .style('stroke-dashoffset', 0);
  }
  createRadialLine('mktg', 'orange');
  createRadialLine('sales', 'chocolate');
  createRadialLine('dMktg', 'saddlebrown');

  function createValues(dept, color) {
    let DATA_ATTRIBUTE = d3.select(`#${dept}`).select('path').attr('d');
    DATA_ATTRIBUTE = DATA_ATTRIBUTE.slice(1);
    DATA_ATTRIBUTE = DATA_ATTRIBUTE.substring(0, DATA_ATTRIBUTE.length - 1);
    DATA_ATTRIBUTE = DATA_ATTRIBUTE.split('L');

    DATA_ATTRIBUTE.forEach(function (point, index) {
      let SPLIT_POINTS = point.split(',');

      d3.select(`#${dept}`)
        .append('text')
        .text(d3.format('$.2s')(data[index][dept]))
        .attr('x', SPLIT_POINTS[0])
        .attr('y', SPLIT_POINTS[1])
        .style('font-size', '11')
        .style('font-weight', '600')
        .style('fill', 'white')
        .transition()
        .delay(2000)
        .duration(2000)
        .style('fill', color);
    });
  }

  createValues('mktg', 'orange');
  createValues('sales', 'chocolate');
  createValues('dMktg', 'saddlebrown');
});
// .catch((error) => {
//   console.log(error);
// });
