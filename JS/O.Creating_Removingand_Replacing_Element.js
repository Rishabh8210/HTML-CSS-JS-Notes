console.log('Creating, Removing and Replacing Elements');

// Create an li Element ⬇️
// let element = document.createElement('li');

// //Add a class name to the li element⬇️
// element.className = 'childul';
// element.id = 'createdli';
// //element.setAttribute('class','myTitle'); //also u can do this

// element.setAttribute('title','myTitle');
// // element.innerText = "Hello this is created by Rishabh"; ⬇️
// you cant do anything like bold or italic etc 
// element.innerHTML = "<b>Hello this is created by Rishabh";

// let ul = document.querySelector('ul.this');
// ul.appendChild(element);

// console.log(ul);
// console.log(element);



// 2nd Way to append li in ul
// Create an li Element ⬇️
let element = document.createElement('li');

//2ND way to set attributes (like class,id etc) ⬇️
element.setAttribute('id','created');
element.setAttribute('class','childul');
element.setAttribute('title','myTitle');

//Create a TextNode with inner text 'I am Hero'⬇️
let text = document.createTextNode('I am hero');

// Append that textNode on created element ⬇️
element.appendChild(text);

// Create an another element ⬇️
let ul = document.querySelector('ul.this');

// Append that created (li) element on created (ul) element ⬇️
ul.appendChild(element);

// console.log(ul);
// console.log(element);


//Replace an Element
let elem2 = document.createElement('h3');
elem2.id = "elem2";
elem2.className = 'elem2';
let text2 = document.createTextNode('This is created node for elem2');
elem2.appendChild(text2);

element.replaceWith(elem2);
let myul = document.getElementById('myul');
myul.replaceChild(element,document.getElementById('fui'));

// Remove an Element 
myul.removeChild(document.getElementById('lui'));

// Get,Set and Remove attribute
let pr = elem2.getAttribute('id');
// let pr = elem2.getAttribute('class');
// let pr = elem2.hasAttribute('id'); // it returns true or false
console.log(pr);
elem2.removeAttribute('id');
elem2.setAttribute('class','myelem2Title');
console.log(elem2,pr);