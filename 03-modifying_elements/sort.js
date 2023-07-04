// select.sort(compare)

d3.selectAll('p').datum(function () {
  return this.innerText;
});

console.log(d3.selectAll('p'));

d3.selectAll('p')
  .datum(function () {
    return this.innerText;
  })
  .sort((a, b) => b - a) // 逆序
  .sort((a, b) => a - b); // 正序

const sortCircle = d3
  .selectAll('circle')
  .datum(function () {
    return d3.select(this).attr('r');
  })
  .sort((a, b) => a - b)
  .attr('cx', function (d, i) {
    return 60 + i * 80;
  })
  .sort((a, b) => b - a)
  .attr('cx', function (d, i) {
    return 60 + i * 80;
  });

console.log(sortCircle);
