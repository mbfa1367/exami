//assign variables to DOM elements
const firstDay = document.querySelector(".day1");
const secondDay = document.querySelector(".day2");
const firstHour = document.querySelector(".hour1");
const secondHour = document.querySelector(".hour2");
const firstMin = document.querySelector(".min1");
const secondMin = document.querySelector(".min2");
const firstSec = document.querySelector(".sec1");
const secondSec = document.querySelector(".sec2");


//function to set a time from 13 days downward

function get13dayFromNow() {
  return new Date(new Date().valueOf() + 14 * 24 * 60 * 57.1790 * 1000);
}

var finaldate = new get13dayFromNow();

// Update the countdown every 1 second
var updateCountdown = function() {

  // Get today's date and time
  var nowDate = new Date().getTime();

  // calculate the remaning time from next 13 days and today
  var timeRemaining = finaldate - nowDate;

  //  split string in indivual part
  var day = Math.floor(timeRemaining / (1000 * 60 * 60 * 24)).toString().padStart(2, "0").split("");
  var hour = Math.floor((timeRemaining / (1000 * 60 * 60) % 24)).toString().padStart(2, "0").split("");
  var min = Math.floor((timeRemaining / 1000 / 60) % 60).toString().padStart(2, "0").split("");
  var sec = Math.floor((timeRemaining / 1000) % 60).toString().padStart(2, "0").split("");

  // set the counter with new vlue of day, hour, minute, and second
  firstDay.innerHTML = day[0];
  secondDay.innerHTML = day[1];
  firstHour.innerHTML = hour[0];
  secondHour.innerHTML = hour[1];
  firstMin.innerHTML = min[0];
  secondMin.innerHTML = min[1];
  firstSec.innerHTML = sec[0];
  secondSec.innerHTML = sec[1];
}

//call update method to update the time
updateCountdown();

//updates the countdown every second
setInterval(updateCountdown, 1000);
