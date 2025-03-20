let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;


let diceImage1 = document.querySelector(".img1");
let diceImage2 = document.querySelector(".img2");

diceImage1.src = `./images/dice${randomNumber1}.png`;
diceImage2.src = `./images/dice${randomNumber2}.png`;


let heading = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  heading.textContent = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  heading.textContent = "Player 2 Wins! 🚩";
} else {
  heading.textContent = "🤝 It's a Draw!";
}
