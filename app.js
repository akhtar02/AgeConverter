// // // challenge 1 your age in days, minutes , hours and sexonds

var secondsInAMinute = 60,
    minutesInAnHour = 60,
    hoursInADay = 24,
    daysInAYear = 364.25;
var days, hours, minutes, seconds, age;

function calculateMyAge() {
  
  age = document.getElementById('age').value;
  if(age==''){
    alert('please enter your age')
  }
  days = age * daysInAYear;
  document.getElementById('days').innerHTML = days;
  
  hours = age * hoursInADay * daysInAYear;
  document.getElementById('hours').innerHTML = hours;
  
  minutes = age * minutesInAnHour * hoursInADay * daysInAYear;
  document.getElementById('minutes').innerHTML = minutes;
  
  seconds = age * secondsInAMinute * minutesInAnHour * hoursInADay * daysInAYear;
  document.getElementById('seconds').innerHTML = seconds;

	document.getElementById('test').innerHTML = age;
  
}

