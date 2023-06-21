console.log("Date Object");
let today = new Date();
// console.log(today);
// console.log(typeof today); // -> Object

let otherDate = new Date('June-6-2022 17:23:03');
otherDate = new Date('June 6 2022');
otherDate = new Date('06/6/2022');
console.log(otherDate);

let a = otherDate.getDay();
a = otherDate.getDate();
a = otherDate.getMinutes();
a = otherDate.getHours();
a = otherDate.getSeconds();
a = otherDate.getMilliseconds();
a = otherDate.getMonth();
a = otherDate.getSeconds();
a = otherDate.getTime();
console.log(a);

otherDate.setDate(06);
otherDate.setMonth(6);
otherDate.setFullYear(2022);
otherDate.setMinutes(6);
otherDate.setSeconds(43);
otherDate.setHours(1);
console.log(otherDate);


