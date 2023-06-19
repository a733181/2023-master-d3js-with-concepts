document.querySelector('button').addEventListener('click', () => {
  const cement = parseInt(document.querySelector('#cement').value);
  const blast = parseInt(document.querySelector('#blast').value);
  const ash = parseInt(document.querySelector('#ash').value);
  const age = parseInt(document.querySelector('#age').value);

  const cementColor = d3
    .scaleDiverging()
    .domain([101, 622.5, 1425])
    .interpolator(d3.interpolateGreys);

  const domainValue = cement + blast + ash + age;

  if (
    cement < 100 ||
    cement > 500 ||
    blast < 0 ||
    blast > 360 ||
    ash < 0 ||
    ash > 200 ||
    age < 1 ||
    age > 365 ||
    domainValue === 0
  ) {
    return;
  } else {
    d3.select('svg rect').attr('fill', cementColor(domainValue));
    d3.select('svg text')
      .text(cementColor(domainValue))
      .attr('x', '10')
      .attr('y', '480');
  }
});
