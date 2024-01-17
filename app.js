function verifyGuess()
{
    let guess = document.querySelector('input').value;
    let value = secretNumber == guess;
    console.log(value);
    if (value)
    {
        let tries = guess > 1 ? "tries" : 'try';
        let mensage = `You are right with ${count} ${tries}! The secret number is ${secretNumber} `
        showText('h1', mensage);
        document.getElementById('reload').removeAttribute('disabled');   
    }
    else{
        if(guess > secretNumber){
        showText('h1', `${guess} is greater than the secret number`);
        }
        else{
        showText('h1', `${guess} is less than the secret number`);
        }
        count++;
        clearField();
    }
    
}
function clearField()
{
    guess = document.querySelector('input');
    guess.value = '';
}

function showText(tag, text)
{
    let x = document.querySelector(tag);
    x.innerHTML = text;
}

function randomNumber()
{
    let choosenNumber = parseInt(Math.random() * 100 + 1);
    let qtd = numbersList.length;
    if (numbersList.length == 3)
    {
        numbersList = [];
    }
    if (numbersList.includes(choosenNumber))
    {
        return randomNumber();
    }
    else{
        numbersList.push(choosenNumber);
        console.log(numbersList);
        return choosenNumber;
    }
}

function reloadGame()
{
    clearField();
    secretNumber = randomNumber();
    count = 1;
    showText('h1','Secret number game' );
    showText('p', 'Choose a number between 1 and 100');
}

showText('h1','Secret number game' );
showText('p', 'Choose a number between 1 and 100');

let numbersList = [];
let secretNumber = randomNumber();
let count = 1;
// teste 1