const monthName = document.getElementById('month')
const dayName = document.getElementById('day')
const dayNumber = document.getElementById('date')
const year = document.getElementById('year')


// set countdown timer
// function startCountdown(duration, display) {
//     let timer = duration,hours, minutes, seconds;
//     let interval = setInterval(function() {
//         hours = parseInt(timer / 3600, 10);
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);

//         hours = hours < 10 ? "0" + hours : hours;
//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = hours + ":" + minutes + ":" + seconds;

//         if (--timer < 0) {
//             clearInterval(interval);
//             display.textContent = "Time's up!";
//         }
//     }, 1000);
// }

// window.onload = function () {
//     let duration = 60 * 60 * 5; // Countdown duration in seconds (5 minutes in this case)
//     let display = document.querySelector('#timer');
//     startCountdown(duration, display);
// };


// count untill next day
function timeUntilMidnight() {
    // Get the current time
    let now = new Date();
    
    // Calculate the next midnight
    let midnight = new Date();
    midnight.setHours(24, 0, 0, 0); // Set time to 00:00:00 of the next day
    
    // Calculate the time difference in milliseconds
    let timeDifference = midnight - now;
    
    // Convert the time difference to hours, minutes, and seconds
    let hours = Math.floor(timeDifference / (1000 * 60 * 60));
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    
    // Format hours, minutes, and seconds to always have two digits
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    // Update the display element with the current time until midnight
    let display = document.querySelector('#timer');
    display.textContent = hours + ":" + minutes + ":" + seconds;
    
    // Update the timer every second
    setTimeout(timeUntilMidnight, 1000);
}

// When the window loads, start the timer
window.onload = function () {
    timeUntilMidnight();
};

// set calender

let date = new Date()
console.log(date);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getTime());

monthName.innerText = date.toLocaleString('en', {month:'long'});
dayName.innerText = date.toLocaleString('en', {weekday:'long'});
dayNumber.innerText = date.getDate()
year.innerText = date.getFullYear()