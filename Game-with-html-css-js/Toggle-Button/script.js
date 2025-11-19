let newbtn = document.createElement("button");

newbtn.innerText = "Click me";
newbtn.style.backgroundColor = "red";
newbtn.style.color = "white";

let div = document.querySelector("div");
div.append(newbtn);


let para = document.querySelector(".content");
para.classList.add("new-content");


// there is a toggle button that change the mode to dark to light...
let btn = document.querySelector("#btn");
let body = document.querySelector("body");
let div1 = document.querySelector(".outer");

let mode = "light";

btn.addEventListener('click', () => {
    // Light mode
    if(mode === "light"){
        body.classList.add("dark");
        body.classList.remove("light");
        body.style.transition = "1.5s"
        btn.style.transition = "transform 0.5s linear"
        btn.style.transform = "translateX(50px)";
        btn.style.backgroundColor = "black";
        div1.style.backgroundColor = "white";
        mode = "dark";
    }
    // Dark mode
    else{
        body.classList.add("light");
        body.classList.remove("dark");
        body.style.transition = "1.5s"
        btn.style.transition = "transform 0.5s linear"
        btn.style.transform = "translateX(0)";
        btn.style.backgroundColor = "white";
        div1.style.backgroundColor = "black";
        mode = "light";
    }

    if(mode === "light"){
        div1.style.borderColor = "black";
    }
    else{
        div1.style.borderColor = "white";
    }
});




