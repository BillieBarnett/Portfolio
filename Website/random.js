var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = prompt('I am thinking of a number between 1 and 6. What is it?');
if (parseInt(guess) === randomNumber) {
  correctGuess = true;
/*if (isNaN(guess)) {
    alert("Entry must be number. Please try again.");
    var guess = prompt('I am thinking of a number between 1 and 6. What is it?');*/
} else if (parseInt(guess) === randomNumber) {
  correctGuess = true;
} else if (parseInt(guess) < randomNumber) {
  var guessMore = prompt("Try again. The number I am thinking is more than " + guess);
  if (parseInt(guessMore) === randomNumber) { correctGuess = true;}
} else if (parseInt(guess) > randomNumber) {
  var guessLess = prompt("Try again. The number I am thinking is less than " + guess);
}
if (correctGuess) {
    alert('You guessed the number!');
} else {
    alert('Sorry. The number was ' + randomNumber + '.');
}

/*
function getRandomNumber( lower, upper ) {
  if (isNaN(lower) || isNaN(upper) ) {
    throw new Error("Both entries must be numbers");
  }
    return Math.floor(Math.random() * (upper - lower + 1)) + lower; 
}
*/