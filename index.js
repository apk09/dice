
main();

function main() {

  // first player
  randomNumber();
  var firstRandomNumber = randomNumber();
  var randomPlayer1Image = "images/dice" +  firstRandomNumber + ".png";
  console.log("Player 1:"+firstRandomNumber);
  document.querySelector(".img1").setAttribute("src", randomPlayer1Image);

  // second player
  randomNumber();
  var secondRandomNumber = randomNumber();
  var randomPlayer2Image = "images/dice" +  secondRandomNumber + ".png";
  console.log("Player 2:"+secondRandomNumber);
  document.querySelector(".img2").setAttribute("src", randomPlayer2Image);

  electWinner(firstRandomNumber, secondRandomNumber);

}

function randomNumber() {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}

function electWinner(firstRandomNumber, secondRandomNumber) {
  if (firstRandomNumber > secondRandomNumber) {
    document.querySelector(".container h1").innerHTML = "🚩 Player 1 Wins!";
  } else if (firstRandomNumber < secondRandomNumber) {
    document.querySelector(".container h1").innerHTML = "Player 2 Wins! 🚩";
  } else {
    document.querySelector(".container h1").innerHTML = "Draw :(";
  }
}
