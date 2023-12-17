let btns= document.querySelectorAll(".btn");
let resetbtn= document.querySelector(".reset");
let turnx= true;
const winPatterns= [[0,1,2],
[0,4,8],
[0,3,6],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]];

let func= (event) => {
    let btn= event.target; // access the button element triggered the event
    console.log(event.target);
    if(turnx){
        btn.innerText= "x";
        turnx= false;
    }
    else{
        btn.innerText= "o";
        turnx= true;
    }
}

btns.forEach((btn) => {
    btn.addEventListener("click", func);
})


