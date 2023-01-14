function endGame(win = true) {
    document.getElementById("page-2").style.display = "none";
    document.getElementById("page-3").style.display = "flex";
    document.getElementById("player-score").innerHTML = String(
        calculateScore(attempts, guessTo + 1 - guessFrom)
    );
    if (win === true) {
        document.getElementById("analysis-correct-answer").outerHTML = "";
    } else {
        document.getElementById("analysis-correct-answer").innerHTML =
            "<br /><br />The correct answer was " + String(targetValue);
    }
}

function calculateScore(attempts, range) {
    if (attempts <= 0) {
        return 0;
    }
    maxAttemptsToHaveAllResults = Math.floor(Math.log2(range));
    attemptsUsed = totalAttempts + 1 - attempts;
    score = Math.ceil(maxAttemptsToHaveAllResults / attemptsUsed);
    return score;
}
