// Primitives Data Types
let nme = "Rishabh"; // String
console.log("My name is " + nme);
console.log("Datatype is "+ (typeof nme));

let roll = 34; // Number
console.log("My Roll is " + roll);
console.log("Datatype is "+ (typeof roll));

let per = 94.7; // Number
console.log("My Persentage is " + per+"%");
console.log("Datatype is "+ (typeof per));

let isMan = true; // Boolean
console.log("Datatype is "+ (typeof isMan));

let nullBar = null; // It is showing object type but it is a primitive type return value is bogus
console.log("Datatype is "+ (typeof nullBar));

let undef = undefined;
// let abs;
console.log("Datatype is "+ (typeof undef));

//Reference DataTypes:
//Array
let arr = [1,2,4,true,"rishabh"];
console.log(arr);
console.log("Datatype is "+ (typeof arr));

//Object Literals
let marks = {
    rishabh: 54,
    pandey: 32,
    "D j":2,
    dj: 2
}
console.log(marks);
console.log("Datatype is "+(typeof marks));

//Function
function find() {

}
console.log("Datatype is "+ (typeof find));

//Date
let date = new Date();
console.log("Datatype is "+ (typeof date));