console.log("For,While & Do while Loop");

// console.log(1);
// console.log(2);
// console.log(3);

// There are 3 types of loop (Generally)

//For Loop
// for(let i = 0; i<100;i++)
// {
//     console.log(i);
// }
let a = 1;
// a+=1; a = a + 1;
// a++; a = a + 1;
// console.log(a);


//While Loop
// while(a<10)
// {
//     console.log(a);
//     a++
// }

//Do while Loop
// let k  = 0;
// do{
//     console.log(k);
//     k++;
// }while(k<15);

// Break, continue keyword
// let k  = 0;
// do{
//     if(k === 5){
//         k+=1; // here 6 will be skipped
//         continue;
//     }
//     console.log(k+1);
//     k++;
// }while(k<15);
// one way
let arr = [2,4,28,5,6,22];
arr.forEach(function(element){
    console.log(element);
});

// or 
// arr.forEach(function(element, index, array){
//     console.log(element, index, array);
// });

// // 2nd Way 
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);   
// }

let student = {
    name : 'Rishabh',
    marks: 455.5,
    roll:114,
}


for(let key in student){
    console.log(`The ${key} of Student is ${student[key]}`);
}


