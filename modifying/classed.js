// select.classed(name,value)

const line1 = d3.select('line').classed('gray');
console.log(line1);

let lines = d3.selectAll('line').classed('gray', true);
console.log(lines);

// 取消 class
lines = d3.selectAll('line').classed('gray', false);

// 刪除 class
d3.selectAll('line').attr('class', null);

lines = d3.selectAll('line').classed('stroke-width stroke-opacity', true);

lines.classed('dasharry', function (d, i, n) {
  console.log({ d, i, n });

  return i % 2 === 0 ? true : false;
});
