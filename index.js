alert("Welcome to 🎲Roll the Dice! Have fun 🙌");

function onRollClick() {
  var randomDiceNumber1 = Math.floor(Math.random() * 6 + 1);
  var randomDiceNumber2 = Math.floor(Math.random() * 6 + 1);
  
  var redDiceImg = randomDiceNumber1 + ".png";
  var blackDiceImg = randomDiceNumber2 + ".png";

  var redDice = document.getElementsByClassName('diceRed');
  var blackDice = document.getElementsByClassName('diceBlack');

  redDice[0].setAttribute("src", "images/" + redDiceImg);
  blackDice[0].setAttribute("src", "images/black" + blackDiceImg);

}
