

let userScore=0;
let compScore=0;
 const choices=document.querySelectorAll(".choice");
 const msg=document.getElementById("msg")
 const usersscore=document.querySelector("#user-score");
 const compsscore=document.querySelector("#comp-score");
 
 
 const genCompChoice=()=>{
    const options =["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
 };
 const drawGame=(userChoice)=>{
    console.log("game was draw");
    msg.innerText="game was draw,play again";
    msg.style.backgroundColor="black";
   
    
 };
 const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        usersscore.innerText=userScore;
        console.log("you win!'");
        msg.innerText="you win!";
        msg.style.backgroundColor="red";
    }else{
        compScore++;
        compsscore.innerText=userScore;
        console.log("you lose");
        msg.innerText=("you lose");
        msg.style.backgroundColor="green";
    };
 };
 const playGame=(userChoice) => {
    console.log("user choice=",userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice=",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper" ? false:true;
        }else if (userChoice==="paper"){
            userWin=compChoice==="scissors" ? false:true;
            

    }else{
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin)
}
 };


  choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
    const userChoice=choice.getAttribute("id");
   
    
    playGame(userChoice);

     });
 });