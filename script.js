let result = [0,0];

const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => btn.addEventListener('click', () => {
    playRound(btn.textContent.toUpperCase(),computerChoice());
    console.log(result);
    if(result[0] === 5 || result[1] === 5)
    {
        const divResul = document.querySelector('#result');
        divResul.textContent = result[0] === 5 ? 'Congratulations! You win.':'Sorry! You lose.';
    }
}));

const playRound = (player, computer) => {
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