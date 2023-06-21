console.log("Array And Objects");
let marks = [12, 34, 25, 27, 6, 3];
const fruits = ["Orange", "Apple", "Pine-Apple"];
const mixed = [12, 3, 'orange', 5, 'apple'];

const arr = new Array(12, 3, 5, 7, "orange", "apple");
console.log(marks);
console.log(fruits);
console.log(mixed);
console.log(arr);

/*  Methods:
1. length -> return length
2. isArray() -> check if entered data is array or not if array then return true else false
syntax = Arrray.isArray("....");
3. operator[] -> modify value print value .. originak value of array also get change
4. indexOf(value)-> return the index of given value else -1 if value not found
5. push(val) -> add element atthe end of array
6. unshift(val) -> add to the front of array
7. pop() -> pop from the last element
8. shift() -> pop from the front element
9. splice(strt index,end index) -> remove elements from the range
10. reverse() -> reverse the array
*/
// Note: const variable value chenge using methods not directly
console.log(arr.length);
console.log(Array.isArray([1, 2, 3, 4]));
console.log(Array.isArray('orange'));
arr[0] = 'Rishabh';
console.log(arr);

let val = arr[0];
console.log(val);

let valueat = marks.indexOf(25);
console.log(valueat);

marks.push(34);
marks.unshift(123);

marks.pop();

marks.splice(1, 3);
marks.reverse();

let marks2 = [9, 8, 7];
marks = marks.concat(marks2);
console.log(marks);

//Objects

let obj = {
    'name': 'rishabh',
    sname: 'pandey',
    roll: 114,
    collName: 'MCR',
    marks: [12, 5, 3, 6, 4]
}
console.log(obj);
console.log(obj.collName);
console.log(obj['sname']);
console.log(obj['collName']);
obj.collName = "BS";
console.log(obj['collName']);
