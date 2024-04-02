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
