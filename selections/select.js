const h1 = d3.select('h1');
console.log(h1);

const circles = d3.select('#circles');
console.log(circles);

const rects = d3.select('#rects');
console.log(rects);

const secondCircle = d3.select('circle:nth-of-type(2)');
console.log(secondCircle);

const firstRect = rects.select('rect');
console.log(firstRect);

rects.select(function (d, i, n) {
  console.log({
    d, // 元素綁定的數據，如果沒有綁定數據則為undefined
    i, // 是元素在選擇集（selection）中的索引
    n, // 是當前選中的元素對應的DOM節點
  });
  console.log(n[i], this);
});
