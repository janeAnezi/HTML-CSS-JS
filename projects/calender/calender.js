const monthName = document.getElementById('month')
const dayName = document.getElementById('day')
const dayNumber = document.getElementById('date')
const year = document.getElementById('year')

let date = new Date()
console.log(date);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getMonth());

monthName.innerText = date.toLocaleString('en', {month:'long'});
dayName.innerText = date.toLocaleString('en', {weekday:'long'});
dayNumber.innerText = date.getDate()
year.innerText = date.getFullYear()