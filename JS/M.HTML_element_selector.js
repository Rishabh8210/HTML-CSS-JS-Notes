console.log('HTML Elements Selectors');

/*
Element Selectors:
1. Single Element selector
2. Multiple Element selector

*/

//Single Element selector
let element = document.getElementById("first");
// element = element.className; // its give the classname of selected ID
// element = element.childNodes;
// element = element.parentNode;
element.style.color = 'red';
element.innerText = 'rishabh pandey';
console.log(element.innerText);
//      Hello i am Rishabh
element.innerHTML = '<b>Hello i am Rishabh</b>';
console.log(element.innerHTML);
/* <b>Hello i am Rishabh</b> */

// 2. 
let sel = document.querySelector('#first');
sel = document.querySelector('.child');
// sel = document.querySelector('b');
// sel = document.querySelector('h1');
sel = document.querySelector('div');
sel.style.color= 'green';
console.log(sel);

// 2. Multiple Element selector
let elems = document.getElementsByClassName('child')
elems = document.getElementsByClassName('container')
// console.log(elems[0].getElementsByClassName('child'));

elems = document.getElementsByTagName('div');
console.log(elems);

// elems.array.forEach(element => {
//     console.log(element);// wrong
// });


// Array.from(elems).forEach(element =>{
//     console.log(element);
//     element.style.color = 'blue';
// });
// or 2nd way
for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    console.log(element);
    element.style.color = 'blue';
}
