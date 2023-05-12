// select.remove()

const circle = d3.select('circle');
console.log(circle);

const circleRemove = circle.remove();
console.log(circleRemove);

const rect = d3.select('rect');
console.log(rect);

const rectRemove = rect.remove();
console.log(rectRemove);

d3.select('svg').remove();
