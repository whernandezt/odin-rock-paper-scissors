let result = [0,0];
let rounds = 0;

const buttons = document.querySelectorAll('.btnOption');

buttons.forEach(btn => btn.addEventListener('click', () => {
    playRound(btn.textContent.toUpperCase(),computerChoice());
    const score = document.querySelector('.score');
    score.textContent = `Score: ${result[0]} vs ${result[1]}`
    console.log(result);
    if(result[0] === 5 || result[1] === 5)
    {
        const winner = document.createElement('h3');
        winner.classList.add('winner');
        winner.textContent = result[0] === 5 ? 'Congratulations! You win.':'Sorry! You lose.';
        const divResul = document.querySelector('#result');
        divResul.appendChild(winner);

        const options = document.querySelector('.options');
        options.style.display = 'none';

        const playAgain = document.createElement('button');
        playAgain.classList.add('btn','playAgain');
        playAgain.textContent = 'Play again';

        playAgain.addEventListener('click', () => {
            location.reload();
        });

        divResul.appendChild(playAgain);

    }
}));


const playRound = (player, computer) => {
    rounds++;

    if (computer === player)
        return;

    switch(player){
        case "ROCK":
            computer === "SCISSORS" ? result[0]++ : result[1]++;
            break;
        case "PAPER":
            computer === "ROCK" ?  result[0]++ : result[1]++;
            break;
        case "SCISSORS":
            computer === "PAPER" ? result[0]++ : result[1]++;
            break;
    }

    return;
}

const computerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if(randomNumber === 1)
    {
        return "ROCK";
    }

    if(randomNumber === 2)
    {
        return "PAPER";
    }

    return "SCISSORS";
}