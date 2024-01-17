let userInput = prompt(`Please enter your choice. Rock, Paper or Scissors? `);

function getComputerChoice {
    let rand = Math.floor(Math.random()*3);
    let computerResponse;
    if (rand === 0) {
        computerResponse = "Rock";
    } else if (rand === 1) {
        computerResponse = "Paper";
    } else {
        computerResponse = "Scissors";
    }
    return computerResponse;
}