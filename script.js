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
    let rounds = 5;
    let playerScore = 0;
    let computerScore = 0;
    let result = "";
    
    for(i = 0; i < rounds; i++){
        while (playerChoice !== "ROCK" && playerChoice !== "PAPER" && playerChoice !== "SCISSORS")
        {
            playerChoice = prompt("Type Rock, Paper or Scissors:").toUpperCase();
        }

        result = playRound(playerChoice, computerChoice());

        if(result.includes("Win")){
            playerScore++;
        }

        if(result.includes("Lose")){
            computerScore++;
        }

        console.log(`ROUND #${(i + 1)}: ${result}`);
        playerChoice = "";
    }

    if(playerScore === computerScore){
        console.log("It's a Draw!");
    }
    else if(playerScore > computerScore){
        console.log(`You Win! You Score ${playerScore} vs ${computerScore} of ${rounds}`);
    }
    else {
        console.log(`You Lose! You Score ${playerScore} vs ${computerScore} of ${rounds}`);
    }
}

//game();
