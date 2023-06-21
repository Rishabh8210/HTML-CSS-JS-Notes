console.log("Prototype Inheritance");


const proto = {
    slogan: function(){
        `This company is the Best`;
    },
    changeName: function(newName){
        this.name = newName
    },
    changeRole: function(newRole){
        this.name = newRole
    }
}

// This creates rishabh object 
const rishabh = Object.create(proto);
rishabh.name = "Rishabh Pandey"
rishabh.role = "Programmer";


// This will also creates rishabh object old fashion
const Rishabh = Object.create(proto,{
    name : {value: "Ris_habh_",writable:true},
    role : {value: "Programmer"}
});
// writable true means changeName func name ko change kr skta h

// but writable false ya ni likhne se  hm name chane ni kr payege
Rishabh.changeName("PAndey");
Rishabh.changeRole("PAndey");

console.log(Rishabh);