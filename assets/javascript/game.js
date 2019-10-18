var win = 0;
var loss = 0;
var lives = 8;
var guess = [""];

var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var computer = letter[Math.floor(Math.random() * letter.length)];
console.log(computer);

// Need to get it to read the key person presses
document.onkeypress = function(event) {
    user = event.key;

// Need to test guesses then add win/loss points
    if(user === computer) {
        win++;
        document.getElementById("win").innerHTML = + win;
    }
    else {
        lives--;
        document.getElementById("lives").innerHTML = + lives;
        var wrong = guess.push(event.key);
        document.getElementById("guess").innerHTML = + guess;
        wrong.textContent = guess.join("");
        
    }
}
// AND ATTEMPT POINTS

if(lives === 0) {
    loss++;
    document.getElementById("loss").innerHTML = + loss;
    document.getElementById("lives").reset();
}
//AND GET GAME TO STOP SOMEHOW
// if statement around it?
// and get it to put guesses in the empty guess array?
// aaaaaaaaaaaaaaaaaaaa



