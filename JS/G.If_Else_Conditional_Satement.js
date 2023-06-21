//Conditional Statement:
/*
1. if(){...}
2. if(){...}else{...}
3. if(){...}else if(){...}else{...}
Relational Operator
1. = -> Assignment
2. == -> Comparision by value (left is equal to right)
3. === -> Comparision type and value(generally use === over ==)
4. >= -> Greater than equal to
5. <= -> less than equal to
6. != -> value Not equal to
7. !== -> value and type not equal to
8. &&
9. ||
10. Conditional operator (ternary operator): (a > b) ? a:b;
*/


console.log("IF Else Conditional Statement");
let age = '18';



if (age === '18') {
    console.log("You are applicable");
}
else if (age >= 65) {
    console.log("Obviously you are applicable");
}
else {
    console.log("You are not Applicable");
}

const vari = 23;
if (typeof vari !== 'undefined') {
    console.log(" Vari is Defined");
}
else {
    console.log("Vari is not defined");
}

const doesDrive = true;
age = 14;
if (doesDrive && age >= 18) {
    console.log("Yes U can Drive");
}
else {
    console.log("You can't drive");
}

if (doesDrive || age >= 18) {
    console.log("Yes U can Drive");
}
else {
    console.log("You can't drive");
}

console.log(age == 45 ? 'age is 45' : 'age is less than 45');

// Switch 
age = 15;
switch (age) {
    case 18:
        console.log("You are Adult");
        break;
    case 15:
        console.log("You are teen");
        break;
    default:
        console.log("You are too small or too big");
        break;
}