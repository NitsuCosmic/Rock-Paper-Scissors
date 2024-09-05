const textScore = document.querySelector("#score");
const rockBtn = document.querySelector("#btn-rock");
const paperBtn = document.querySelector("#btn-paper");
const scissorsBtn = document.querySelector("#btn-scissors");
const winsQuantity = document.querySelector("#wins-quantity");
const lossesQuantity = document.querySelector("#losses-quantity");
const tiesQuantity = document.querySelector("#ties-quantity");
const resultText = document.querySelector("#result-text");
const electionText = document.querySelector("#election-text");
const resetBtn = document.querySelector("#reset-btn");

const score = JSON.parse(localStorage.getItem("score")) || {
	wins: 0,
	losses: 0,
	ties: 0,
};

function updateUI() {
	textScore.textContent = score.wins;
	winsQuantity.textContent = score.wins;
	lossesQuantity.textContent = score.losses;
	tiesQuantity.textContent = score.ties;
}

updateUI();

function playGame(move) {
	const cases = {
		"rock-rock": "tie",
		"rock-paper": "lose",
		"rock-scissors": "win",
		"paper-rock": "win",
		"paper-paper": "tie",
		"paper-scissors": "lose",
		"scissors-rock": "lose",
		"scissors-paper": "win",
		"scissors-scissors": "tie",
	};
	const movements = ["rock", "paper", "scissors"];
	const computerMove = movements[Math.round(Math.random() * 2)];
	const result = cases[`${move}-${computerMove}`];

	switch (result) {
		case "win":
			score.wins++;
			resultText.textContent = "You win!";
			break;
		case "lose":
			score.losses++;
			resultText.textContent = "You lose!";
			break;
		default:
			score.ties++;
			resultText.textContent = "It's a tie!";
	}

	updateUI();
	electionText.textContent = `You chose: ${move}. Computer chose: ${computerMove}`;
	saveScore(score);
}

function resetScore() {
	score.wins = 0;
	score.losses = 0;
	score.ties = 0;
	updateUI();
	saveScore(score);
}

function saveScore(obj) {
	localStorage.setItem("score", JSON.stringify(obj));
}

rockBtn.addEventListener("click", () => {
	playGame("rock");
});

paperBtn.addEventListener("click", () => {
	playGame("paper");
});

scissorsBtn.addEventListener("click", () => {
	playGame("scissors");
});

resetBtn.addEventListener("click", resetScore);
