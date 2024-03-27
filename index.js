function getComputerChoice() {

    let rand = Math.floor(Math.random()*3);

    let computerResponse;

    switch (rand) {

        case (0):
            computerResponse = 'rock';            
            break;
        case (1):
            computerResponse = 'paper';            
            break;
        case (2):
            computerResponse = 'scissors';            
            break;        

    }

    return computerResponse;

}

function playRound(userInput, score) {

    const computerSelection = getComputerChoice();       

    if (computerSelection === userInput) {
        
        gameMessage.textContent = `${userInput.charAt(0).toUpperCase() + userInput.slice(1)} draws with ${computerSelection}. You drew that round!`;       

    } else if (userInput === `rock` && computerSelection === `scissors` || userInput === `paper` && computerSelection === `rock` || userInput === `scissors` && computerSelection === `paper`) {

        gameMessage.textContent = `${userInput.charAt(0).toUpperCase() + userInput.slice(1)} beats ${computerSelection}. You won that round!`;        
        score.playerPoint += 1;

    } else {

        gameMessage.textContent = `${userInput.charAt(0).toUpperCase() + userInput.slice(1)} is beaten by ${computerSelection}. You lost that round!`;        
        score.computerPoint += 1;        

    };

    playerTally.textContent = `Player score: ${score.playerPoint}`;
    computerTally.textContent = `Computer score: ${score.computerPoint}`;

    if (score.computerPoint === 5 || score.playerPoint === 5) {

        buttList.forEach(ele => {
    
            ele.removeEventListener('click', clickEvent);
    
        });    
    };

    if (score.computerPoint === 5) {
        
        finalGameMessage.textContent = "You lost!";
        finalGameMessage.setAttribute('class','lost');

    };

    if (score.playerPoint === 5) {
        
        finalGameMessage.textContent = "You won!";
        finalGameMessage.setAttribute('class','won');

    };   

    return score;

}

function clickEvent(event) {

    switch (event.target.className) {

        case 'rockButton':
            userInput = 'rock';
            break;
        
        case 'paperButton':
            userInput = 'paper';
            break;

        case 'scissorsButton':
            userInput = 'scissors';
            break;

    }

    playRound(userInput, score);    

};

let score = {
    playerPoint: 0,
    computerPoint: 0
};

let userInput;

const playerTally = document.querySelector('.playerScore');
const computerTally = document.querySelector('.computerScore');

const gameMessage = document.querySelector('.announcement');
const finalGameMessage = document.querySelector('.announcementFinal')

const buttList = document.querySelectorAll('input');

buttList.forEach(ele => {

    ele.addEventListener('click', clickEvent);

});







































/* //const userInput = prompt(`Please enter your choice. Rock, Paper or Scissors? `);
        
        //userInput.toLowerCase();

        function getComputerChoice() {
            let rand = Math.floor(Math.random()*3);
            let computerResponse;
            if (rand === 0) {
                computerResponse = `rock`;
            } else if (rand === 1) {
                computerResponse = `paper`;
            } else {
                computerResponse = `scissors`;
            }
            return computerResponse;
        }

        //const computerSelection = getComputerChoice();

        function playRound(userInput, computerSelection) {
            
            if (userInput === `rock` && computerSelection === `rock` || userInput === `paper` && computerSelection === `paper` || userInput === `scissors` && computerSelection === `scissors`) {
                alert(`Draw. Round not counted!`);
            } else if (userInput === `rock` && computerSelection === `scissors` || userInput === `paper` && computerSelection === `rock` || userInput === `scissors` && computerSelection === `paper` ) {
                document.querySelector(".human").innerHTML +="Win";          
            } else {
                document.querySelector(".cpu").innerHTML +="Win";
            }

        }

        function game() {
            
            while (1) {
                const userInput = prompt(`Please enter your choice. Rock, Paper or Scissors? `);
                userInput.toLowerCase();
                const computerSelection = getComputerChoice();
                playRound(userInput, computerSelection);

                if (document.querySelector(".human").innerHTML === "WinWinWin" || document.querySelector(".cpu").innerHTML === "WinWinWin" ) {
                break;
                }

            }

            if (document.querySelector(".human").innerHTML === "WinWinWin") {
                document.querySelector(".result").innerHTML = "You Win!"
            } else {
                document.querySelector(".result").innerHTML = "The Computer Wins!"
            }

        }

        //game(); */