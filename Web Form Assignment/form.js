// // target first name id
// const firstName = document.getElementById('firstname');
// firstName.addEventListener('change', printChange);

// // target last name id
// const lastName = document.getElementById('lastname');
// lastName.addEventListener('change', printChange);

// // target city id
// const city = document.getElementById('city');
// city.addEventListener('change', printChange);

// //
// function printChange(e) {
//   console.log(e.target.value);
// }

const genderBox = document.getElementsByName("gender");
const firstName = document.getElementById("firstname").value;
const lastName = document.getElementById("lastname").value;
const city = document.getElementById("city").value;

function validateGender() {
  // let isChecked = false;
  for (let i = 0; i < genderBox.length; i++) {
    if (genderBox[i].checked) {
      console.log(genderBox[i].value);
    }
  }
}

console.log(firstName, lastName, city);

const myArray = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

const myMap = myArray.map((x) => x / x);

console.log(myMap);
