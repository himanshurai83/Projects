let baseurl = "https://api.exchangerate-api.com/v4/latest"
let fromCurr = document.querySelector(".from select");
let toCurr = document.querySelector(".to select");
let final_msg = document.querySelector(".final-msg");

let dropdowns = document.querySelectorAll(".dropdown select");

for(let select of dropdowns)
{
    for(currCode in countryList)
    {
        let newOpt = document.createElement("option");
        newOpt.innerText = currCode;
        newOpt.value = currCode;
        if(select.name === "from" && currCode === "USD")
            newOpt.selected = "selected";
        
        else if(select.name === "to" && currCode === "INR")
            newOpt.selected = "selected";
        select.appendChild(newOpt);
    }
    select.addEventListener('change',(evt) => {
        updateFlag(evt.target);
    });
}

const updateRate = async() => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if(amtVal === "" || amtVal < 1)
    {   
        amtVal = 1
        amount.value = "1";
    }

    // console.log(fromCurr.value,toCurr.value)

    let URl = `${baseurl}/${fromCurr.value.toLowerCase()}`;
    // console.log(URl);
    let response = await fetch(URl);
    let data = await response.json();
    // console.log(data.rates[toCurr.value]);

    let conversionRate = data.rates[toCurr.value];
    let convertedAmount = amtVal * conversionRate;
    // console.log(convertedAmount);
    final_msg.innerText = `${amtVal} ${fromCurr.value} = ${convertedAmount} ${toCurr.value}`
}

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSRC = `https://flagsapi.com/${countryCode}/flat/64.png`
    let img = element.parentElement.querySelector("img");
    // let img = document.querySelectorAll(".select-container img");
    img.src = newSRC;
}

const btn = document.querySelector("form button");

btn.addEventListener('click', async(e) => {
    e.preventDefault();
    updateRate();    
});

window.addEventListener('load',updateRate);

