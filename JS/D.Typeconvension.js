// Type Convension
console.log("Type Convension and Coercion");
let roll; // undefinef
roll = String(114);
console.log(roll,(typeof roll));

let boolvar = true;
boolvar = Number(true);
console.log(boolvar,(typeof boolvar));

let date = String(new Date());
console.log(date,(typeof date));

let arr = String([1,2,3,4,5]);
console.log(arr,(typeof arr));

let i = 1;
console.log(i.toString(), typeof i); // Number converted to String
i = true;
console.log(i.toString());


let str = Number("1234");
console.log(str,(typeof str));
str = Number("123f");
console.log(str,(typeof str)); //-> NaN(Not a Number)
str = Number(true);
console.log(str,(typeof str));
// JAha Number me convert krne me dikkt hogi waha NaN hoga
str = Number([1,2,3,4,5]);
console.log(str,(typeof str));



let number = parseInt('34');// -> output 34
console.log(number,(typeof number));

number = parseInt('34,237'); // -> output 34
console.log(number,(typeof number));

number = Number('34.232');// -> output 34.232
console.log(number,(typeof number));

number = parseFloat('34.232');// -> output 34.232
console.log(number,(typeof number));

//toFixed() -> Control pricision

number = parseFloat('34.232');
console.log(number.toFixed(),(typeof number));//-> output 34
console.log(number.toFixed(1),(typeof number));//-> output 34.2
console.log(number.toFixed(2),(typeof number));//-> output 34.23

// Type Coercios

let mystr = "672";
let mynum = 23;
console.log(mystr + mynum); // 67223
mystr = Number("672");
console.log(mystr + mynum); // 695