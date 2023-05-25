// select.on(tlypenames,listener,options)

let svg = d3.select('svg').on('click', function (e, d) {
  console.log({ e, d, target: e.target });
});

console.log(svg.on('click'));
console.log(svg.on('mouseover'));

svg.on('click', null);
console.log(svg.on('click'));

svg = d3.select('svg').on('click mouseover', function (e, d) {
  console.log(this);
  d3.select(this).style('fill', 'green');
  console.log(e);
  if (e.type === 'click') {
    d3.select(this).style('fill', 'blue');
  }
  if (e.type === 'mouseover') {
    d3.select(this).style('fill', 'red');
  }
});

svg = d3.select('svg').on('mouseup', function (e, d) {
  console.log('mouse up');
});

svg = d3.select('svg').on('click', function (e, d) {
  d3.select(this).style('fill', 'pink');
});

svg.on('click', null);

svg.on('.', null);

svg = d3
  .select('svg')
  .selectAll('rect')
  .on('click.1 click.2', function (e, d) {
    console.log({ e, d, el: this });

    if (e.target.__on[0].name === '1') {
      d3.select(this).style('fill', 'orange');
    }
    // if (e.target.__on[1].name === '2') {
    //   d3.select(this).style('fill', 'peachpuff');
    // }
  });

d3.select('svg').selectAll('rect').on('.1 .2', null);
