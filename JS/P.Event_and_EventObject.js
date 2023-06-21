console.log("Event and Event Object in JAVAScript");

// document.getElementById('heading').addEventListener("mouseover",function(e){
//     console.log('you have clicked the heading');
//     let variable;
//     variable = e.target;
//     variable = e.target.className;
//     variable = Array.from(e.target.classList);
//     variable = e.target.id;
//     variable = e.offsetX;
//     variable = e.offsetX;
//     variable = e.offsetX;
//     variable = e.clientY;
//     console.log(variable);
//     // this.style.color = 'red';
//     // location.href = '//google.com';
// })
// document.querySelector('button').addEventListener("click",function(e){
//     // document.getElementById("heading").style.color = "red";
    
//     console.log(e);

// })
document.getElementById("heading").addEventListener("mouseover",function(e){
    e.target.style.color = 'red';
    console.log(e);
    // document.getElementById("heading").style.color = "black";
});
document.getElementById("heading").addEventListener("mouseout",function(e){
    e.target.style.color = 'blue';
    console.log(e);
    // document.getElementById("heading").style.color = "black";
})
document.getElementById("btn").addEventListener("click",function(e){
    // e.target.style.color = 'blue';
    // console.log(e);
    
    // document.getElementById("heading").style.color = "black";
})