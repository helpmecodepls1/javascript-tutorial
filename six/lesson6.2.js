/*
let hour = '5';
if (hour >= 13 && hour <= 17) {
    goodAfternoon('Bialen');
}
else if (hour >= 6 && hour <= 12) {
    goodMorning('gm');
}
else{
    goodNight('');
}
function goodAfternoon(name){
    console.log(`Good afternoon, ${name}`);
}
function goodMorning(name){
    console.log(`Good morning, ${name}`);
}
function goodNight(name){
    console.log(`Good night, ${name}`);
}

let isHoliday = false;
let age = 7;
let discounted = checksIfHoliday(!isHoliday) && getDiscount(age) ? 'Discounted' : 'Not Discounted'; // kung si isHoliday is false, then it will return true
console.log(discounted);

function getDiscount(age){
    let result = age <= 6 ? true : false;
    return result;
}

function checksIfHoliday(isHoliday){
    let result = isHoliday == true ? true : false;
    return result;
} */

let tossedCoin = '';
let score = {
    wins: 0,
    losses: 0
};

function playGame(guess){   
    let randomNumber = Math.random();
    tossedCoin = randomNumber > .5 ? 'Heads' : 'Tails';

    if(tossedCoin === guess){
        score.wins += 1;
    }
    else{
        score.losses += 1;
    }
    localStorage.setItem('score', JSON.stringify(score));
}

function tails(){
    console.log('Your guess: Tails');
    playGame('Tails');
    console.log(`Coin: ${tossedCoin}`);
    console.log(score);
}

function heads(){
    console.log('Your guess: Heads');
    playGame('Heads');
    console.log(`Coin: ${tossedCoin}`);
    console.log(score);
};

score = JSON.parse(localStorage.getItem('score'));

function reset(){
    score = {
        wins: 0,
        losses: 0
    };
    console.log(score);
};
localStorage.getItem('score');










/*
function showResult(result){
    let finalResult = result == true ? 'You win' : 'You lose';
    console.log(finalResult);
    localStorage.setItem('score', JSON.stringify(score));//always remember that this method only accepts strings so we have to stringify an object.
}
*/




