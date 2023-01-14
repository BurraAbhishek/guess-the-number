function sendMessage(message) {
    var background = document.createElement("div");
    background.className = "sent-message-background";
    var container = document.createElement("div");
    container.className = "sent-message";
    var text = document.createTextNode(message);
    container.appendChild(text);
    background.appendChild(container);
    document.getElementById("game-messages").appendChild(background);
}

function receiveMessage(message) {
    var background = document.createElement("div");
    background.className = "received-message-background";
    var container = document.createElement("div");
    container.className = "received-message";
    var text = document.createTextNode(message);
    container.appendChild(text);
    background.appendChild(container);
    document.getElementById("game-messages").appendChild(background);
}
