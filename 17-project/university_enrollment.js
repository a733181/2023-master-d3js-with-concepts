const ugEnroll = {
  1970: {
    female: 3118,
    male: 4249,
  },
  1975: {
    female: 4422,
    male: 5257,
  },
  1980: {
    female: 5474,
    male: 5000,
  },
  1985: {
    female: 5634,
    male: 4962,
  },
  1990: {
    female: 6579,
    male: 5379,
  },
};

const SVG_WIDTH = d3.select('#chart svg').node().clientWidth;
const SVG_HEIGHT = d3.select('#chart svg').node().clientHeight;

const years = Object.keys(ugEnroll);

const female = [];
const male = [];
Object.values(ugEnroll).forEach((obj) => {
  female.push(obj.female);
  male.push(obj.male);
});

const colors = d3
  .scaleOrdinal()
  .domain(['female', 'male'])
  .range(['#fcd88a', '#99d594']);

const y = d3
  .scaleLinear()
  .domain([0, Math.max(...female, ...male)])
  .range([0, SVG_HEIGHT - 60]);

const x = d3
  .scaleLinear()
  .domain([0, years.length - 1])
  .range([SVG_WIDTH / years.length, SVG_WIDTH]);

const yearG = d3
  .select('#chart svg')
  .append('g')
  .attr('id', 'years')
  .style('fill', 'gray')
  .style('font-weight', '600')
  .style('font-size', '14px');

yearG
  .selectAll('text')
  .data(years)
  .join('text')
  .text((d) => d)
  .attr('x', (d, i) => x(i) - x(0) / 2)
  .attr('y', SVG_HEIGHT - 5)
  .style('text-anchor', 'middle');

const femaleG = d3.select('#chart svg').append('g').attr('id', 'female');
femaleG
  .selectAll('rect')
  .data(female)
  .join('rect')
  .attr('width', 50)
  .attr('height', (d) => y(d))
  .attr('x', (d, i) => x(i) - x(0) / 2 - 50)
  .attr('y', (d) => SVG_HEIGHT - y(d) - 25)
  .attr('rx', 5)
  .attr('ry', 5)
  .style('fill', () => colors('female'));
femaleG
  .selectAll('text')
  .data(female)
  .join('text')
  .text((d) => d)
  .attr('x', (d, i) => x(i) - x(0) / 2 - 25)
  .attr('y', (d) => SVG_HEIGHT - y(d) - 30)
  .style('fill', () => colors('female'))
  .style('font-size', '12px')
  .style('text-anchor', 'middle');

const maleG = d3.select('#chart svg').append('g').attr('id', 'male');
maleG
  .selectAll('rect')
  .data(male)
  .join('rect')
  .attr('width', 50)
  .attr('height', (d) => y(d))
  .attr('x', (d, i) => x(i) - x(0) / 2 + 2)
  .attr('y', (d) => SVG_HEIGHT - y(d) - 25)
  .attr('rx', 5)
  .attr('ry', 5)
  .style('fill', () => colors('male'));
maleG
  .selectAll('text')
  .data(male)
  .join('text')
  .text((d) => d)
  .attr('x', (d, i) => x(i) - x(0) / 2 + 27)
  .attr('y', (d) => SVG_HEIGHT - y(d) - 30)
  .style('fill', () => colors('male'))
  .style('font-size', '12px')
  .style('text-anchor', 'middle');

document.querySelector('#legend').querySelector('p').style.color =
  colors('female');
document
  .querySelector('#legend')
  .querySelector('p:nth-of-type(2)').style.color = colors('male');
