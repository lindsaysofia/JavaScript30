const timerButtons = document.querySelectorAll('.timer__button');
const customInput = document.querySelector('#custom');
const displayTimeLeft = document.querySelector('.display__time-left');
const displayEndTime = document.querySelector('.display__end-time');

let timer;
let secondsLeft;
let endTime;
let minutes;
let seconds;

timerButtons.forEach(button => button.addEventListener('click',handleClick));

function handleClick(e) {
  clearInterval(timer);
  secondsLeft = e.target.dataset.time;
  let currentTime = new Date();
  endTime = new Date();
  endTime.setMilliseconds(currentTime.getMilliseconds() + secondsLeft * 1000);
  /* regex below per https://stackoverflow.com/questions/19407305/how-to-show-only-hours-and-minutes-from-javascript-date-tolocaletimestring */
  displayEndTime.textContent = `Be back at ${endTime.toLocaleTimeString().replace(/:\d+ /, ' ')}`;
  timer = setInterval(() => {
    minutes = Math.floor( secondsLeft / 60);
    seconds = secondsLeft % 60;
    displayTimeLeft.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    secondsLeft--;
    if (secondsLeft === -1) clearInterval(timer);
  }, 1000);
}