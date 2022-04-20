var randomNumber1 = Math.floor((Math.random() * 6) + 1);
document.querySelector("img.img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
document.querySelector("img.img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
var shortHand = document.querySelector("h1");
if (randomNumber1 === randomNumber2) {
  shortHand.textContent = "Draw !";
} else if (randomNumber1 > randomNumber2) {
  shortHand.textContent = "Player 1 wins !";
} else {
  shortHand.textContent = "Player 2 wins !";
}
