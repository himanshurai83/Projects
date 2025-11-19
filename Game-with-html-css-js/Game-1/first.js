
let userScore = 0;
let compScore = 0;
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-current-score");
let compScorePara = document.querySelector("#comp-current-score");
let choices = document.querySelectorAll(".choice");

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerHTML = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerHTML = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }    
}

const drawGame = (userChoice,compChoice) => {
   msg.innerHTML = "Game was Draw. Play again!"
   msg.style.backgroundColor = "black";  
}

const playgame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //paper,scissors
            userWin = compChoice ==="paper" ? false : true;
        }
        else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            //rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener('click',() => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);        
    });
});

let genCompChoice = () => {
    let options = ['rock','paper','scissors'];
    let rand = Math.floor(Math.random() * 3);
    return options[rand];
}

