function guessValue() {
    var userInput = document.getElementById("user-guess").value;
    var userValue = Math.floor(Number(userInput));
    if (userValue > document.getElementById("user-guess").max) {
        throw new Error(
            "Please enter an integer less than " +
                String(Number(document.getElementById("user-guess").max) + 1)
        );
    } else if (userValue < document.getElementById("user-guess").min) {
        throw new Error(
            "Please enter an integer greater than " +
                String(Number(document.getElementById("user-guess").min) - 1)
        );
    } else {
        sendMessage(userValue);
        if (userValue === targetValue) {
            endGame();
        } else {
            if (userValue > targetValue) {
                receiveMessage(
                    "The number you are looking for is less than " +
                        String(userValue)
                );
                document.getElementById("user-guess").max = userValue - 1;
            } else if (userValue < targetValue) {
                receiveMessage(
                    "The number you are looking for is greater than " +
                        String(userValue)
                );
                document.getElementById("user-guess").min = userValue + 1;
            }
            attempts--;
            if (attempts === 0) {
                endGame(false);
            }
            if (attempts === 1) {
                receiveMessage("1 attempt remaining.");
            } else {
                receiveMessage(String(attempts) + " attempts remaining.");
            }
        }
    }
}
