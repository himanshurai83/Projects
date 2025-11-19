let colorCode = document.querySelector("#color-code");
let scoreBoard = document.querySelector("#score")
let color = null;
let score = localStorage.getItem('score') || 0;
scoreBoard.innerHTML = `Score:${score}`;
function generateRandNumber(min,max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let color_container = document.querySelector(".option-container");

function generateRandColor()
{
    let red = generateRandNumber(0,255);
    let green = generateRandNumber(0,255);
    let blue = generateRandNumber(0,255);
    return `rgb(${red}, ${green}, ${blue})`;    
}

function validate(el){
    let selectedColor = el.target.style.backgroundColor;
    if(selectedColor === color){
        score++;
        scoreBoard.innerHTML = `Score:${score}`;       
        startGame();
    }
    else{
        score = 0;
        scoreBoard.innerHTML = `Score:${score}`;
    }
    localStorage.setItem('score',score);
}

function startGame(){
    color_container.innerHTML = null;
    color = generateRandColor();
    colorCode.innerHTML = color;
    console.log(color);

    let ansIdx = generateRandNumber(0,5);

    for(let i = 0; i < 6; i++)
    {
        const div = document.createElement("div");
        div.style.backgroundColor = i === ansIdx ? color : generateRandColor();
        color_container.appendChild(div);
        div.addEventListener('click',validate);
    }
}

window.addEventListener('load',startGame);

