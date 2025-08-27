let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const resetbtn=document.querySelector(".reset");

let genCompChoice=()=>{
    const options=["Rock","Paper","Scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame=()=>{ 
    msg.innerText = "Game Draw! Play again!";
    msg.style.backgroundColor = "#081b31"; 
    
};
const showWinner=(userWin,userChoice,compChoice)=> {
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText = `win! your ${userChoice} beats ${compChoice}`;
           msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText = `lost. ${compChoice} beats ${userChoice}`;
        msg.innerText="you lose";
        msg.style.backgroundColor="red";}
}
const playGame=(userChoice)=>{
    console.log("user choice =",userChoice);
    const compChoice=genCompChoice();
    console.log("computer choice =",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        userWin=true;
        if(userChoice==="Rock")
            //scissors,paper{
            userWin=compChoice==="Paper"?false:true;
            else if(userChoice==="Paper"){
                //rock,scissors
                userWin=compChoice==="Scissors"?false:true;
            }

            else{
                //rock paper
                userWin=compChoice=="Rock" ? false:true;
            
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",() => {
        let userChoice=choice.getAttribute("id")
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
   });

   resetbtn.addEventListener("click",()=>{
    let userScore=0;
    let compScore=0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    msg.innerText = "Game Reset! Start playing!";
    msg.style.backgroundColor = "#081b31";

   });