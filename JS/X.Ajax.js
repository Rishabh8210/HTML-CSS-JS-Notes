console.log("Ajax");
let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click',buttonClickHandler)


function buttonClickHandler(){
    console.log('You have clicked the fetchBtn');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // open the object
    // 1st argument :- Kaisa request marna hai
    // 2nd argumnt :- Kaha se data aayega 
    // 3rd argument :- Async (kaisa request marna hai blocking/ non-blocking) (Asynchronous ya synchronous)
    xhr.open('GET', 'Rishabh.txt', true);
    // if Rishabh.txt is not available then u will get error that data not found on that location 
    // so, if u want to check this prob that data is present or not,so, there is a status checker u can use that
    // check ststus feature is present in onload 



    // what to do on progress (optional) progress ke time kya krna h
    xhr.onprogress = function(){
        console.log('On progress');
    }

    // onreadystatechange is a old function before onload function this onreadystatechange function is used 
    // xhr.onreadystatechange = function(){
    //     console.log('ready state is ', xhr.readyState);
    // }  
    // go and search about readyState code value there are 5 state 0 1 2 3 4
    //  Value         State               Description
    // 0 means  ->  UNSENT             abhi tk apne send ni kiya
    // 1 means  ->  OPENED             open() call ho chuka hai
    // 2 means  ->  HEADERS_RECIVED    send() call kr diya h
    // 3 means  ->  LOADING            loading chal rhi hai 
    // 4 means  ->  Done               Done



    // what to do when responce is ready (jb sb kuch taiyar ho jaye tb kyya krna h)
    xhr.onload =  function(){
        // status check krlo data present hai ya ni
        // 200 is ok (it is use to check ok)
        if(this.status === 200){
            console.log(this.responseText);
        }
        else{
            console.error("Some error occured");
            // console.log("Some error occured");
        }
    }

    // u need to send the request, wrna kuch nhi hoga change

    // send the request
    xhr.send();
    console.log('Bss bhai bss');
    // abhi synchronous hai isliye parallel processing ho rhi if open ki third argument false ho gyi then synchronous ho jayegi
}
