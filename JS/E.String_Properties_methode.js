console.log("String: Properties,Methods and Template");
const fname = "Rishabh";
const lname = 'Pandey';//both methods of string is true(" " ' ')
console.log(fname + " " + lname);

let html;
// html = '<h1> This is a Heading</h1> 
//         <p> This is a Paragraph </p>'; // wrong

html = '<h1> This is a Heading</h1>' + 
        '<p> This is a Paragraph </p>'; //  right


// concat = concate string at the end
html = html.concat('this', 'str2');
console.log(html);

// length
console.log(html.length);

//toLowerCase
console.log(html.toLowerCase());

//toUpperCase
console.log(html.toUpperCase());
// console.log(html.toLocaleUpperCase());

//Using this methods string can not changes 
console.log(html);
console.log(html[1]);

//indexOf(parameter) // sub-string as a parameter
//if substring found the return first occurence index and if not found then return -1
console.log(html.indexOf('This'));
console.log(html.indexOf('m'));

//lastIndexOf(parameter) // sub-string as a parameter
//if substring found the return last occurence index and if not found then return -1
console.log(html.lastIndexOf('This'));
console.log(html.lastIndexOf('m'));

// charAt(index)
//return the value of the given index
console.log(html.charAt(7));

// endsWith(parameter)// sub-string as a parameter
//if a string ends with given string then returns true else false
console.log(html.endsWith('This'));
console.log(html.endsWith('str2'));

// includes(parameter) // sub-string as a parameter
// if given sub string present in the string returns true else false
console.log(html.includes('This'));
console.log(html.includes(' '));// space present in string
console.log(html.includes('m'));

// substring(range)
//it gives substring from the given range
console.log(html.substring(1,23)); 
console.log(html.substring(-4));//it prints whole string


//slice(renge) is very much similar to substring() method
//in slice we can pur negative index range
console.log(html.slice(1,23)); 
console.log(html.slice(-5)); //it prints values from back of the string 

//splits() -> use to splits
console.log(html.split(' '));
console.log(html.split('Heading'));

//replace()
console.log(html.replace('Heading','yo yo'));


// let fruit1 = 'orange\'';
// let fruit2 = 'Apple';
// let myhtml = `Hello ${fname}
//               <h1> This is Heading </h1>
//               <p> You like ${fruit1} and ${fruit2}
//              `;

// document.body.innerHTML = myhtml;//to change the body content of html

let nam = document.getElementById('Bubu');
nam.innerText = 'Hii guys'
nam.style.color = 'red'
nam.style.backgroundColor = 'Black'
console.log(nam);

