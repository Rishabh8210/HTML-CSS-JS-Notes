// ❌ Note : remove emojies if needed else rehne do sundar lg rha 😵


// 👍 Add two number 
// var a = parseInt(prompt("Enter first number : "));
// var b = parseInt(prompt("Enter second number : "));

// console.log(a+b);

// 👍 First learn syntax of {if, if - else, if - else if...}

// 🚩 if

// if(condition){
//     ........
// }

// if(condition){
//     ........
// }

// 🚩 if - else

// if(condition){
//     .......
// }
// else{
//     .......
// }

// 🚩 if - else if

// if(condition){
//     ..........
// }
// else if(condition){
//     ..........
// }
// else if(condition){
//     ..........
// }
// else{
//     ..........
// }


// 👍 Check Odd Even

// let a = parseInt(prompt("Enter first number : "));
// if(a % 2 != 0)
// {
//     console.log(`${a} is a Odd number `)
// }
// else console.log(`${a} is a Even number !`);

// 👍 PRime check

// let a = parseInt(prompt("Enter first number : "));
// let i = 1;
// let count = 0;
// while(i <= a)
// {
//     if(a % i == 0){
//         count++;
//     }
//     i++;
// }
// if(count == 2) console.log(`Yes ! ${a} is a Prime number `);
// else console.log(`${a} not a Prime number !`);



// 👍 Taking 5 subject input and finding its avg


// let maths = parseInt(prompt("Enter maths marks : "));
// let hindi = parseInt(prompt("Enter hindi marks : "));
// let english = parseInt(prompt("Enter english marks : "));
// let gk = parseInt(prompt("Enter gk marks : "));
// let ssc = parseInt(prompt("Enter ssc marks : "));

// const total = (maths + hindi + english + gk + ssc) / 5;

// console.log("Total marks scored by student is ", total);

// if(total > 60) console.log("Student Scored first Division");
// else if(total > 45 && total < 60) console.log("Student Scored Second Division");
// else if(total > 33 && total < 45) console.log("Student Scored third Division");
// else console.log("Sry Student is failed in the examination !")



// 👍 Using switch case 
// first learn the syntax 

// switch(experision){
//     case 1:{

//         break;
//     }
//     case 2:{
            
//         break;
//     }
//     default:{
            
//     }
// } 

// 👍 example Enter ur choice : 1 for check prime,  2 for factorial !! 

// let num = parseInt(prompt("Enter number : "));
// let enterChoice = parseInt(prompt("Enter ur choice : 1 for check prime,  2 for factorial"));
// switch(enterChoice){
//     case 1:{
//         let i = 1;
//         let count = 0;
//         while(i <= num)
//         {
//             if(num % i == 0){
//                 count++;
//             }
//             i++;
//         }
//         if(count == 2) console.log(`Yes ! ${num} is a Prime number `);
//         else console.log(`${num} not a Prime number !`);
//         break;
//     }
//     case 2:{
//         let fact = 1;
//         for(i = 1; i <= num; i++){
//             fact += fact * i;
//         }
//         console.log(`Factorial of ${num} is ${fact}`);
//         break;
//     }
//     default:{
//         console.log('invalid choice !');
//     }
// } 


// 👍 first learn loop
// 👍 While loop syntax

    // initilization 

    // while(condition){

    //     // updation (always check that the updation is processing is on integer or not 
    //                 //(if not then change it or check ur requirement)
    // }

// 👍 Do - while Syntax
   
//     initilization 
//     do{

//          // updation (always check that the updation is processing is on integer or not 
//         //          (if not then change it or check ur requirement)
//     }while(condition);


// 👍 For loop
    // for(initilisation; condition; updation)


// 👍 Printing 1 to 10

// for(i = 1; i<= 10; i++){
//     console.log(i);
// }


// 👍 Checking Armstrong number
// let num = prompt("Enter number : "); // prompt return string
// let lengthOfNum = num.length;  // counting string length

// let sum = 0;
// let strToNum = parseInt(num); // converting string to integer


// let temp = strToNum; // coping value and storing in a temperorary variable


// while(temp > 0)
// {
//     let rem = temp % 10; // taking remainder
 
//     sum += rem ** lengthOfNum; // using ** operator who is behaving like  pow() function in c,cpp 
//     temp = parseInt(temp / 10); // here we need to handle with decinal value thats why we convering
//                                 // temp decimal value to int 
// }

// if(sum == strToNum) console.log(`Yes ${strToNum} is an Armstrong number !`);
// else console.log(`No ! ${strToNum} it is not a Armstrong number`);



// 👍 For fibo series  Dry run kr lo if na smjh aaye toh

// let num = parseInt(prompt("Enter number : "));
// let fstNum = 0;
// let sndNum = 1;

// for(i = 1; i <= num; i++){
//     console.log(fstNum);

//     let nextNum = fstNum + sndNum;
//     fstNum = sndNum;
//     sndNum = nextNum;
// }


// 👍 Check a num is palindrome or not

// let num = prompt('Enter a number : '); // prompt return string
// let numLength = num.length; // . length returning string length i.e, num(string) length 

// let sum = 0;
// let strToNum = parseInt(num);  // converting string to integer
// let temp = strToNum; // coping value and  storing in a temperorary variable

// while(temp > 0){
//     let rem = temp % 10;  // taking remainder
//     sum = sum * 10 + rem;  // creating rev number 
//     temp = parseInt(temp / 10); // here we need to handle with decinal value thats why we convering
//                                // temp decimal value to int
// }

// if(sum == strToNum) console.log(`Yes ! ${strToNum} is a palindromic number !`);
// else console.log(`No ! ${strToNum} is not a palindromic number !`);



// 👍 check a string is pallindrome or not !

// let str = prompt("Enter a string : ");
// let strLen = str.length;
// let i;
// let flag = true;
// for(i = 0; i < parseInt(strLen/2); i++)
// {
//     if(str[i] != str[strLen - i - 1])
//     {
//         flag = false;
//         break;
//     }
// }
// if(flag == true) console.log(`'${str}' is a Palindromic string !`);
// else console.log(`'${str}' is not a Palindromic string !`);


//🚩 and if u want to create with function then simply learn this syntax
//👍 Function 

// function function_name(arguments_1, arguments_2...){  // in arguments u dont need to mention var or let or const 
                                                        // anything just write anyname it auotmatically convert it 
//     .......
// }

// calling ->  function_name(arguments_1, arguments_2...)

// 🚩 return type
// function function_name(arguments){   
//     .......
//      return (anything that u want);
// }


// 👍 function checkPalindrome(str){
    
//     let strLen = str.length;
//     let i;
//     let flag = true;
//     for(i = 0; i < parseInt(strLen/2); i++)
//     {
//         if(str[i] != str[strLen - i - 1])
//         {
//             flag = false;
//             break;
//         }
//     }
//     if(flag == true) console.log(`'${str}' is a Palindromic string !`);
//     else console.log(`'${str}' is not a Palindromic string !`);

// }


// // calling function with passing argument
// let str = prompt("Enter a string : ");
// checkPalindrome(str);


// 👍 for Return type function simply write nd return anything frm function and store it while calling 
// u can return anything frm function u already know very well !! 


//👍  function checkPrime(num){
     
//     let i = 1;
//     let count = 0;
//     while(i <= num)
//     {
//         if(num % i == 0){
//             count++;
//         }
//         i++;
//     }
//     if(count == 2) return `Yes ${num} is a Prime number `;
//     else return `${num} not a Prime number !`;
// }

// let a = parseInt(prompt("Enter number : "));
// let str = checkPrime(a); // returned value is a string, u can return anything
// console.log(str);

