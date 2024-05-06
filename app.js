let userScore = 0 ; 
let compScore = 0 ; 
let msg = document.querySelector("#msg");
let choices = document.querySelectorAll(".choice");

const userScorep = document.querySelector("#user-score");
const compScorep = document.querySelector("#comp-score");

const drawGame =()=>{
    console.log("The Game was draw");
    msg.innerText ="The Game was draw";
    msg.style.backgroundColor = "#081b31";

}

const playGame = (userChoice) => {
    //Generate computer choice
    const compChoice = genCompChoice();
  
    if (userChoice === compChoice) {
      //Draw Game
      drawGame();
    } else {
      let userWin = true;
      if (userChoice === "rock") {
        //scissors, paper
        userWin = compChoice === "paper" ? false : true;
      } else if (userChoice === "paper") {
        //rock, scissors
        userWin = compChoice === "scissor" ? false : true;
      } else {
        //rock, paper
        userWin = compChoice === "rock" ? false : true;
      }
      showWinner(userWin,userChoice ,compChoice);
    }
  };

const showWinner = (userWin, userChoice, compChoice)=> {
    if (userWin){
        userScore++ ;
        userScorep.innerText = userScore;
        console.log("you win"); 
        msg.innerText = `Congo!! You win !! ${userChoice} wins ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++ ;
        compScorep.innerText = userScore;
        console.log("you loose");
        msg.innerText = `Oops you loose!! ${compChoice} wins ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
    //   console.log("clicked",userChoice);
      playGame(userChoice);
    });
  });

const genCompChoice =()=> {
    //rock , paper , scissors 
    const options = ["rock","paper","scissor"];
    const randIDX = Math.floor(Math.random()*3);
    return options[randIDX];
}