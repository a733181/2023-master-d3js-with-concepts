let fordData = [
  {
    quarter: 'Q1',
    year: 2018,
    truck: 109276,
    suv: 82395,
    car: 52635,
  },
  {
    quarter: 'Q2',
    year: 2018,
    truck: 100683,
    suv: 84617,
    car: 45335,
  },
  {
    quarter: 'Q3',
    year: 2018,
    truck: 93408,
    suv: 66884,
    car: 37112,
  },
  {
    quarter: 'Q4',
    year: 2018,
    truck: 106599,
    suv: 79225,
    car: 34950,
  },
  {
    quarter: 'Q1',
    year: 2019,
    truck: 278898,
    suv: 213086,
    car: 98265,
  },
  {
    quarter: 'Q2',
    year: 2019,
    truck: 324243,
    suv: 215898,
    car: 110195,
  },
  {
    quarter: 'Q3',
    year: 2019,
    truck: 309920,
    suv: 193100,
    car: 77231,
  },
  {
    quarter: 'Q4',
    year: 2019,
    truck: 330075,
    suv: 208387,
    car: 63400,
  },
];

const years = new Set();

fordData.forEach((d) => years.add(d.year));
const yearArray = Array.from(years);

const yearlyData = yearArray.map((year) => {
  return fordData.reduce((sum, d) => {
    if (d.year === year) {
      return sum + d.truck + d.suv + d.car;
    }
    return sum;
  }, 0);
});

d3.select('#gen-info').on('click', function (e, d) {
  document.querySelector('#gen-info').disabled = true;

  const yearsSvgHeight = document.querySelector('#years svg').clientHeight;

  d3.select('#years p').text('Number of Vehicles');

  const yearsSvg = d3.select('#years svg').selectAll('rect');

  yearsSvg
    .data(yearlyData)
    .join('rect')
    .attr('x', 0)
    .attr('y', (d, i) => (yearsSvgHeight / 4) * (i + 1))
    .attr('height', (d, i) => yearsSvgHeight / 4 - 5)
    .attr('width', (d) => d / 10000)
    .attr('id', (d, i) => `${yearArray[i]}`)
    .style('fill', (d, i) => {
      if (i === 0) {
        return 'steelblue';
      } else {
        return 'dodgerblue';
      }
    })
    .style('cursor', 'pointer');

  yearsSvg
    .data(yearlyData)
    .join('text')
    .attr('x', (d) => d / 10000 + 10)
    .attr('y', (d, i) => {
      return (yearsSvgHeight / 4) * (i + 1) + yearsSvgHeight / 4 / 2;
    })
    .text((d, i) => {
      return `${yearArray[i]}-${d}`;
    })
    .style('font-size', 12)
    .style('font-weight', 500)
    .style('fill', 'gray');

  d3.select('#quarters p').text('Click on a year bar for more details');

  d3.select('#years')
    .selectAll('rect')
    .on('click', function (e, d) {
      d3.select('#quarters p').text(`${this.id}:Quarterly Break-up`);
      const quarterlyData = fordData.filter(
        (d) => e.target.id === String(d.year)
      );

      const quartersSvg = d3.select('#quarters svg');

      const quartersSvgHeight =
        document.querySelector('#quarters svg').clientHeight;

      quartersSvg
        .selectAll('rect')
        .data(quarterlyData)
        .join('rect')
        .attr('x', 0)
        .attr('y', (d, i) => {
          return (quartersSvgHeight / 6) * (i + 1);
        })
        .attr('height', () => {
          return quartersSvgHeight / 6 - 5;
        })
        .attr('width', (d) => (d.truck + d.suv + d.car) / 1500)
        .attr('id', (d) => `${d.quarter}`)
        .style('fill', 'skyblue')
        .style('cursor', 'pointer');

      quartersSvg
        .selectAll('text')
        .data(quarterlyData)
        .join('text')
        .attr('x', (d) => (d.truck + d.suv + d.car) / 1500 + 10)
        .attr(
          'y',
          (d, i) =>
            (quartersSvgHeight / 6) * (i + 1) + quartersSvgHeight / 6 / 2
        )
        .text((d, i) => `${d.quarter}-${d.truck + d.suv + d.car}`)
        .style('font-size', 12)
        .style('font-weight', 500)
        .style('fill', 'gray');

      d3.select('#vehicles p').text('Hover on a quarter bar for vehicle types');

      d3.select('#quarters svg')
        .selectAll('rect')
        .on('mouseenter', function (e, d) {
          d3.select('#vehicles p').text(
            `${d.year} | ${d.quarter} : Vehicle type break up`
          );

          const vehiclesSvg = d3.select('#vehicles svg');

          const vehiclesSvgHeight =
            document.querySelector('#vehicles svg').clientHeight;

          vehiclesSvg
            .selectAll('rect')
            .data([d.truck, d.suv, d.car])
            .join('rect')
            .attr('width', (d) => d / 1000)
            .attr('height', () => vehiclesSvgHeight / 5 - 5)
            .attr('x', 0)
            .attr('y', (d, i) => (vehiclesSvgHeight / 5) * (i + 1))
            .style('fill', (d, i) => {
              if (i === 0) {
                return '#38ACEC';
              }
              if (i === 1) {
                return '#79BAEC';
              }
              return '#A0CFEC';
            });

          vehiclesSvg
            .selectAll('text')
            .data([d.truck, d.suv, d.car])
            .join('text')
            .attr('x', (d) => d / 1000 + 10)
            .attr(
              'y',
              (d, i) =>
                (vehiclesSvgHeight / 5) * (i + 1) + vehiclesSvgHeight / 5 / 2
            )
            .text((d, i) => {
              if (i === 0) {
                return 'Trucks-' + d;
              }
              if (i === 1) {
                return 'SUV-' + d;
              }
              return 'CARS-' + d;
            })
            .style('font-size', 12)
            .style('font-weight', 500)
            .style('fill', 'gray');
        });
    });
});
