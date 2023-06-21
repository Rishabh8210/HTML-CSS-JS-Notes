console.log('hello world');
// Variables in JS 
// var(global) , let(block) , const
var name = 'Rishabh';
var roll;
var marks = 400;
marks = 0;
// roll = 'MCR20620089';
console.log(name,roll,marks);

// Rules for Creating JS variables
/*
1. Can't start with numbers 
2. Can start with letters, numbers, _(underscore) or $
3. Are Case Sencitive
*/
// Avoid using _ or $ .... it is valid but in opps _ is used as int in the form of private variable and $ for avoiding confusions because we r using too many $ in framework(jquery etc)
// if u reach upto opps then u must need to use $,_ sign 
var city = 'Delhi';
console.log(city);
// In modern JS let and const use is increased due to code readbility and use of var decreases
const owner = 'Rishabh Pandey';
console.log(owner);
// owner = 'Risshabh';
// we cant update const variables and u need to initileze const variable at declaration
const fruit = 'Mango';
{
    let city = 'Religara';
    city = 'KolKata';
    console.log(city);
}
console.log(city);

//Array,object,string,number all are Datatypes
const arr1 = [1,4,8,9,46];
// arr1 = [3,4,6,32]; wrong redeclaration not possible
arr1.push(67); 
console.log(arr1);
/*
Most Common Programming case types:
1. camelCase
2. kebab-case
3. snake_case
4. pascalcase
*/