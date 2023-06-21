console.log('Children, Parent and Traversind on DOM');
let element = document.querySelector('.no');
element = document.querySelector('.container');

// console.log(element.childNodes);
//.childNodes gives us text,cmmnt,elements,new line 
// console.log(element.children);
//childrens gives us elements only 
let nodeName = element.childNodes[1].nodeName;
// console.log(nodeName);
// let nodeType = element.childNodes[0]; //#Text
let nodeType = element.childNodes[0].nodeType;
// console.log(nodeType);

//Node Types
// 1 -> Element
// 2 -> Attribute
// 3 -> Text Node
// 8 -> Comment
// 9 -> document
// 10 -> docType

let container = document.querySelector('div.container');
// console.log(container.childNodes);
// console.log(container.children[1].children[0].children);
// console.log(container.childNodes);
// console.log(container.firstChild); // it gives first childNodes
// console.log(container.firstElementChild); // it gives first children
// console.log(container.lastChild);//it gives last childNodes
// console.log(container.lastElementChild);//it gives last children

// console.log(container.childElementCount); // Count of child elements

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild);
console.log(container.firstElementChild.nextSibling);
// It gives us next childNodes
console.log(container.firstElementChild.nextElementSibling); // It gives us next children
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);

