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

const playRound = (player, computer) => {
    if (computer === player)
        return `It's a draw, both chose ${player}`;

    let message = "";

    switch(player){
        case "ROCK":
            message = computer === "SCISSORS" ? `You Win! ${player} beats ${computer}` : `You Lose! ${computer} beats ${player}`;
            break;
        case "PAPER":
            message = computer === "ROCK" ? `You Win! ${player} beats ${computer}` : `You Lose! ${computer} beats ${player}`;
            break;
        case "SCISSORS":
            message = computer === "PAPER" ? `You Win! ${player} beats ${computer}` : `You Lose! ${computer} beats ${player}`;
            break;
    }

    return message;
}

const game = () => {
    let playerChoice = "";

    while (playerChoice !== "ROCK" && playerChoice !== "PAPER" && playerChoice !== "SCISSORS")
    {
        playerChoice = prompt("Type Rock, Paper or Scissors:").toUpperCase();
    }

    console.log(playRound(playerChoice, computerChoice()));
}

game();
