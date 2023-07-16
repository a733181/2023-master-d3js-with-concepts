// d3.interpolate(a,b)

let interpolate1 = d3.interpolate(1, 10);
console.log(interpolate1);
console.log(interpolate1(0));
console.log(interpolate1(0.5));
console.log(interpolate1(1));
console.log(interpolate1(10));

interpolate1 = d3.interpolate(1, null);
console.log(interpolate1(0));
console.log(interpolate1(0.5));
console.log(interpolate1(1));
console.log(interpolate1(10));

interpolate1 = d3.interpolate(1, undefined);
console.log(interpolate1(0));
console.log(interpolate1(0.5));
console.log(interpolate1(1));
console.log(interpolate1(10));

interpolate1 = d3.interpolate(1, true);
console.log(interpolate1(0));
console.log(interpolate1(0.5));
console.log(interpolate1(1));
console.log(interpolate1(10));

interpolate1 = d3.interpolate('', false);
console.log(interpolate1(0));
console.log(interpolate1(0.5));
console.log(interpolate1(1));
console.log(interpolate1(10));

// d3.interpolate(a,b)
// If b is number, a is coerced to number then
// equivalent to
// d3.interpolateNumber(a,b)
// Returns an interpolator between the two numbers a and b.

interpolate1 = d3.interpolate('1', 10);
let interpolateNumber1 = d3.interpolateNumber(1, 10);
console.log(interpolate1(0));
console.log(interpolate1(0.5));
console.log(interpolate1(1));
console.log(interpolate1(10));
console.log(interpolateNumber1(0));
console.log(interpolateNumber1(0.5));
console.log(interpolateNumber1(1));
console.log(interpolateNumber1(10));

// d3.interpolate(a,b)
// If b is a date, then
// equivalent to
// d3.interpolateDate(a,b)
// Returns an interpolator between the two dates a and b.

interpolate1 = d3.interpolate(1, '10');
let interpolateString1 = d3.interpolateString('1', '10');
console.log(interpolate1(0));
console.log(interpolate1(0.5));
console.log(interpolate1(1));
console.log(interpolate1(10));
console.log(interpolateString1(0));
console.log(interpolateString1(0.5));
console.log(interpolateString1(1));
console.log(interpolateString1(10));

interpolate1 = d3.interpolate(1, 'A');
interpolateString1 = d3.interpolateString('A', 'G');
console.log(interpolate1(0));
console.log(interpolate1(0.5));
console.log(interpolate1(1));
console.log(interpolate1(10));
console.log(interpolateString1(0));
console.log(interpolateString1(0.5));
console.log(interpolateString1(1));
console.log(interpolateString1(10));

interpolate1 = d3.interpolate('Is A0', 'Is G5');
interpolateString1 = d3.interpolateString('Is A1', 'Is J2');
console.log(interpolate1(0));
console.log(interpolate1(0.5));
console.log(interpolate1(1));
console.log(interpolate1(10));
console.log(interpolateString1(0));
console.log(interpolateString1(0.5));
console.log(interpolateString1(1));
console.log(interpolateString1(10));

// d3.interpolate(a,b)
// If b is a date, then
// equivalent to
// d3.interpolateDate(a,b)
// Returns an interpolator between the two dates a and b.

interpolate1 = d3.interpolate('567255', new Date(2020, 0, 31));
let interpolateDate1 = d3.interpolateDate(
  new Date(2010, 5, 31),
  new Date(2020, 0, 31)
);

console.log(interpolate1(0));
console.log(interpolate1(0.5));
console.log(interpolate1(1));
console.log(interpolate1(10));
console.log(interpolateDate1(0));
console.log(interpolateDate1(0.5));
console.log(interpolateDate1(1));
console.log(interpolateDate1(10));

// d3.interpolate(a,b)
// If b is generic array, then
// equivalent to
// d3.interpolateArray(a,b)
// Returns an interpolator between the two arrays of numbers a and b.

interpolate1 = d3.interpolate('567255', [10, 20, 30]);
let interpolateArray = d3.interpolateArray([56, 72, 55], [10, 20, 30]);
console.log(interpolate1(0));
console.log(interpolate1(0.5));
console.log(interpolate1(1));
console.log(interpolate1(10));
console.log(interpolateArray(0));
console.log(interpolateArray(0.5));
console.log(interpolateArray(1));
console.log(interpolateArray(10));

// d3.interpolate(a,b)
// if a and b are 2 objects
// Returns an interpolator between the two objects a and b. Internally, an object template is created that has the same properties as b. For each property in b, if there exists a corresponding property in a, a generic interpolator is created for the two elements using interpolate. If there is no such property, the static value from b is used in the template.

interpolate1 = d3.interpolate({ value: 10 }, { value: 20 });
let interpolateObject1 = d3.interpolateObject({ value: 10 }, { value: 20 });
console.log(interpolate1(0));
console.log(interpolate1(0.5));
console.log(interpolate1(1));
console.log(interpolate1(10));
console.log(interpolateObject1(0));
console.log(interpolateObject1(0.5));
console.log(interpolateObject1(1));
console.log(interpolateObject1(10));

// d3.interpolate(a,b)
// If b is a color, or a string coercible to color then
// equivalent to
// d3.interpolateRgb(a,b)
// Returns an RGB color space interpolator between the two colors a and b. The colors a and b need not be in RGB; they will be converted to RGB. Output is RGB string

interpolate1 = d3.interpolate('#255', 'Blue');
let interpolateRgb1 = d3.interpolateRgb('Red', 'Blue');
console.log(interpolate1(0));
console.log(interpolate1(0.5));
console.log(interpolate1(1));
console.log(interpolate1(10));
console.log(interpolateRgb1(0));
console.log(interpolateRgb1(0.5));
console.log(interpolateRgb1(1));
console.log(interpolateRgb1(10));

// d3.interpolateHsl(a,b)
// d3.interpolateLab(a,b)

// d3.interpolateRound(a,b)
// Returns an interpolator between the two numbers a and b; the interpolator is similar to interpolateNumber, except it will round the resulting value to the nearest integer.
interpolate1 = d3.interpolate('1', 10);
let interpolateRound1 = d3.interpolateRound(1, 10);
console.log(interpolate1(0));
console.log(interpolate1(0.5));
console.log(interpolate1(1));
console.log(interpolate1(10));
console.log(interpolateRound1(0));
console.log(interpolateRound1(0.5));
console.log(interpolateRound1(1));
console.log(interpolateRound1(10));
