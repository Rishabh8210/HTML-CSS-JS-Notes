const getTemp = document.getElementById('temperature');
const getChoise = document.getElementById('convert');
const convertChoise = document.getElementById('convert-to');
let getResult = document.getElementById('result-temp');

convertChoise.onclick = function()
{
    
    if(getChoise.value == "celcius" && convertChoise.value == "celcius")
    {
        getResult.innerText = `${getTemp.value} °C`;
    }

    if(getChoise.value == "fahrenheit" && convertChoise.value == "fahrenheit")
    {
        getResult.innerText = `${getTemp.value} °F`;
    }
    if(getChoise.value == "kelvin" && convertChoise.value == "kelvin"){
        getResult.innerText = `${getTemp.value} °K`;
    }
    if(getChoise.value == "celcius" && convertChoise.value == "fahrenheit")
    {
        let innerData = ((`${getTemp.value}`*9)/5) + 32;
        getResult.innerText = `${innerData} °F`;
        console.log(innerData);
        
    }
    if(getChoise.value == "fahrenheit" && convertChoise.value == "celcius")
    {
        let innerData = ((`${getTemp.value}`- 32)*5) / 9;
        getResult.innerText = `${innerData} °C`;
    }
    if(getChoise.value == "celcius" && convertChoise.value == "kelvin")
    {
        let innerData = parseInt(`${getTemp.value}`)+ 273.15;
        getResult.innerText = `${innerData} °K`;
    }
    if(getChoise.value == "fahrenheit" && convertChoise.value == "kelvin")
    {
        let innerData = (((parseInt(`${getTemp.value}`) - 32)*5)/9) + 273.15;
        getResult.innerText = `${innerData} °K`;
    }

    if(getChoise.value == "kelvin" && convertChoise.value == "fahrenheit")
    {
        let innerData = (((parseInt(`${getTemp.value}`) - 273.15)*9)/5) + 32;
        getResult.innerText = `${innerData} °F`;
    }
    if(getChoise.value == "kelvin" && convertChoise.value == "celcius")
    {
        let innerData = (parseInt(`${getTemp.value}`) - 273.15);
        getResult.innerText = `${innerData} °C`;
    }
}