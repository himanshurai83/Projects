let digital = document.querySelector("#digital-heading");

const time = () => {
    let date = new Date();
    // console.log(date);
    let total = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    digital.innerHTML = total;
}

let interval = setInterval(time,1000);

let stop_btn = document.querySelector("#stop-btn");
stop_btn.addEventListener('click',() => {
    clearInterval(interval);
    stop_btn.innerText = "Timer Stop";
});

let interval2;
let number = null;
let running = document.querySelector("#running");
let start_timer = document.querySelector("#start-timer");
let set_timer = document.querySelector("#set-timer");
let msg = document.querySelector("#msg");
let voice = document.querySelector("#voice");
start_timer.addEventListener('click', () => {
    if(number == null)
        alert("Please set the timer First");
    else{
        interval2 = setInterval(getInput, 1000);
    }
       
});

set_timer.addEventListener('click',() => {
    number = prompt("Enter timer: ")
    number = Number(number);
    running.innerText = number;
});

function getInput(){
    if (number > 0) {
        number--;
        running.innerText = number;
        msg.style.display = "inline-block";
        msg.innerText = "Your Timer is Start...";
        voice.play();
        voice.volume = 1;
    } else {
        clearInterval(interval2);
        msg.innerText = "Your Timer was Stop!";
        voice.volume = 0;
        voice.pause();
    }
}


