// 1. js파일에서 접근해야하는 html dom요소 선언
const myHandText = document.getElementById("my-hand-text");
const myHandIcon = document.getElementById("my-hand-icon");

const computerText = document.getElementById("computer-hand-text");
const computerIcon = document.getElementById("computer-hand-icon");

const rockBtn = document.getElementById("rock");
const scissorsBtn = document.getElementById("scissors");
const paperBtn = document.getElementById("paper"); 

const resetBtn = document.getElementById("reset-button");
const darkModeBtn = document.getElementById("darkmode-button");

const myScoreDisplay = document.querySelector(".my-score"); 
const comScoreDisplay = document.querySelector(".computer-score");

const gameResult = document.getElementById("display-result");

const bodyElement = document.body;
const contentsElement = document.querySelector(".contents");

let myScore = 0;
let comScore = 0;

let result = null;

let comWinStreak = 0;

// 2. 이벤트 설정
rockBtn.addEventListener("click", displayMyChoice);
scissorsBtn.addEventListener("click", displayMyChoice);
paperBtn.addEventListener("click", displayMyChoice);

resetBtn.addEventListener("click", resetGame);
darkModeBtn.addEventListener("click",setDarkMode);

// 3. displaymyChoice 함수 선언
function displayMyChoice(e) {
    let clickedBtn = e.currentTarget.id;
    let clickedIcon = e.target.className;

    myHandText.innerText = clickedBtn 
    myHandIcon.className = clickedIcon;

    start(clickedBtn);
}

// 4. 랜덤으로 뱉는 컴퓨터
function getComChoice(e) {
    const randomValue = {
        0 : ["rock", "fa-regular fa-hand-back-fist"],
        1 : ["scissors", "fa-regular fa-hand-scissors fa-rotate-90"],
        2 : ["paper", "fa-regular fa-hand"],
    }

    const randomIndex = Math.floor(Math.random()*3);

    return randomValue[randomIndex];
}

// 5. 컴퓨터의 선택이 화면에 보이도록 displayComChoice 함수 선언
function displayComChoice(result){
    computerText.innerText = result[0];
    computerIcon.className = result[1];
}

// 6. start 함수 
function start(myChoice) {
    let resultArray = getComChoice();
    let comChoice = resultArray[0];

    displayComChoice(resultArray);
    determineWinner(myChoice, comChoice);
}

// 7. 조건문으로 승패 결정하기 
function determineWinner(myChoice, comChoice){

    if (myChoice == comChoice) {
        result = "draw";
        comWinStreak = 0;

    } else if 
    ((myChoice == "rock" && comChoice == "scissors") ||
    (myChoice == "scissors" && comChoice == "paper") ||
    (myChoice == "paper" && comChoice == "rock")) {
        result = "win";
        myScore++;
        updateScore();
        comWinStreak = 0;
    }
    else{
        result = "lose";
        comScore++;
        updateScore();
        comWinStreak++;
    }
    
    gameResult.innerText = result;

    if (comWinStreak >= 3) {
        gameResult.innerText = "Game Over! The computer has won 3 times in a row!";
        setTimeout(resetGame, 5000);  
    }

    return result;
}

// 8. 점수 화면에 출력하기
function updateScore() {
    myScoreDisplay.innerText = myScore;  
    comScoreDisplay.innerText = comScore; 
}

updateScore();

// 9. 리셋버튼 활성화하기 
function resetGame(){
    myScore = 0;  
    comScore = 0;
    updateScore();  

    myHandText.innerText = "";  
    myHandIcon.className = ""; 

    computerText.innerText = "";
    computerIcon.className = "";

    gameResult.innerText = ""; 
}

// 10. 다크모드 구현하기
function setDarkMode() {
    bodyElement.classList.toggle("dark-mode");
    contentsElement.classList.toggle("dark-mode");

    if (bodyElement.classList.contains("dark-mode")) {
        darkModeBtn.classList.remove("fa-solid", "fa-moon");
        darkModeBtn.classList.add("fa-solid", "fa-sun");
    } else {
        darkModeBtn.classList.remove("fa-solid", "fa-sun");
        darkModeBtn.classList.add("fa-solid", "fa-moon");
    }
}



