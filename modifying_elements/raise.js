// select.raise

const raise1 = d3.select('rect:nth-of-type(1)').raise();
const raise2 = d3.select('rect:nth-of-type(2)').raise();

console.log(raise1, raise2);
