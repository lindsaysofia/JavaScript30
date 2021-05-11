const timerButtons = document.querySelectorAll('.timer__button');
const customInput = document.querySelector('#custom');
const displayTimeLeft = document.querySelector('.display__time-left');
const displayEndTime = document.querySelector('.display__end-time');
let timeLeft;
let endTime;

timerButtons.forEach(button => button.addEventListener('click', timer));

function timer(e) {
  

}