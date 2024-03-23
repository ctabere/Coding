var color = 'purple';
const colorTwo = 'green';
let colorThree = 'blue';

console.log(color);
console.log(colorTwo);
console.log(colorThree);

color = 'brown';
console.log(color);
console.log(color);

color = 'yellow';
console.log(color);

// color = 2;
// console.log(color);

// colorTwo = 2;
// console.log(colorTwo);

colorThree = 33;
console.log(colorThree);

const myList = [1, 2, 3, 4, color, 6, 7];
console.log(myList[2]+myList[4]);
console.log(typeof(myList[2]+myList[4]));
console.log(myList);
myList.push(8, 9, 10); 
console.log(myList);
console.log(myList.pop());
console.log(myList);