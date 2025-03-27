let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
  
const genCompChoice = () => {
    const options = ["tosh", "qog'oz", "qaychi"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "O'yin durang! Qayta o'ynang..";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `Siz yutdingiz! Sizning ${userChoice} ${compChoice}ni yengdi!`;
        msg.style.backgroundColor = "green";
    }else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `Siz yutqazdingiz! Kompyuterning ${compChoice} sizning ${userChoice}ni yengdi!`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "tosh"){
            // computer = qog'oz, qaychi
            userWin = compChoice === "qog'oz" ? false : true;
        } else if (userChoice === "qog'oz"){
            // computer = tosh, qaychi
            userWin = compChoice === "qaychi" ? false : true;
        } else {
            // computer = tosh, qog'oz
            userWin = compChoice === "tosh" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});