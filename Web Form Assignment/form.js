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


    

function submitButton() {
    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const city = document.getElementById('city').value;
    const gender = document.getElementsByClassName('options').value;
    console.log(firstName, lastName, city, gender);
}
