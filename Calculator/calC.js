let para = document.querySelector("#display");

function append(input){
    para.value += input;
}

function clearScreen(){
    para.value = "";
}

function calculate(){
    try{
        para.value = eval(para.value);
    }
    catch(e){
        para.value = "Error";
    }
}

function back(){
    let num = para.value / 10;
    para.value = Math.floor(num);
}




