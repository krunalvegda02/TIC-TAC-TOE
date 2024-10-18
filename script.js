let boxes = document.querySelectorAll(".box");
let resetGameBtn = document.querySelector("#resett");
let newGameBtn = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let moveCount = 0;
let turn0=true;    //playerX, playerY

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

//Showing winner and unhiding msg-container
const showWinner= (Winner) => {
   msg.innerText = `Congratulations 🎉, Winner is ${Winner}`;
   msgContainer.classList.remove("hide");
}

//Check who is winner 
const checkWinner = ( ) => {
    for(let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
               console.log("Winner " + pos1val);
               disabledBoxes();
               showWinner(pos1val);
               return; 
            }
        }
        if (moveCount === 9) {
            msg.innerHTML = "It's a draw! &#128533";
            msgContainer.classList.remove("hide");
        }

    }
}

//Dissabled all the buttons after winner is declared
const disabledBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

//enables all the buttons after 
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}

// reset button 
const resetGame = () => {
    turn0 = true;
    moveCount = 0;
    enableBoxes();                         //enabling all  boxes
    msgContainer.classList.add("hide");   //hiding uppper container after reseting game 
}

// new game button
const newGame = () => {

}

// main logic
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0){
         box.innerText = "O";
         turn0 = false;
        } 
        else{
         box.innerText = "X";
         turn0 = true;
        }
        box.disabled = true;
        moveCount++; 

        checkWinner();
     });
});

newGameBtn.addEventListener("click",resetGame);
resetGameBtn.addEventListener("click",resetGame);
