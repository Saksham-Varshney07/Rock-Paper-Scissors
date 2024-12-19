let userScore = 0;
let compScore = 0;
let tieScore = 0;

const compChoices = ["Rock", "Paper", "Scissors"];
const resetButton = document.getElementById("resetButton");
const userChoiceButtons = document.querySelectorAll(".choice-button");

// Elements to update scores in the scorecard
const userScoreDisplay = document.getElementById("userScore");
const compScoreDisplay = document.getElementById("computerScore");
const tieScoreDisplay = document.getElementById("tieScore");

userChoiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const userChoice = button.getAttribute("data-choice");
        const randomCompChoice = Math.floor(Math.random() * 3);
        const compChoice = compChoices[randomCompChoice];

        console.log(`User chose: ${userChoice}`);
        console.log(`Computer chose: ${compChoice}`);

        if (userChoice === compChoice) {
            console.log("It's a draw!");
            tieScore++;
            resetButton.style.backgroundColor = "gray";
            resetButton.innerText = "It's a Draw!";
        } else if (
            (userChoice === "Rock" && compChoice === "Scissors") ||
            (userChoice === "Paper" && compChoice === "Rock") ||
            (userChoice === "Scissors" && compChoice === "Paper")
        ) {
            console.log("You win!");
            userScore++;
            resetButton.style.backgroundColor = "green";
            resetButton.innerText = "You Win!";
        } else {
            console.log("You lose!");
            compScore++;
            resetButton.style.backgroundColor = "red";
            resetButton.innerText = "You Lose!";
        }

        // Update scorecard
        updateScorecard();
        console.log(`User Score: ${userScore}, Computer Score: ${compScore}, Ties: ${tieScore}`);
    });
});

resetButton.addEventListener("click", () => {
    // Reset scores
    userScore = 0;
    compScore = 0;
    tieScore = 0;

    // Reset button state
    resetButton.style.backgroundColor = "navy";
    resetButton.innerText = "Reset Game";

    // Update scorecard
    updateScorecard();
    console.log("Game reset.");
});

function updateScorecard() {
    userScoreDisplay.textContent = userScore;
    compScoreDisplay.textContent = compScore;
    tieScoreDisplay.textContent = tieScore;
}
