'use strict';

//generating random number
let secretNumber = Math.trunc(Math.random()*20) +1;
let score = 20;
let highScore = 0;

//selecting the element
const selector = function(keyword){
  return  document.querySelector(keyword);
}

//displaying message
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

//when user clicks on check
//document.querySelector('.check').addEventListener('click', 
selector('.check').addEventListener('click', 
function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess, secretNumber);
    
    //when theres no input
    if(!guess){
        // document.querySelector('.message').textContent = '🛑 No Number!';
        displayMessage('🛑 No Number!');
    }

    //when the player wins
    else if(guess === secretNumber){
        // document.querySelector('.message').textContent = '🥳 Correct Number!!!';
        displayMessage('🥳 Correct Number');

        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    }

    //when guess is different
    else if(guess !== secretNumber){
        if(score > 1){
            // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too High' : '📉 Too Low';
            displayMessage(guess > secretNumber? '📈 Too High' : '📉 Too Low');
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
    
            // document.querySelector('.message').textContent = '💥 You lost the game!';
            displayMessage('💥 You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }

});


document.querySelector('.again').addEventListener('click',
function(){
    score = 20;

    secretNumber = Math.trunc(Math.random()*20) +1;

    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');

    //document.querySelector('.score').textContent = score;
    selector('.score').textContent = score;


    //document.querySelector('.guess').value = '';
    selector('.guess').value = '';

    //document.querySelector('.number').textContent = '?';
    selector('.number').textContent = '?';

    //document.querySelector('body').style.backgroundColor = '#222';
    selector('body').style.backgroundColor = '#222';

    //document.querySelector('.number').style.width = '15rem';
    selector('.number').style.width = '15rem';
}
);