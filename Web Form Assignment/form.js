// target first name id 
const firstName = document.getElementById('firstname');
firstName.addEventListener('change', printChange);  

// 
const lastName = document.getElementById('lastname');
lastName.addEventListener('change', printChange);  

//
const city = document.getElementById('city');
city.addEventListener('change', printChange);  

//
function printChange(e) {
  console.log(e.target.value);
}