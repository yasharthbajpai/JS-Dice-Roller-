function rollDice(){
    const numOfDice = document.getElementById('numDice').value;
    const diceResult = document.getElementById('diceResult');
    const diceImages = document.getElementById('diceImages');
    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        console.log(value);
        values.push(value);
        images.push(`<img src="images/dice-${value}.svg">`);
    }

    diceResult.textContent= `You rolled: ${values.join(', ')}`;
    diceImages.innerHTML = images.join(' ');

}