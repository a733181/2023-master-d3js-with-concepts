let timeFormat = d3.timeFormat();
console.log(timeFormat);

timeFormat = d3.timeFormat('%B %d, %Y');
console.log(timeFormat(new Date()));

let parseTime = d3.timeParse();
console.log(parseTime());

parseTime = d3.timeParse('%B %d, %Y');
console.log(parseTime('July 01, 2018'));

/*
%a - abbreviated weekday name.
%A - full weekday name.
%b - abbreviated month name.
%B - full month name.
%c - the locale’s date and time, such as %x, %X.
%d - zero-padded day of the month as a decimal number [01,31].
%e - space-padded day of the month as a decimal number [ 1,31]; equivalent to %_d.
%H - hour (24-hour clock) as a decimal number [00,23].
%I - hour (12-hour clock) as a decimal number [01,12].
%j - day of the year as a decimal number [001,366].
%m - month as a decimal number [01,12].
%M - minute as a decimal number [00,59].
%p - either AM or PM.
%S - second as a decimal number [00,61].
%Y - year with century as a decimal number, such as 1999.
*/
