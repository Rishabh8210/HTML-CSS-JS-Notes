console.log("Local and Session Storage");

// Diff btn Local and session Storage
// If we close our browser Session storage cleard auto but Local storage remains on the website



// Add a key-value pair inside local storage
localStorage.setItem('Name','Rishabh');
localStorage.setItem('Name2','Pandey');

// console.log(localStorage);
// console.log(typeof localStorage);
// console.log(typeof localStorage.Name);
// console.log(localStorage.Name);
// console.log(localStorage.Name2);



// Retrieve an item from the local storage
// let name = localStorage.getItem('Name');
// console.log(name);
// let name2 = localStorage.getItem('Name2');
// console.log(name2);

// // If key not matched then return NULL⬇️
// let name3 = localStorage.getItem('xdvds');
// console.log(name3);

// Clear the entire Local storage
// localStorage.clear();
// return null becoz local stroage is empty
// console.log(name); 

// Clear a particular key-value pair
// localStorage.removeItem('Name');
// Name has been sucessfully removed frm local Storage

// If u add Array in local storage it stores array but in the form of a string u just need to convert it into array by using JSON.parse or JSON.stringfy and then push it in local Storage

let impArray = ['adrak','pyaz','bhindi'];
localStorage.setItem('Sabzi',impArray);
console.log(localStorage.getItem('Sabzi'));
// "adrak,pyaz,bhindi1" L.S. stores it in string form 

// To store it in the form of array use JSON.stringfy()
localStorage.setItem('Sabzi',JSON.stringify(impArray));

let getArray = localStorage.getItem('Sabzi');
console.log(getArray); // array ki trh dikhega but string h
console.log(typeof getArray); // string


// To get Array use JSON.parse()
getArray = JSON.parse(localStorage.getItem('Sabzi'));

console.log(getArray);// now its look-like an array
console.log(typeof getArray); // object

// String se kaam krne me prob hoga like dlt ek string ko krne me push krne me ise aacha h array use krlo mst functions use kro puch pop


sessionStorage.setItem('sessionName','sessionRishabh');
sessionStorage.setItem('sessionName2','sessionPandey');

// Same session Storage me v same methods hoga set,get
sessionStorage.clear();
localStorage.clear();
// sb saaf....