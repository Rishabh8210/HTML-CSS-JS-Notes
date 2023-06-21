console.log("Manipulating websites using JS window obj");
// DOM -> Document Object Model
// Document object in js is a part of window 
// window Object is a global object in a client side js. 
// Window object is automatically global in JS so either we can directly call object or variable or using(.)operator
// DOM has tree like structure
let a = window;
// window.alert("Rishabh Pandey");
// alert("Salam Rockey Bhai");

// a = prompt("Type your name");
// confirm -> return boolean vvalue
// a = confirm("Are u sure u want to delete the file");
//this is Old Fashion
// a = window.document; // this is DOM 
a = window.innerHeight;
a = innerWidth;
//window likhna jaruri ni h xD !

a = scrollX;
a = scrollY;
// scroll vertically and horizontally (X axis and Y axis)

// a = location;
a = location.toString();// return location of website in string
// a = location.reload(); //-> reload the page
a = window.history; // it is responsible for back and next buttons of web-browser
//history.go(1)// aage piche history me jana
// history.length; // history count krna 

console.log(a);
