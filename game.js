let userscore =0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const  genComputerChoices = () => {
    const options =["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random() *3);
    return options[randIdx];
};

const drawGame = () => {
   
    msg.innerText="Game was Draw! Play again";
    msg.style.backgroundColor="081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin)
    {
    userscore++;
    userScorePara.innerText = userscore;
   
    msg.innerText = `You win ! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
    }

    else
    {
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerText=`You Loose ! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

};


const playGame =(userChoice) => {


    const compChoice = genComputerChoices();
    console.log("compChoice = ", compChoice);

    if(userChoice == compChoice){
        //Draw Game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice ==="rock"){
            //scissors, paper
           userWin= compChoice === "paper" ?false:true;
        } else if (userChoice === "paper")
        {
            userWin= compChoice === "scissor" ? false:true;
        }else{
            //rock , paper
            userWin =compChoice=== "rock" ?false:true;
        }
        showWinner(userWin, userChoice, compChoice);

    }

};


choices.forEach((choice) => {
    // console.log(choice);

    choice.addEventListener("click",()=> {
        const choiceId = choice.getAttribute("id");
        console.log("Choice was clicked ",choiceId);
        //console.log("Choice was clicked");
        playGame(choiceId);
    });
});