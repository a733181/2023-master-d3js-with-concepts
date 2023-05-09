// select.text(value)

let text1 = d3.select('text').text();
console.log(text1);

text1 = d3.select('text').text('Text 1');

text1.text(null);

const texts = d3.selectAll('text').text('D3');
console.log(texts);

texts.text(function (d, i, n) {
  return `Line ${i}`;
});
