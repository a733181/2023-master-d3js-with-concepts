// select.html(value)

let h1 = d3.select('h1').html();
console.log(h1);

h1 = d3.select('h1').html('HTML');
h1 = d3.select('h1').html();
console.log(h1);

d3.select('div').html('<h2>D3</h2>');
d3.select('div').html(null);
d3.select('div').html(function () {
  let content = '';

  for (let i = 0; i < 5; i++) {
    content += `<p> index ${i}</p>`;
  }

  return content;
});
