// select.call(fn,args)

d3.select('svg').attr('wdith', 300).attr('height', 300);

const dataArray = [15, 25, 35];

function updateCircles(d, i, n) {
  console.log({ d, i, n });

  const element = d3.select(n[i]);
  element
    .attr(
      'cx',
      i < 1
        ? 5 + d
        : 5 + +n[i - 1].getAttribute('cx') + +n[i - 1].getAttribute('r') + d
    )
    .attr('cy', 150)
    .attr('r', d)
    .style('fill', `rgba(${d / 2},${d / 3},${d / 4},0.7)`);
}

function display(seln, rad) {
  console.log({ seln, rad });
  seln.selectAll('circle').data(rad).join('circle').each(updateCircles);
}

const circles = d3.select('svg').call(display, dataArray);
