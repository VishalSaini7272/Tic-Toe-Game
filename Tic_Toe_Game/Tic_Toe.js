let boxes = document.querySelectorAll(".box");              //Access the all boxes element.
let resetBtn = document.querySelector("#reset-btn");        //Access the reset-button.
let newGameBtn = document.querySelector("#new-btn");         //Access the new-button.
let msgContainer = document.querySelector(".msg-container");//Access the msgContainer.
let msg = document.querySelector(".msg");                   //Access the msg.


let turnX = true;                                   // if, turnX is true(initial condition)
const winningPatterns = [                                // These are the winning patterns.
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


//*sixth part*//
const resetGame = ()=> {
    turnX = true;                  //here, when game is reset starting condition will come.
    enableBoxes();                       //call the enable function.
msgContainer.classList.add("hide"); // again we need to remove the hide content, so add the hide from classList.
}


// *First part* //
boxes.forEach((box) => {                              // for click the each box.
    box.addEventListener("click", () => {           // apply the eventListner for all boxs.
console.log("box clicked");
if (turnX === true){                         //if, playerX is true.
    box.innerText = "X";                     // print the X on the box.
    turnX = false;                  // then turn off the playerX(which is not print again.)
}else { //playerO
    box.innerText = "O";        // else print the O.
    turnX = true;              // and then playerX is on.
}
//*after the third & fourth part*//
box.disabled = true;                // after click the one button, that button is disable.
checkWinner ();                    //checking the winner condition.
    });
});


//* Fourth part*//
const disableBoxes = () => {  // making the function for disable the balance boxes after announcing the winner.
    for (box of boxes) {
        box.disabled = true;
    }
};

   
//*Fifth Part*//
const enableBoxes = ()=> {
for (box of boxes) {
    box.disabled = false;   //All boxes are enable.
    box.innerText = "";  //Condition of reset all boxes are empty through this.
}
};


//* Third Part*//
const showWinner = (winner) => {            // make the function of showWinner.
msg.innerText =`Congratulations, winner is ${winner}`; // put the innerText in msg.
msgContainer.classList.remove("hide"); //remove the class "hide" from msgContainer. 
disableBoxes();                      // call the disable boxes after announcing the winner.
};


//*Second part*//
const checkWinner = ()=> {                    //loop for checking the winner.
for (pattern of winningPatterns){            //forLoop are apply.
    let post1 = boxes[pattern[0]].innerText;  //check the position 1 on the boxes element at pattern index zero(0), which text is available.
    let post2 = boxes[pattern[1]].innerText;
    let post3 = boxes[pattern[2]].innerText;
if (post1 != "" && post2 != "" && post3 != "") //here, all the position is not equal to empty.
if (post1 === post2 && post2 === post3){  // this is the condition of winning in which all positions are equal to each other.
    console.log("winner", post1); //print the winner which is available on position 1.
showWinner (post1);              // call the winner on function.
}
}
};

//*Last part*//
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame); 