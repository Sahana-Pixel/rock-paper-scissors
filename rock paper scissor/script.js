let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");//selecting choice from html
const msg=document.querySelector('#msg')//her we are going to select msg id or p paly you move sentence to replace if user win or lose
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"] ;
   const randidx=Math.floor( Math.random()*3);//it calls random number floor return integer,random by taking index of array,*3 will return value betweeen 0-2 if want 0-9 then multply by 10 one number larger
   return options[randidx]; //randindx reurtns index and options is array so i will take random number from math.random and tht number acts as index

} 

const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="game was draw. play again."
    msg.style.backgroundColor="#081b31"
}


const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore
        console.log("you win");
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green"
    }
  else{
    compScore++;
    compScorePara.innerText=compScore
    console.log("you lose");
    msg.innerText=`You lose. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor="red"
  }  
}

const PlayGame=(userChoice)=>{
    console.log("user choice = ",userChoice)//we passed userchoice
    const compChoice=genCompChoice();
    console.log("comp choice =",compChoice)//this can be removed as it is used for reference
    
    if(userChoice===compChoice){
        //both are equal
        drawGame();
    }//if two ae not equal then
    else{

        let userWin=true;//taking user as true if user win it will true otherwise false
        if(userChoice==="rock"){
            //userwin if chompchoice condition false which mean if conditiion of computer choice if true it return false to userchoic whic means user is out if not it returns true
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){

            userWin=compChoice==="scissors"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }

        showWinner(userWin,userChoice,compChoice);
    }

}


//this is when u click a button
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");//id was displaying like paper scissor when we press choice where we know every individual has choice and each choice has id like paper scissor rock
        console.log(userChoice);//in this it displays what user has pressed(RPS)
        PlayGame(userChoice);//we gonna pass user choice to playgame

    })
})