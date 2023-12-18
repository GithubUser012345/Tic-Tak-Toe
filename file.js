let btns= document.querySelectorAll(".btn");//return's node collection similar 2 array
let resetbtn= document.querySelector(".reset");
let msgContainer= document.querySelector(".msgContainer");
let msg= document.querySelector(".msg");
let newGamebtn= document.querySelector(".newGame");
let turnx= true;
const winPatterns= [[0,1,2],
[0,4,8],
[0,3,6],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]];//btn positions
let count=0;

let func= (event) => {
    let btn= event.target; // access the button element triggered the event
    if(turnx){
        btn.innerText= "X";
        turnx= false;
        btn.style.backgroundColor="green";
    }
    else{
        btn.innerText= "O";
        turnx= true;
        btn.style.backgroundColor="green";
    }
    btn.disabled= true; // 2nd click doesn't effect, the background-color when clicked is default of body
    count++;
    let isWinner= checkWinner();
    if(count ===9 && !isWinner){
        drawGame();
    }
};
btns.forEach((btn) => {
    btn.addEventListener("click", func);
});


let showWinner= (win) => {
    msg.innerText=`Congratulations Player-${win} Won The Game`;
    msgContainer.classList.remove("hide");
};
let drawGame= () => {
    msg.innerText=`It's a Draw`;
    msgContainer.classList.remove("hide");
};
let checkWinner=() => {
    for(pattern of winPatterns){
        let val1= btns[pattern[0]].innerText;
        let val2= btns[pattern[1]].innerText;
        let val3= btns[pattern[2]].innerText;
        if(val1!=='' && val2!='' && val3!==''){
            if(val1=== val2 && val2=== val3){
                disable();
                showWinner(val1);
            }
        }
    }
};
let disable= () => {
    for(let btn of btns){
        btn.disabled= true;
    }
};
let enable= () => {
    for(let btn of btns){
        turnx= "X";
        btn.disabled= false;
        btn.innerText="";
        btn.style.backgroundColor= "white";
    }
};

resetbtn.addEventListener("click", () => {
    msgContainer.classList.add("hide");
    enable();
});
newGamebtn.addEventListener("click", () => {
    msgContainer.classList.add("hide");
    enable();
});

