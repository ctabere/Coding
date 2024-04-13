// here you declared some variables as arrays.  So "COLOR" is going to be replaced with a number pointing to the color shows in the reel
// It looks like difficulty scales with the multiplier, but at an advantage to the player
let COLOR = [];
const colorOne = ["white", "blue", "green", "red", "green", "black", "yellow", "orange"];
const colorThree = ["white", "blue", "green", "red", "green", "black", "yellow", "orange", "purple", "black", "pink", "brown", "aquamarine", "chartreuse", "coral", "cyan", "cadetblue", "deeppink", "forestgreen", "goldenrod"];
const colorFive = ["white", "blue", "green", "red", "green", "black", "yellow", "orange", "purple", "black", "pink", "brown", "aquamarine", "chartreuse", "coral", "cyan", "cadetblue", "deeppink", "forestgreen", "goldenrod", "linen", "lightpink", "midnightblue", "olive", "palegreen", "orchid", "plum", "rosybrown"];
const colorTen = ["white", "blue", "green", "red", "green", "black", "yellow", "orange", "purple", "black", "pink", "brown", "aquamarine", "chartreuse", "coral", "cyan", "cadetblue", "deeppink", "forestgreen", "goldenrod", "linen", "lightpink", "midnightblue", "olive", "palegreen", "orchid", "plum", "rosybrown", "snow", "tan", "tomato", "yellowgreen", "skyblue", "maroon", "khaki", "cornsilk"];

// These variables are the starting values
let tokens = 500;
let numWheels = 3;
let spinTime = 0;
let rollWheels; // declared, but undefined
let multiplier = 1;
let reelsArray = []; // I think this is saying that the value of reelsArray will be an array itself based on the [] used
let bet = 1;
let winAmount = 0;

document.getElementById("wallet").innerHTML = tokens; // refers to the html element "wallet", specifically the text between the tags, 
// and populates with the "tokens" variable we declared earlier
document.getElementById("three").addEventListener("click", showThreeWheels);
document.getElementById("four").addEventListener("click", showFourWheels);

// Begin a new game
// 1 of 2 functions used in the the html - this appears to be the reset/new game button - but it doesn't reset player selections
function newGame() {
    console.log("new game"); // new game is printed in console, but this apprears to be for debug only
    tokens = 500; // the purse is redeclared
    document.getElementById("wallet").innerHTML = tokens; // resetting the token value on the screen
    return; // ends function and sends the new values back to the caller
}

// Spin the wheels and update token total
function spin() { // when spin button is pressed
    getBet(); // we get the bet selection from the user from the function below
    let mult = getMultiplier(); // sets variable 'mult' to the function getMultiplier() which is defined aroud 168 (user's selection 1, 3, 5, or 10)
        switch(mult) { // a switch statement is used (I just learned about these for this assignment) 
            case 1: // we're getting a color to assign based on the oucome of the getMultiplier() function which checks to see which ratio button is selected
                COLOR = colorOne; // this happens to be what I need to complete the original assignment - eureka moment
                break; // these breaks are needed - without it, the switch statment continues executing the cases even if they aren't selected by the user
            case 3:
                COLOR = colorThree; // bank of 20 colors
                break;
            case 5:
                COLOR = colorFive; // bank of 28 colors
                break;
            case 10:
                COLOR = colorTen;  // bank of 36 colors
                break;
            default:
                COLOR = colorOne;  // default is bank of 8 colors
                break;
        } 
    if (tokens - bet >= 0) {    //  the second part of the function checks the player purse to make sure they have sufficient funds to place the bet
        tokens -= bet; // if they have the funds, tokens will decrement tokens equal to the bet
        document.getElementById("wallet").innerHTML = tokens; // this declares the new value in the html file for the text in .wallet
        console.log(COLOR); // logs the values calculated by the spin() ie {white: 1, yellow: 1, brown: 1} - this is what shows up on the player screen
        rollWheels = setInterval(spinAnimation, 100); // rollWheels is declared here and used below.  setInterval takes two arguments (function, interval)
        // this will 
    } else {
        alert("Oops, you dont have enough tokens to spin the wheel... New game!");
    } 
}

