console.log("Exercise 1");
let str = "facebook";
let a = document.links;
Array.from(a).forEach(function(element,index,array){
    if(element.href.includes(str))
    {
        console.log(element);
    }
});

// let arr = [1,3,5,16,8];
// let sum = 0;
// let val = prompt();
// console.log(val);
// let check = Array.isArray(val);
// console.log(check);
// arr.forEach(function(element,index,array){
//     sum = sum + element;

// });
// console.log(sum);