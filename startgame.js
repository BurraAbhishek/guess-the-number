var guessFrom = null;
var guessTo = null;
var targetValue = null;
var attempts = 0;
var totalAttempts = 1;

function startGame() {
    guessFrom = Math.floor(Number(document.getElementById("guess-from").value));
    guessTo = Math.floor(Number(document.getElementById("guess-to").value));
    if (guessFrom > guessTo) {
        throw new Error(
            "Minimum value must be less than or equal to Maximum value."
        );
    }
    attempts = Math.floor(
        Number(document.getElementById("max-attempts").value)
    );
    if (attempts < 1) {
        throw new Error("At least 1 attempt is required.");
    }
    totalAttempts = Math.floor(
        Number(document.getElementById("max-attempts").value)
    );
    targetValue = generateCorrectValue(guessFrom, guessTo);
    document.getElementById("page-1").style.display = "none";
    document.getElementById("page-2").style.display = "flex";
    document.getElementById("user-guess").min = guessFrom;
    document.getElementById("user-guess").max = guessTo;
}

function generateCorrectValue(min, max) {
    return min + Math.floor((max + 1 - min) * Math.random());
}

function aboutGame() {
    window.location.href = "help.html";
}