// Wheel spin animation
function spinAnimation() {
    if (spinTime >= 10) {
        
        clearInterval(rollWheels);  

        reelsArray.push(COLOR[wheel1Color]);
        reelsArray.push(COLOR[wheel2Color]);
        reelsArray.push(COLOR[wheel3Color]);
        if (numWheels === 4) {
            reelsArray.push(COLOR[wheel4Color]);
        }

        console.log(reelsArray);
        checkForMatches(reelsArray);
        tokens += winAmount;
        if (winAmount > 0 ) {
            let win = document.getElementById("win");
            win.play();
            alert("You WON " + winAmount + " tokens. Congrats!!!");
        }
        document.getElementById("wallet").innerHTML = tokens;
        spinTime = 0;
        return;
    }      
    
    reelsArray = [];
    spinTime += 1;

    wheel1Color = Math.floor(Math.random() * COLOR.length);
    wheel2Color = Math.floor(Math.random() * COLOR.length);
    wheel3Color = Math.floor(Math.random() * COLOR.length);
    if (numWheels === 4) {
        wheel4Color = Math.floor(Math.random() * COLOR.length);
    }

    document.getElementById("wheel1").style.backgroundColor = COLOR[wheel1Color];
    document.getElementById("wheel2").style.backgroundColor = COLOR[wheel2Color];
    document.getElementById("wheel3").style.backgroundColor = COLOR[wheel3Color];
    if (numWheels === 4) {
        document.getElementById("wheel4").style.backgroundColor = COLOR[wheel4Color];
    }
}

function checkForMatches(reelsArray) {
    let matches = 0;
    const counts = {};
    reelsArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
    console.log(counts)

    let color1 = reelsArray[0];
    let color2 = reelsArray[1];
    let color3 = reelsArray[2];
    let color4 = reelsArray[3];
    
    if (counts[color1] > 1) {
        matches = counts[color1];
        if (color1 != color2 && counts[color2] > 1) {
            matches += counts[color2];
        } else if (color1 != color3 && counts[color3] > 1) {
            matches += counts[color3];
        }
    } else if (counts[color2] > 1) {
        matches = counts[color2];
    } else if (counts[color3] > 1) {
        matches = counts[color3];
    } else {
        matches = 0;
    }
    console.log("Matches: " + matches);
    winAmount = bet * multiplier * matches;
    console.log("Win Amount: " + winAmount);
}

//Show three wheels
function showThreeWheels() {
    let num = document.querySelector("#slots").childElementCount;
    if (num > 3) {
        document.querySelector("#slots").removeChild(document.querySelector("#wheel4"));
        numWheels = 3;
    } else {
        return;
    }
console.log("run showThreeReels");
}

//Show four wheels
function showFourWheels() {
    let num = document.querySelector("#slots").childElementCount;
    if (num < 4) {
        const fourthWheel = document.createElement("div");
        fourthWheel.setAttribute("id", "wheel4");
        fourthWheel.setAttribute("class", "wheel");
        document.querySelector("#slots").appendChild(fourthWheel);
        numWheels = 4;
    } else {
        return;
    }
console.log("run showFourReels");
}

//Returns selected multiplier
function getMultiplier() {
    if (document.getElementById("times1").checked) {
        multiplier = 1;
        console.log("1checked");
        return multiplier;
    } else if (document.getElementById("times3").checked) {
        multiplier = 3;
        console.log("3checked");
        return multiplier;
    } else if (document.getElementById("times5").checked) {
        multiplier = 5;
        console.log("5checked");
        return multiplier;
    } else if (document.getElementById("times10").checked) {
        multiplier = 10;
        console.log("10checked");
        return multiplier;
    } else {
        return;
    }
}

// Returns bet amount
function getBet() {
    if (document.getElementById("one").checked) {
        bet = 1;
        console.log("one");
        return bet;
    } else if (document.getElementById("five").checked) {
        bet = 5;
        console.log("five");
        return bet;
    } else if (document.getElementById("ten").checked) {
        bet = 10;
        console.log("ten");
        return bet;
    } else if (document.getElementById("twentyfive").checked) {
        bet = 25;
        console.log("twentyfive");
        return bet;
    } else if (document.getElementById("fifty").checked) {
        bet = 50;
        console.log("fifty");
        return bet;   
    } else if (document.getElementById("onehundred").checked) {
        bet = 100;
        console.log("onehundred");
        return bet;
    } else {
        alert("Error: please select a bet amount.");
        return;
    }

}

// I broke the game by pressing the spin button twice.  The reels never stop, but the game never processes the bet, and you can only win.  Casino's nightmare.