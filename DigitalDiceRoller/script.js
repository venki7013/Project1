function rollDice() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    const diceImage = document.getElementById('img');
    diceImage.src = `./Images/${randomNumber}.png`;
    // Add the 'styled-image' class to the image
    diceImage.classList.toggle('styled-image');
}