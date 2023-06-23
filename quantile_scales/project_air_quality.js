const airQualityScale = d3
  .scaleQuantile()
  .domain([10, 12, 35.4, 55.4, 150.4, 250.4])
  .range([
    'dodgerblue',
    'mediumseagreen',
    'yellow',
    'orange',
    'tomato',
    'violet',
    'lightgray',
  ]);

const legend = new Map();

legend.set('dodgerblue', 'WHO Target');
legend.set('mediumseagreen', 'Good');
legend.set('yellow', 'Moderate');
legend.set('orange', 'Unhealthy for Sensitive Groups');
legend.set('tomato', 'Unhealthy');
legend.set('violet', 'Very Unhealthy');
legend.set('lightgray', 'Harzardous');

document.querySelector('button').addEventListener('click', () => {
  const value = document.querySelector('input').value;
  if (value >= 0) {
    d3.select('#output svg')
      .selectAll('rect')
      .attr('width', 520)
      .attr('height', 50)
      .attr('rx', 5)
      .attr('ry', 5)
      .attr('x', 10)
      .attr('y', 30)
      .attr('fill', () => airQualityScale(value));

    document.querySelector('#output p').innerHTML = legend.get(
      airQualityScale(value)
    );
    document.querySelector('#output p').style.color = airQualityScale(value);
  } else {
    d3.select('#output svg').selectAll('rect').attr('fill', '#ffffff00');
    document.querySelector('#output p').innerHTML = '';
  }
});
