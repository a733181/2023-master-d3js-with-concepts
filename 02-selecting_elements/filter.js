const circleAll = d3.selectAll('circle');
console.log(circleAll);

const circleAllOdd = circleAll.filter(':nth-child(odd)');
console.log(circleAllOdd);

const circleAllEven = circleAll.filter(':nth-child(even)');
console.log(circleAllEven);

const circleAllClassOdd = circleAll.filter('.odd');
console.log(circleAllClassOdd);

const circleAllClassEven = circleAll.filter('.even');
console.log(circleAllClassEven);

circleAll.filter(function (d, i, n) {
  console.log({ d, i, n });
  console.log(n[i], this);
  // this.style.fill = 'blue';
  i % 2 === 0 ? (this.style.fill = 'orange') : (this.style.fill = 'dodgerblue');
});
