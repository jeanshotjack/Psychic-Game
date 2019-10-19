var win = 0;
var loss = 0;
var lives = 8;
var guess = [];

var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var computer = letter[Math.floor(Math.random() * letter.length)];
console.log(computer);

// when you press the key it logs a key
document.onkeypress = function (event) {
    user = event.key;

// we all die you either kill yourself or get killed
    if (lives > 0) {
        if (user === computer) {
            win++;
            document.getElementById("win").innerHTML = "Wins: " + win;
            computer = letter[Math.floor(Math.random() * letter.length)];
            console.log(computer);
        }

        // what you gonna do
        else if (user !== computer) {
            lives--;
            document.getElementById("lives").innerHTML = "Lives left: " + lives;
            var wrong = guess.push(event.key);
            document.getElementById("guess").innerHTML = "Letters you have guessed: " + guess;
            wrong.textContent = guess.join("");
        }
    }

    // what you gonna do 
    else if (lives <= 0) {
        loss++;
        document.getElementById("loss").innerHTML = "Losses: " + loss;
        lives = 8;
        computer = letter[Math.floor(Math.random() * letter.length)];
        console.log(computer);
    }
}

// don't ask how this works it just does 




