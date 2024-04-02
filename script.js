// Define the dice
const dice = {
    green: [4, 4, 4, 4, 0, 0], // Green die
    blue: [3, 3, 3, 3, 3, 3], // Blue die
    red: [2, 2, 2, 2, 6, 6], // Red die
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
function playGames() {
    const games = playMultipleGames();
    displayGameResults(games);
}

// Function to display game results
function displayGameResults(games) {
    const resultContainer = document.getElementById("game-results");
    resultContainer.innerHTML = "";

    games.forEach((game, index) => {
        const gameNumber = index + 1;
        const gameResultElement = document.createElement("div");
        gameResultElement.innerHTML = `<b>Game ${gameNumber}:</b> Player 1 (${game.player1Die}) vs Player 2 (${game.player2Die}) - Winner: ${game.winner}, Player 1 Score: ${game.player1Score}, Player 2 Score: ${game.player2Score}`;
        resultContainer.appendChild(gameResultElement);
    });
}

// Update button functionality
document.getElementById("playButton").addEventListener("click", playGames);
