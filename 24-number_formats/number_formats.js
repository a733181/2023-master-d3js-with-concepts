const value1 = 653473.12345;
const value2 = -97465.78;

// Specifier sequence as a string no spaces
// [[fill]align][sign][symbol][0][width][,][.precision][~][type]

// sign
/*
- nothing for zero or positive and a minus sign for negative. (Default behavior.)
+ a plus sign for zero or positive and a minus sign for negative.
( nothing for zero or positive and parentheses for negative.
  (space) - a space for zero or positive and a minus sign for negative.
*/

let format1 = d3.format('-');
console.log(format1(value1));
console.log(format1(value2));

format1 = d3.format('+');
console.log(format1(value1));
console.log(format1(value2));

format1 = d3.format('(');
console.log(format1(value1));
console.log(format1(value2));

format1 = d3.format(' ');
console.log(format1(value1));
console.log(format1(value2));

// symbol
/*
$ - apply currency symbols per the locale definition.
# - for binary, octal, or hexadecimal notation, prefix by 0b, 0o, or 0x, respectively.
*/

format1 = d3.format('+$');
console.log(format1(value1));
console.log(format1(value2));

format1 = d3.format('+#b');
console.log(format1(value1));
console.log(format1(value2));

format1 = d3.format('+#o');
console.log(format1(value1));
console.log(format1(value2));

format1 = d3.format('+#x');
console.log(format1(value1));
console.log(format1(value2));

// width
/*
The width defines the minimum field width; if not specified, then the width will be determined by the content.
*/

format1 = d3.format('+$25');
console.log(format1(value1));
console.log(format1(value2));

// fill = can be any character
// align
/*
> Forces the field to be right-aligned within the available space. (Default behavior).< Forces the field to be left-aligned within the available space.
^ Forces the field to be centered within the available space.
= like >, but with any sign and symbol to the left of any padding.
*/

format1 = d3.format('*>+25');
console.log(format1(value1));
console.log(format1(value2));

format1 = d3.format('*<+25');
console.log(format1(value1));
console.log(format1(value2));

format1 = d3.format('*^+25');
console.log(format1(value1));
console.log(format1(value2));

format1 = d3.format('*=+25');
console.log(format1(value1));
console.log(format1(value2));

// 0
/*
The zero (0) option enables zero-padding; this implicitly sets fill to 0 and align to =
*/

format1 = d3.format('*=-$025');
console.log(format1(value1));
console.log(format1(value2));

// ,
/*
The comma (,) option enables the use of a group separator, such as a comma for thousands.
*/

format1 = d3.format('*=-$025,');
console.log(format1(value1));
console.log(format1(value2));

// . (precision) ~ type
/*
Depending on the type, the precision either indicates the number of digits that follow the decimal point (types f and %), or the number of significant digits (types  ​, e, g, r, s and p). If the precision is not specified, it defaults to 6 for all types except ​ (none), which defaults to 12. Precision is ignored for formats (types b, o, d, x, X and c)

The ~ option trims insignificant trailing zeros across all format types.

The available type values are:

e - exponent notation.
f - fixed point notation.
g - either decimal or exponent notation, rounded to significant digits.
r - decimal notation, rounded to significant digits.
s - decimal notation with an SI prefix, rounded to significant digits.
% - multiply by 100, and then decimal notation with a percent sign.
p - multiply by 100, round to significant digits, and then decimal notation with a percent sign.
b - binary notation, rounded to integer.
o - octal notation, rounded to integer.
d - decimal notation, rounded to integer.
x - hexadecimal notation, using lower-case letters, rounded to integer.
X - hexadecimal notation, using upper-case letters, rounded to integer.
c - converts the integer to the corresponding unicode character before printing.
*/

format1 = d3.format('*^+$025,.1f');
console.log(format1(value1));
console.log(format1(value2));

format1 = d3.format('*^+25,.2%');
console.log(format1(value1));
console.log(format1(value2));

format1 = d3.format('*^+25,.2');
console.log(format1(value1));
console.log(format1(value2));

format1 = d3.format('*^+25,.2e');
console.log(format1(value1));
console.log(format1(value2));

format1 = d3.format('*^+25,.2r');
console.log(format1(value1));
console.log(format1(value2));

format1 = d3.format('*^+25,.2s');
console.log(format1(value1));
console.log(format1(value2));

format1 = d3.format('*^+25,.2~s');
console.log(format1(value1));
console.log(format1(value2));

// For specific formatiiing using the SI units then
// d3.formatPrefix('specifier', value in SI)

let formatPrefix1 = d3.formatPrefix('*^+25,~s', 1e-3);
console.log(formatPrefix1(value1));
console.log(formatPrefix1(value2));

formatPrefix1 = d3.formatPrefix('*^+25,~s', 1e3);
console.log(formatPrefix1(value1));
console.log(formatPrefix1(value2));

formatPrefix1 = d3.formatPrefix('*^+25,~', 1e3);
console.log(formatPrefix1(value1));
console.log(formatPrefix1(value2));

formatPrefix1 = d3.formatPrefix('*^+25,', 1e3);
console.log(formatPrefix1(value1));
console.log(formatPrefix1(value2));

/*
y - yocto, 10⁻²⁴
z - zepto, 10⁻²¹
a - atto, 10⁻¹⁸
f - femto, 10⁻¹⁵
p - pico, 10⁻¹²
n - nano, 10⁻⁹
µ - micro, 10⁻⁶
m - milli, 10⁻³
  (none) - 10⁰
k - kilo, 10³
M - mega, 10⁶
G - giga, 10⁹
T - tera, 10¹²
P - peta, 10¹⁵
E - exa, 10¹⁸
Z - zetta, 10²¹
Y - yotta, 10²⁴
*/

// d3.formatLocale()
/*
decimal - the decimal point (e.g., ".").
thousands - the group separator (e.g., ",").
grouping - the array of group sizes (e.g., [3]), cycled as needed.
currency - the currency prefix and suffix (e.g., ["$", ""]).
numerals - optional; an array of ten strings to replace the numerals 0-9.
percent - optional; the percent sign (defaults to "%").
minus - optional; the minus sign (defaults to "−").
nan - optional; the not-a-number value (defaults "NaN").
*/

const formatLocale1 = d3.formatLocale({ currency: ['₹', ''] });
let format2 = formatLocale1.format('*^+25,.2f');
console.log(format2(value1));
console.log(format2(value2));

format2 = formatLocale1.format('*^+$25,.2f');
console.log(format2(value1));
console.log(format2(value2));

// d3.formatDefaultLocale() , changes the d3.format and d3.formatPrefix()

d3.formatDefaultLocale({ currency: ['₹', ''] });
let format3 = d3.format('*^+$25,.2s');
console.log(format3(value1));
console.log(format3(value2));

// d3.formatSpecifier()
const formatSpecifier = d3.formatSpecifier('*^+$25,.2s');
console.log(formatSpecifier);
