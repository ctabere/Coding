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

// function submitButton() {
//   let genderChecked = false;
//   let selectedGender = "";
//   for (let i = 0; i < genderBox.length; i++) {
//     if (genderBox[i].checked) {
//       genderChecked = true;
//       selectedGender = genderBox[i].value;
//       break;
//       console.log(genderBox[i].value);
//     }
//   }
// }

function submitButton() { 
  if (document.getElementById("male").checked) {
      selectedGender = "male";
      console.log(selectedGender);
      return selectedGender; 
  } else if (document.getElementById("female").checked) {
      selectedGender = "female";
      console.log(selectedGender);
    return selectedGender; }
    else if (document.getElementById("other").checked) {
      selectedGender = "other"
      console.log(selectedGender);
      return selectedGender;
    } else {
      return;
  }
}


// function validateGender() {
//   for (document.getElementByName("gender").checked)
//       multiplier = 1;
//       console.log("1checked");

console.log(firstName, lastName, city);

const myArray = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

const myMap = myArray.map((x) => x / x);

console.log(myMap);
