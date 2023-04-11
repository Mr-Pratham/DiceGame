function rollDice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;    // 1-6 numbers
    var randomizedDiceImage = "dice" + randomNumber1 + ".png";  //dice1.png - dice6.png
    var randomImageSource = "Images/" + randomizedDiceImage;  //Images/dice1.png - Images/dice6.png
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImageSource);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomImageSource2 = "Images/dice" + randomNumber2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩Player 1 Wins✌🏼!";
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩Player 2 Wins✌🏼!";
    } else {
        document.querySelector("h1").innerText = "🕊️ Draw !";
    }
}

if (performance.getEntriesByType("navigation")[0].type === "reload") {
    rollDice();
} else {
    document.querySelector("h1").innerText = "🎲 Roll Dice 🎲";
}
