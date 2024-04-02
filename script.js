// Define the dice
const dice = {
    green: [4, 4, 4, 4, 0, 0], // Green die
    blue: [3, 3, 3, 3, 3, 3], // Blue die
    red: [2, 2, 2, 2, 6, 6], // Red die (corrected)
    yellow: [5, 5, 5, 1, 1, 1] // Yellow die
};

// Function to roll a die
function rollDie(die) {
    return die[Math.floor(Math.random() * die.length)];
}

// Function to play a single game
function playGame(player1Die, player2Die) {
    let player1Score = 0;
    let player2Score = 0;

    // Play 20 rounds
    for (let i = 0; i < 20; i++) {
        const player1Roll = rollDie(dice[player1Die]);
        const player2Roll = rollDie(dice[player2Die]);

        // Determine the winner of the round
        if (player1Roll > player2Roll) {
            player1Score++;
        } else {
            player2Score++;
        }
    }

    // Determine the winner of the game
    let winner;
    if (player1Score > player2Score) {
        winner = "Player 1";
    } else if (player2Score > player1Score) {
        winner = "Player 2";
    } else {
        winner = "Tie";
    }

    return { player1Score, player2Score, winner };
}

// Function to play multiple games
function playGames(player1Die, player2Die) {
    const game = playGame(player1Die, player2Die);
    displayGameResult(game, player1Die, player2Die);
}

// Function to display game result
function displayGameResult(game, player1Die, player2Die) {
    const resultContainer = document.getElementById("game-results");
    resultContainer.innerHTML = `<b>Player 1 Die:</b> ${player1Die}, <b>Player 2 Die:</b> ${player2Die}<br>`;
    resultContainer.innerHTML += `<b>Winner:</b> ${game.winner}, <b>Player 1 Score:</b> ${game.player1Score}, <b>Player 2 Score:</b> ${game.player2Score}`;
}

// Update button functionality
document.getElementById("playButton").addEventListener("click", function() {
    const player1Die = document.getElementById("player1-die").value;
    const player2Die = document.getElementById("player2-die").value;
    playGames(player1Die, player2Die);
});
