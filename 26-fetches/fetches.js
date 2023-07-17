// csv - comma separated values
// d3.csv(input,init(optional),row(optional))
// input = path to where the file is located
// init = object containing any custom settings that you want to apply to the request
// row = conversion function that may be specified to map and filter row objects to a more-specific representation
// If only one of init and row is specified, it is interpreted as the row conversion function if it is a function, and otherwise an init object.

// let csv1 = d3.csv('username.csv');
// console.log(csv1);
// csv1.then((data) => console.log(data));

// csv1 = d3.csv('username.csv', (d) => {
//   return {
//     username: d.Username.toUpperCase(),
//   };
// });
// csv1.then((data) => console.log(data)).catch((err) => console.log(err, 'csv'));

// ----------------------------------------------------------------------------------------------
// tsv - tab separated values
// d3.tsv(input,init(optional),row(optional))
// input = path to where the file is located
// init = object containing any custom settings that you want to apply to the request
// row = conversion function that may be specified to map and filter row objects to a more-specific representation
// If only one of init and row is specified, it is interpreted as the row conversion function if it is a function, and otherwise an init object.

// let tsv1 = d3.tsv('username.tsv');
// console.log(tsv1);
// tsv1.then((data) => console.log(data));

// tsv1 = d3.tsv('username.tsv', (d) => {
//   return {
//     username: d.Username.toUpperCase(),
//   };
// });
// tsv1.then((data) => console.log(data)).catch((err) => console.log(err, 'tsv'));

// dsv - delimiter separated values
// d3.tsv(delimiter,input,init(optional),row(optional))
// delimiter - type of delimiter(,.*)
// input = path to where the file is located
// init = object containing any custom settings that you want to apply to the request
// row = conversion function that may be specified to map and filter row objects to a more-specific representation
// If only one of init and row is specified, it is interpreted as the row conversion function if it is a function, and otherwise an init object.

// let dsv1 = d3.dsv(';', 'username.dsv');
// console.log(dsv1);
// dsv1.then((data) => console.log(data));

// dsv1 = d3.dsv(';', 'username.dsv', (d) => {
//   return {
//     username: d.Username.toUpperCase(),
//   };
// });
// dsv1.then((data) => console.log(data)).catch((err) => console.log(err, 'dsv'));

// ----------------------------------------------------------------------------------------------

// text
// d3.text(input,init(optional))
// input = path to where the file is located
// init = object containing any custom settings that you want to apply to the request

// let text1 = d3.text('text.txt');
// console.log(text1);
// text1.then((data) => console.log(data));

// text1 = d3.text('text.txt', (d) => {
//   return {
//     username: d.Username.toUpperCase(),
//   };
// });
// text1
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err, 'text'));

// ----------------------------------------------------------------------------------------------

// json
// d3.json(input,init(optional))
// input = path to where the file is located
// init = object containing any custom settings that you want to apply to the request

// let json1 = d3.text('username.json');
// console.log(json1);
// json1.then((data) => console.log(data));

// json1 = d3.text('username.json', (d) => {
//   return {
//     username: d.Username.toUpperCase(),
//   };
// });
// json1
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err, 'json'));

// ----------------------------------------------------------------------------------------------

// html
// d3.html(input,init(optional))
// input = path to where the file is located
// init = object containing any custom settings that you want to apply to the request

// let html1 = d3.html('fetches.html');
// console.log(html1);

// html1
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err, 'html'));

// ----------------------------------------------------------------------------------------------

// xml
// d3.xml(input,init(optional))
// input = path to where the file is located
// init = object containing any custom settings that you want to apply to the request

// let xml1 = d3.xml('note.xml');
// console.log(xml1);

// xml1.then((data) => console.log(data)).catch((err) => console.log(err, 'xml'));

// ----------------------------------------------------------------------------------------------

// image
// d3.image(input,init(optional))
// input = path to where the file is located
// init = object containing any custom settings that you want to apply to the request

// let image1 = d3.image('sample.png');
// console.log(image1);

// image1
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err, 'image'));

// ----------------------------------------------------------------------------------------------

// svg
// d3.svg(input,init(optional))
// input = path to where the file is located
// init = object containing any custom settings that you want to apply to the request

let svg1 = d3.svg('sample.svg');
console.log(svg1);

svg1.then((data) => console.log(data)).catch((err) => console.log(err, 'svg'));
