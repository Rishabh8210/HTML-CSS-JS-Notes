Chapter 1: The Basics

Note: First we need to attach "CDN" of GSAP. 
CDN of GSAP :

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" integrity="sha512-16esztaSRplJROstbIIdwX3N97V1+pZvV33ABoG1H2OyTttBxEGkTsoIVsiP1iaTtM8b3+hu2kB6pQ4Clr5yug==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

There is some methods use to animate things using GSAP.
1. "to" : it is use to animate things and change their state from initial to final position
Syntax: gsap.to("select - element like css", {
    selector text ,array, object
})
2. "from" : it is use to animate things and change their state from final to initial position, we can also called vice-versa of "gsap.to" function
Syntax: gsap.from("select - element like css", {
    selector text ,array, object
})
    
gsap.to() or gsap.from():->  contains 2 arguments, in first arumenet we need to provide the element in which we want to add animatation and second argumenet consist a object which stores all the properties of animation
3. "fromTo" : it is use to animate things and change their state from final to initial position or initial to final position, it is the mixed version of "gsap.from" and "gsap.to"
Syntax: gsap.from("select - element like css", {fromVars}, {toVars})

To set values immediately use this function
gsap.set("select-element", {toVars});


we can use all the property of css in gsap but we need to create variables, keys etc in camel case style.  
for example :
We want to change the background color of any div
:in CSS we need to write,
.box{
    background-color = "red";
} 

but in gsap we need to write all the property in camcel case format 
.box{
    backgroundColor: "red";
}

and if we want to provide many property we need to seperate all properties with "," (comma)

Lets see some examples:
gsap.to(".box",{
    x:400,
    duration:2,
    delay:1, 
    rotate:90,
    yoyo:true,
    repeat:-1,
    backgroundColor : "pink"
}) 

:- we can use any properties (not limited to css)

If we want to animate things in x-axis, y-axis, z-axis we need to just write x,y,z and just pass some values 
like this :
 x: 100 
 we don't need provide px,% etc. suffix here, but if we want to provide this info then we can.  

To change background color we need to use this property 
  backgroundColor: "red", // in camelCase formate
If we want to set the duration time of animation we can use duration property to set the duration. by default duration time is in seconds.
  duration: 1, // seconds
If we want to set delay for animation, we can use delay property to set delay for animation. by default it set the delay time of animation in seconds.
  delay: 0.5,
  ease: "power2.inOut",
If we want to animate multiple elements of a div or any other elements one by we need tto use stagger property. we need to provide some values, by default it takes value in seconds, ye us anusar baki ke elements me delay set kr dega
  stagger: 0.1, // stagger start times
If we want to pause animation we need to write paused:true by default it is false
  paused: true, // default is false
  overwrite: "auto", // default is false
If we want to repeat animation on any elements we need to write repeat property and pass the value i.e., how many times we want to repeat the animation.
  repeat: 2, // number of repeats (-1 for infinite)
If we want to set repeat delay to any elements we need to use repeatDelay property
  repeatDelay: 1, // seconds between repeats
  repeatRefresh: true, // invalidates on each repeat
If we want to perform animation like start to end - end to start, we need to set yoyo as true, by defaults it is false. 
  yoyo: true, // if true > A-B-B-A, if false > A-B-A-B
  yoyoEase: true, // or ease like "power2"
  immediateRender: false,
If we want to perform animation in some callbacks we need to use this.
  onComplete: myFunc,
  // other callbacks: 
  // onStart, onUpdate, onRepeat, onReverseComplete
  // Each callback has a params property as well
  // i.e. onUpdateParams (Array)