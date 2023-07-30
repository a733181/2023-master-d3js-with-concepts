d3.csv('project_global_research_development_spending.csv', (d) => ({
  industry: d.Industry,
  percentage: Number(d.Percentage),
})).then((data) => {
  // console.log(data);

  const SVG = d3.select('#chart svg');
  const WIDTH = SVG.node().clientWidth;
  const HEIGHT = SVG.node().clientHeight;

  const CUMSUM = d3.cumsum(data, (d) => d.percentage);
  const SUM = d3.sum(data, (d) => d.percentage);

  data.forEach((item, index) => {
    item.startAngle = index === 0 ? 0 : (CUMSUM[index - 1] / SUM) * Math.PI * 2;
    item.endAngle = (CUMSUM[index] / SUM) * Math.PI * 2;
    item.innerRadius = (WIDTH / 2) * 0.1;
    item.outerRadius = (WIDTH / 2) * 0.9;
    item.id = index;
  });
  // console.log(data);

  const DOUNT_G = SVG.append('g')
    .attr('id', 'dountG')
    .attr('transform', `translate(${WIDTH / 2}, ${HEIGHT / 2})`);

  DOUNT_G.selectAll('path')
    .data(data)
    .join('path')
    .attr(
      'd',
      d3
        .arc()
        .innerRadius((d) => d.innerRadius)
        .outerRadius((d) => d.outerRadius)
        .startAngle((d) => d.startAngle)
        .endAngle((d) => d.endAngle)
    )
    .style('fill', (d) => d3.schemeCategory10[d.id])
    .style('fill-opacity', '0.2');

  data.forEach((item, index) => {
    const [X, Y] = d3.arc().centroid({
      innerRadius: item.outerRadius + 15,
      outerRadius: item.outerRadius + 15,
      startAngle: item.startAngle,
      endAngle: item.endAngle,
    });

    DOUNT_G.append('text')
      .text(item.percentage)
      .attr('x', X)
      .attr('y', Y)
      .style('text-anchor', 'middle')
      .style('font-weight', '500')
      .style('font-size', '10px')
      .style('fill', d3.schemeCategory10[index]);
  });

  DOUNT_G.selectAll('path').on('mouseover', (e, d) => {
    document.querySelector(
      '#output h2'
    ).innerText = `${d.industry} - ${d.percentage}%`;
    document.querySelector('#output h2').style.color = `${
      d3.schemeTableau10[d.id]
    }`;
  });
});
