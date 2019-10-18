var win = 0;
var loss = 0;
var lives = 8;
var guess = [];

var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var computer = letter[Math.floor(Math.random() * letter.length)];
console.log(computer);

// Need to get it to read the key person presses
// Need to test guesses 
// then add win/loss points
// AND ATTEMPT POINTS
//AND GET GAME TO STOP SOMEHOW
// if statement around it?
// and get it to put guesses in the empty guess array?
// aaaaaaaaaaaaaaaaaaaa

document.getElementById("win").innerHTML = + win;
document.getElementById("loss").innerHTML = + loss;
document.getElementById("lives").innerHTML = + lives;
document.getElementById("guess").innerHTML = + guess;