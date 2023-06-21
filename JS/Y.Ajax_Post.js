console.log("Ajax");
let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click',buttonClickHandler)


function buttonClickHandler(){
    console.log('You have clicked the fetchBtn');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://dummy.restapiexample.com/api/v1/create',true);

    // sending form data in url form 
    // xhr.getResponseHeader('content-type','application/x-www-form-urlencoded');

    // for JSON us this 
    xhr.getResponseHeader('content-type','application/json');


    // what to do on progress (optional) progress ke time kya krna h
    xhr.onprogress = function(){
        console.log('On progress');
    }

    
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

    params = `{"name":"test12","salary":"123","age":"23"}`;
    xhr.send(params);
    console.log('Bss bhai bss');
    // abhi synchronous hai isliye parallel processing ho rhi if open ki third argument false ho gyi then synchronous ho jayegi
}
