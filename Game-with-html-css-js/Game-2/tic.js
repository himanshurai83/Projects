let currentPlayer = "X";
let arr = Array(9).fill(null);

let para = document.querySelector(".para");

function handler(el)
{
    let box_id = Number(el.id);
    if(arr[box_id] !== null)
        return;
    arr[box_id] = currentPlayer;
    el.innerText = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === "X" ? "O" : "X";      
}

const checkWinner = () => {
    if(
        ( arr[0] !== null && arr[0] === arr[1] && arr[1] === arr[2]) ||
        ( arr[3] !== null && arr[3] === arr[4] && arr[4] === arr[5]) ||        
        ( arr[6] !== null && arr[6] === arr[7] && arr[7] === arr[8]) ||        
        ( arr[0] !== null && arr[0] === arr[3] && arr[3] === arr[6]) ||        
        ( arr[1] !== null && arr[1] === arr[4] && arr[4] === arr[7]) ||        
        ( arr[2] !== null && arr[2] === arr[5] && arr[5] === arr[8]) ||        
        ( arr[0] !== null && arr[0] === arr[4] && arr[4] === arr[8]) ||        
        ( arr[2] !== null && arr[2] === arr[4] && arr[4] === arr[6])        
    )
    {
        para.style.display = "inline-block"
        para.innerHTML = `Winner is ${currentPlayer}`;

    }

    if(!arr.some((el) => el === null))
    {
         para.style.display = "inline-block"
        para.innerHTML = `Game was Draw! Play again.`;
        para.style.backgroundColor = "#FA4032"
        return;
    }
}

// function isBiggerThan10(element ,idx,array) {
//     return element > 10;
//   }

// console.log([12,9,4].some(isBiggerThan10));


let re1 = [10,2,3,5].some((x) => x > 10);
console.log(re1);

let re2 = [12,32,345].some((x) => x % 2 == 0);
console.log(re2);