function guessValue() {
    var userInput = document.getElementById("user-guess").value;
    var userValue = Math.floor(Number(userInput));
    sendMessage(userValue);
    if (userValue === targetValue) {
        endGame();
    } else {
        if (userValue > targetValue) {
            receiveMessage(
                "The number you are looking for is less than " +
                    String(userValue)
            );
            attempts--;
            if (attempts === 0) {
                endGame(false);
            }
            receiveMessage(String(attempts) + " attempts remaining.");
            document.getElementById("user-guess").max = userValue;
        } else if (userValue < targetValue) {
            receiveMessage(
                "The number you are looking for is greater than " +
                    String(userValue)
            );
            attempts--;
            if (attempts === 0) {
                endGame(false);
            }
            receiveMessage(String(attempts) + " attempts remaining.");
            document.getElementById("user-guess").min = userValue;
        }
    }
}
