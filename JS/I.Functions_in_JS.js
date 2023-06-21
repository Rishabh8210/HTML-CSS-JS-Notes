console.log("Functions and Scope in JAVASCRIPT");
// tektis `${}`
// function greet(name){
//     console.log(`Happy Birthday ${name}`);
// }
//wirhout return type
// function greet(name,thank){
//     console.log(`Happy Birthday ${name}\nRishabh : ${thank}` );
// }

// let name = 'Rishabh';
// let name2 = 'Pandey';
// greet(name);
// greet(name, "THANK YOU");

// without function
// console.log("Happy Birthday "+name);
// console.log(`Happy Birthday ${name}`);
// console.log(`Happy Birthday ${name2}`);

//Return type function
// function add(a,b){
//     return a+b;
// }
// let a = 4;
// let b = 7;
// let val = add(a,b);
// // console.log("Sum of two number is "+val);
// console.log(`Sum of two number is ${val}`);

// Same concept Default parameter
// function add(a,b= 0){
//     return a+b;
// }
// let a = 6;
// let b = 3;
// let val = add(a,b);
// console.log(`Sum = ${val}`);
// val = add(b);
// console.log(`Sum = ${val}`);

// return String from function
// function str(name,thanks = "Thank You !")
// {
//     let msg = `Happy Birthday ${name} may god bless you ${thanks} for everthing`;
//     return msg;
// }
// let retrn = "thanks"; 
// let msg = str(name,retrn);
// console.log(msg);

// we can also create func like this (variable like func) or (function expression)
// let sttr = function(name,thanks = "Thank You !")
// {
//     let msg = `Happy Birthday ${name} may god bless you ${thanks} for everthing`;
//     return msg;
// }
// let retrn = "thanks"; 
// let msg = sttr(name,retrn);
// console.log(msg);

//DFunction in Object
// const stu = {
//         name:'Rishabh',
//         game: function(){ // it is also called Annymous function
//             return "GTA";
//         }
// }
// console.log(stu.game());


// Function in Array 
// let arr = ['apple', 'banana', 'oranges'];
// arr.forEach(function(element,index,array){
//     console.log(element,index);
// });


// SCOPE var -> func level
// var i = 345;
// console.log(i);

// function ui(name){
//     var i = 9;
//     // i = 9;
//     return `this is a ${name}`;
// }
// console.log(ui("Rishabh"),i);

//Scope let / const-> Block level
// let i = 345;
// console.log(i);

// function ui(name){
//     let i = 9;
//     // i = 9;
//     return `this is a ${name}`;
// }
// console.log(ui("Rishabh"),i);


{
    let i = 345;
    console.log(i);
    var a = 343;
    console.log(a);
}
// i was not declared because let is block level
function ui(name){
    let i = 9;
    var a = 10;
    return `this is a ${name}`;
}
console.log(ui("Rishabh"),i,a);