//checks to see if user is ready for quiz
var answer = prompt("Are you ready for a quiz??");
if (answer.toUpperCase() === "Yes" ||
    answer.toUpperCase() === "YEAH" ||
    answer.toUpperCase() === "Y" || answer.toUpperCase() === "YEA") {
  alert("Lets Get Started!!");
}

//assumes correct is 0 to start
var correct = 0;

//Start asking quesitons for quiz
var answer1 = prompt("What programming language is also the name of a gem?");
if (answer1.toUpperCase() === "RUBY") {
  correct += 1;
}

var answer2 = prompt("What programming language is also the name of a snake?");
if (answer2.toUpperCase() === "PYTHON") {
  correct += 1;
}

var answer3 = prompt("What programming language do you use to style Web Pages?");
if (answer3.toUpperCase() === "CSS") {
  correct += 1;
}

var answer4 = prompt("What is my loves name?");
if (answer4.toUpperCase() === "TAYLOR") {
  correct += 1;
}

var answer5 = prompt("Are Java and JavaScript the same programming language?");
if (answer5.toUpperCase() === "NO") {
  correct += 1;
}

//output results
alert("You got " + correct + " questions correct.");

//output ranking
if (correct === 5) {
  alert("You earned a gold crown!!!");
} else if (correct >= 3) {
  alert("You earned a silver crown!!!");
} else if (correct >= 1) {
  alert("You earned a bronze crown!!!");
} else { alert("No crown for you... Hit those books.");
        }