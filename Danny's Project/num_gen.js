const lt = document.getElementById("lefttile"); // here you declared a variable the two divs which contain your numbers
const rt = document.getElementById("righttile");// I think this is global scope because the const is not inside another function

const num1 = Math.floor(Math.random() * 10); 
// Another variable is declared, but I don't understand the rest.  I'm assuming
//  I THINK the math floor rounds whatever value that math.random*10 spits out
const num2 = Math.floor(Math.random() * 10); // I read this is a static method to return a random float between 0-1
// then Danny scales it with '* 10' so it doesn't give back mixed numbers or anything less than 1


function modText(new_text, new_text2) { // new function, this time to replace the original numbers with new ones
    lt.firstChild.nodeValue = new_text; // the left side, and firstChild must mean the 'child' of #lefttile, which must be the number itself
    rt.firstChild.nodeValue = new_text2; // same here, but what's funny is that 'new_text' elements used in the function - maybe it's just weird to me

}
function changeColor(x, y) {
    lt.style.background = x;  // does this call the lefttile and then go into the css with '.style' and then change the 
    rt.style.background = y;  // background color or at least pin it to x and y
}
function timeIt(a, b, c, d, g, h, e, f) {
    setTimeout(() => {modText(a, b);}, 1500);
    setTimeout(() => {modText(c, d);}, 2500);
    setTimeout(() => {modText(g, h);}, 3500);
    setTimeout(() => {modText(e, f);}, 4500);
    setTimeout(() => {changeColor('lightyellow', 'lightyellow');}, 1500); //down here, we pass new colors in for x and y
    setTimeout(() => {changeColor('lightyellow', 'white');}, 2500);
    setTimeout(() => {changeColor('white', 'white');}, 3500);
    setTimeout(() => {changeColor('white', 'steelblue');}, 4500);     
}

const el = document.getElementById("mainpage");
el.addEventListener("click", function() {timeIt('...', '...', '..', '..', '.', '.', num1, num2)}, false);
//this prints the dots like we're waiting for the result, and then displays num1 and num2 which we declared above


// this is a nifty project, and I can see the different concepts stung together as they refer to eachother.