        let playerScore = 0;
        let computerScore = 0;

        const rockButton = document.querySelector("#button-rock");
        const paperButton = document.querySelector("#button-paper");
        const scissorsButton = document.querySelector("#button-scissors");
 
        function computerPlay() {  
            let selectRandom = [Math.floor(Math.random() * 10) + 1]
            if (selectRandom <= 3) {
                return "rock"; }
                else if (selectRandom <= 6) {
                return "paper"; }
                else if (selectRandom >6) {
                return "scissors"; }
        }    
        
        function playRound(playerSelection, computerSelection) {
            if (playerSelection == computerSelection) {
                return "It's a tie!"; }
            else if ((playerSelection == "rock") && (computerSelection == "paper")) {
                computerScore++;
                return "You lose! Paper beats rock."; }
            else if ((playerSelection == "rock") && (computerSelection == "scissors")) {
                playerScore++;
                return "You win! Rock beats scissors."; }
            else if ((playerSelection == "paper") && (computerSelection == "rock")) {
                playerScore++;
                return "You win! Paper beats rock"; }
            else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
                computerScore++;
                return "You lose! Scissors beats paper.";  }
            else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
                computerScore++;
                return "You lose! Rock beats scissors"; }
            else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
                playerScore++;
                return "You win! Scissors beats paper."; }  
            }
    function endGame(playerScore, computerScore) {
        if (playerScore >= 5) {
            document.getElementById("results4").innerHTML = ("Game over. You win!");}
            else if (computerScore >= 5) {
            document.getElementById("results4").innerHTML = ("Game over. Computer wins!"); }
        }
    
    rockButton.addEventListener("click", () => {
        playerSelection = "rock";
        let computerSelection = computerPlay();
    
        document.getElementById("results1").innerHTML = ("Computer chose: " + computerSelection)
        document.getElementById("results2").innerHTML = (playRound(playerSelection, computerSelection));
        document.getElementById("results3").innerHTML = ("Your score: " + playerScore + ", Computer Score: " + computerScore);
        
        endGame(playerScore, computerScore);
    });
   
    paperButton.addEventListener("click", () => {
        playerSelection = "paper";
        let computerSelection = computerPlay();
       
        document.getElementById("results1").innerHTML = ("Computer chose: " + computerSelection)
        document.getElementById("results2").innerHTML = (playRound(playerSelection, computerSelection));
        document.getElementById("results3").innerHTML = ("Your score: " + playerScore + ", Computer Score: " + computerScore);
        
        endGame(playerScore, computerScore);
    });

    scissorsButton.addEventListener("click", () => {
        playerSelection = "scissors";
        let computerSelection = computerPlay();

        document.getElementById("results1").innerHTML = ("Computer chose: " + computerSelection)
        document.getElementById("results2").innerHTML = (playRound(playerSelection, computerSelection));
        document.getElementById("results3").innerHTML = ("Your score: " + playerScore + ", Computer Score: " + computerScore);

        endGame();
    });