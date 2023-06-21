console.log("Fetching data");

let popHandler = document.getElementById('popBtn');
popHandler.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
    let xhr = new XMLHttpRequest();
    // Open the object
    xhr.open('GET', 'https://dummy.restapiexample.com/api/v1/employees', true);

    // on progress
    xhr.onprogress = function () {
        console.log("On progress");
    }

    // on load

    xhr.onload = function () {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let len = obj.data.length;
            let list = document.getElementById('list');
            str = "";
            for(key = 0; key < len; key += 1){
                str += `<li>${obj.data[key].employee_name} </li>`;
            }
            list.innerHTML = str;
        }
        else {
            console.log("Kuch toh Gadbad hai re baba");
        }
    }

    // send 
    xhr.send();
    console.log("Done");
}
