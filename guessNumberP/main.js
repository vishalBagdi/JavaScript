// console.log((Math.random()*100 + 1).toFixed(0))


let randomNumber = parseInt(Math.random()*100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSloat = document.querySelector('.guesses');
const result = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = []
let numGuess = 1
let playgame = true

if(playgame){
    submit.addEventListener('click', function (e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess);
        
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number');

    }else if(guess <1){
        alert('Please enter a  number more then 1 ');
    }else if (guess>100){
        alert('please enter a number less then 100');
    }else{
        prevGuess.push(guess);
        if(numGuess === 11){
           displayGuess(guess)
           displaymessage(`Game over, Random number was ${randomNumber}`) 
           endgame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
if (guess === randomNumber){
    displaymessage('You guessed is right')
    endgame()
}else if (guess < randomNumber){
    displaymessage('Number is too Low')

}else if (guess > randomNumber){
    displaymessage('Number is too High')
    
}
}
function displayGuess(guess){
 userInput.value = ''
 guessSloat.innerHTML += `${guess} ` 
 numGuess ++;
 //remaining.innerHTML = `${11 - numGuess}`
 result.innerHTML = `${11 - numGuess}`
}


function displaymessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endgame(){
    userInput.value = ''
    userInput.setAttribute(`Disabled`,'')
    p.classList(`button`)
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.append(p)
    playgame = false
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
      randomNumber = parseInt(Math.random()*100 + 1);
      prevGuess = []
      numGuess = 1
      guessSloat.innerHTML = ``
      result.innerHTML = `${11 - numGuess}`
      userInput.removeAttribute(`dislabled`)
      startOver.removeChild(p)
      playgame = true
    })
}

