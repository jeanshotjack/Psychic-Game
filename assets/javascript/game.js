var win = 0;
var loss = 0;
var lives = 8;
var guess = [];

var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var computer = letter[Math.floor(Math.random() * letter.length)];
console.log(computer);


// Need to get it to read the key person presses
document.onkeypress = function (event) {
    user = event.key;

    if (lives > 0) {
        if (user === computer) {
            win++;
            document.getElementById("win").innerHTML = "Wins: " + win;
            computer = letter[Math.floor(Math.random() * letter.length)];
        }

        else if (user !== computer) {
            lives--;
            document.getElementById("lives").innerHTML = "Lives left: " + lives;
            var wrong = guess.push(event.key);
            document.getElementById("guess").innerHTML = "Letters you have guessed: " + guess;
            wrong.textContent = guess.join("");
        }
    }
        else if (lives <= 0) {
        loss++;
        document.getElementById("loss").innerHTML = "Losses: " + loss;
        lives =8;
        computer = letter[Math.floor(Math.random() * letter.length)];
    }

}

// bRO WHY DIESNT THIS SHIT WORKN 



// AND ATTEMPT POINTS


//AND GET GAME TO STOP SOMEHOW
// if statement around it?
// and get it to put guesses in the empty guess array?
// aaaaaaaaaaaaaaaaaaaa



