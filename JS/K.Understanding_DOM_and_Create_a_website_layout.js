console.log("Understanding DOM and Create a website layout");
// let a = window.document;
// DOM -> Document Object Model -> structural representation of a html document
// document is object type
// there are too many objects ,methods and attributes are in document
let a = document;
a = document.all;// it return all tags of HTML document .Its is an array type object but it is not a array we cant use arr.foreach func its gives us error
// a = document.body;// it returns HTML body tag
// a = document.forms;
// to access specific form from many form use [] this brackets
// a = document.forms[0];

// a.forEach(function(element,index,array){
//     console.log(element,index); // error because it is not a function
// });

// Array.from(a) se bana lo array
// Array.from(a).forEach(function(element,index,array){
//     console.log(element,index); 
// });

// a = document.links;
// to access specific link from many link use [] this brackets
a = document.links[0];

// H_W_: us document.image and document,script and print the list of images and scripts on the html page
a = document.images;
Array.from(a).forEach(function(element,index,array){
    console.log(element,index);
});
a = document.scripts;
Array.from(a).forEach(function(element,index,array){
    console.log(element,index); 
});
console.log(a);