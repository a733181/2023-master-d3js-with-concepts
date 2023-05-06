// select.property(name,value)
// 該元素設置指定屬性的方法

const labelLsFor = [
  'firstname',
  'lastname',
  'gender',
  'male',
  'female',
  'nomention',
];

const labels = d3.selectAll('label');
console.log(labels);

labels.filter(function (d, i) {
  const d3Label = d3.select(this);
  d3Label.attr('for', labelLsFor[i]);
});

d3.select('#firstname')
  .property('type', 'text')
  .property('placeholder', 'John');

d3.select('#lastname').property('type', 'text').property('placeholder', 'Don');

const genderInputs = d3.selectAll('div input');
genderInputs.property('type', 'checkbox');

const genderValues = ['male', 'female', 'nomention'];
genderInputs.property('value', function (d, i) {
  return genderValues[i];
});

const nomention = d3.select('#nomention');
nomention.property('checked', true);

document.querySelector('#formsubmit').addEventListener('submit', (e) => {
  console.log(e);
  e.preventDefault();
  console.log(d3.select('#firstname').property('value'));
  console.log(d3.select('#lastname').property('value'));
  console.log(d3.select('#male').property('checked'));
  console.log(d3.select('#female').property('checked'));
  console.log(d3.select('#nomention').property('checked'));
});
