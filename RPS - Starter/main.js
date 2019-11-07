// ROCK PAPER SCISSORS

// Global Vars (you may add more global vars, but you don't need to)
let count = 3;
let pPick = '';
let cPick = '';


// Event Listeners 
// All necessary listeners added for you. Note that the first three have arguments that are used in the event function's parameter variable.
// DO NOT ALTER THIS SECTION
document.getElementById('rock').addEventListener('click', () => pick('rock'));
document.getElementById('paper').addEventListener('click', () => pick('paper'));
document.getElementById('scissors').addEventListener('click', () => pick('scissors'));
document.getElementById('name-btn').addEventListener('click', setNames);

// Event Functions

// When the appropriate picture is selected, pPick and cPick
// are set, then a countdown timer begins.
// DO NOT ALTER THIS FUNCTION
function pick(playerClicked) {
    pPick = playerClicked;
    cPick = computerChooses();
    countdown();
}

// Allows a 3, 2, 1 countdown before displaying the results of the round.
// DO NOT ALTER THIS SECTION
function countdown() {
    document.getElementById('countdown-area').style.visibility = "visible";
    if (count > 0) {
        document.getElementById('countdown-area').innerHTML = count
        count--;
        setTimeout(countdown, 700);
    }
    else {
        count = 3;
        document.getElementById('countdown-area').style.visibility = "hidden";
        showPicks(pPick, cPick);
        updateScoreArea(getWinner());
    }
}
/*---------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------*/

// Helper Functions

// Prompt the user for player and computer names, then display them in the appropriate area
// Parameters: none
// Return value: none
// Appx lines of code: 4
function setNames() {
    //Prompting user
    let playerName = prompt("Input player name");
    let computerName = prompt("Input computer name");

    //Displaying name
    document.getElementById("p-name").innerHTML = playerName;
    document.getElementById("c-name").innerHTML = computerName;

}

// Read the players name from the appropriate section in the HTML ()
// Parameters: none
// Return value: the player's name
// Appx lines of code: 1
function getPlayerName() {

    //Returning Player name to function
    return document.getElementById("p-name").innerHTML;
}

// Read the computer's name from the appropriate section in the HTML
// Parameters: none
// Return value: the computer's name
// Appx lines of code: 1
function getCompName() {

    //Returning Computer name to function
    return document.getElementById("c-name").innerHTML;
}



// Simulate the computer randomly choosing between rock, paper or scissors at 0.33 chance for each.
// Parameters: none
// Return value: A string - 'rock' , 'paper', or 'scissors'
// Appx lines of code: 8
function computerChooses() {
    //Randomizing Computer choice
    let computerChoice = Math.random();
    computerChoice *= 100;

    //Assigning choices
    if (computerChoice <= 33) {
        return "rock"
    } else if (computerChoice <= 66) {
        return "paper"
    } else {
        return "scissors"
    }

}

// Compare player pick and computer pick to see who wins
// Parameters: none
// Return value: The name of the player who won, or the string 'tie'
// Appx lines of code: 10
function getWinner() {

    //Deciding who wins
    if (pPick == "rock" && cPick == "scissors") {
        return getPlayerName()
    } else if (pPick == "rock" && cPick == "paper") {
        return getCompName()
    } else if (pPick == "paper" && cPick == "scissors") {
        return getCompName()
    } else if (pPick == "paper" && cPick == "rock") {
        return getPlayerName()
    } else if (pPick == "scissors" && cPick == "rock") {
        return getCompName()
    } else if (pPick == "scissors" && cPick == "paper") {
        return getPlayerName()
    } else if (pPick == cPick) {
        return "tie";
    }
}

// Show the updated player/computer score in the table and display in text who won in the 'winner-text' area of the HTML
// Parameters: The name of the winner (you must use this parameter in your code, and not a global variable)
// Return value: none
// Appx lines of code: 12
function updateScoreArea(name) {

    //Score variables
    let playerScore = Number(document.getElementById("p-score").innerHTML)
    let computerScore = Number(document.getElementById("c-score").innerHTML)

    //Adding Score
    if (name == getPlayerName()) {
        playerScore += 1;
    } else if (name == getCompName()) {
        computerScore += 1;
    } else {
        playerScore += 0;
        computerScore += 0;
    }

    //Display Winner
    if (getWinner() == "tie") {
        document.getElementById("winner-text").innerHTML = "Tie"
    } else {
        document.getElementById("winner-text").innerHTML = name + " wins!";
    }

    //Update scores
    document.getElementById("p-score").innerHTML = playerScore;
    document.getElementById("c-score").innerHTML = computerScore;

}

// Update the display area to show what the player/computer chose for this round
// Parameters: none
// Return value: none
// Appx lines of code: 2
function showPicks() {
    //Display choices as images
    document.getElementById('p-move').src = 'images/' + pPick + '.png';
    document.getElementById('c-move').src = 'images/' + cPick + '.png';
}

// Creativity Function. Add your own unique aspect to this project by coding
// your own function(s). Your function must have either parameters or return values
// or both. Change the name of the function to indicate what it will do.
function winStreak() {
    
}