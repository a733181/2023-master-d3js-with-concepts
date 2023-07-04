// select.insert(type,before)

const svg1 = d3.select('#svg1');

const text1 = svg1.insert('text').text('text1').attr('x', '5').attr('y', '40');
const text2 = svg1.insert('text').text('text2').attr('x', '5').attr('y', '20');
const text3 = svg1.insert('text').text('text3').attr('x', '5').attr('y', '60');

const svg2 = d3.select('#svg2');

for (let i = 0; i < 2; i++) {
  svg2
    .insert(
      function () {
        return document.createElementNS('http://www.w3.org/2000/svg', 'text');
      },
      function () {
        console.log(this.firstElementChild);
        return this.firstElementChild;
      }
    )
    .text(`${i}`)
    .attr('x', '5')
    .attr('y', `${i * 20 + 20}`);
}
