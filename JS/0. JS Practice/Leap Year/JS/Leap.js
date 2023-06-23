const Check = document.getElementById('check');
const getEle = document.getElementById('Year-input');
let result = document.getElementById('checked-Result');
const Reset = document.getElementById('reset');
let prevValue = result.innerHTML;
Check.onclick = function(){
    let year = getEle.value;
    // console.log(isNaN(year));
    // console.log(year);
        result.style.color = "white";
        result.style.backgroundColor = "#0ef20e"
        result.style.border = "2px solid black"
        result.style.borderRadius = "23px"
    if(!isNaN(year)){
        if(year)
        if((year % 400 == 0) && (year % 100 != 0) || (year % 4 == 0))
        {
            
            result.innerText = "Leap Year Baa ho";
            // console.log(result.innerHTML = "Leap Year");
            
        }
        else{
            result.style.backgroundColor = "red"
            result.innerText = `Leap Year Naikhe Baa ho`;
            
            // alert("Not a Leap Year");
        }
    }
    else{
        result.style.backgroundColor = "#00c0ff"
        result.innerText = "Number input kr Bhsdk";
    }
}
Reset.onclick = function()
{
        result.style.color = "";
        result.style.backgroundColor = ""
        result.style.border = ""
        result.style.borderRadius = ""
    result.innerHTML = prevValue;
    getEle.value = '';
}
