console.log("Object Prototype ");

// Object literal : Object.prototype
let obj = {
    name: "Rishabh",
    channel: "Rishabh",
    address: "Mars"
}

function Obj(givenName){
    this.name = givenName
}

Obj.prototype.getName = function (){
    return this.name;
}

Obj.prototype.setName = function (newName){
  this.name = newName;
}

let obj2 = new Obj("Pandey");
console.log(obj2);
 