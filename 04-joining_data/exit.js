// select.exit()

const allCircle = d3.selectAll('circle');

const dataArray = [15, 15, 15];

const allCircleData = allCircle.data(dataArray);
console.log(allCircleData);

const exit = allCircleData.exit();
console.log(exit);

// exit.remove();

// d3.selectAll('circle').attr('r', (d) => d);
