const timerButtons = document.querySelectorAll('.timer__button');
const customInput = document.querySelector('#custom');
const displayTimeLeft = document.querySelector('.display__time-left');
const displayEndTime = document.querySelector('.display__end-time');

let timer;
let timeLeft;
let endTime;

timerButtons.forEach(button => button.addEventListener('click', timer));

function handleClick(e) {
  clearInterval(timer);
  timer = setInterval(() => {
    let currentDate = new Date();
    endTime = currentDate.getMilliseconds() + e.target.dataset.time;
    console.log(endTime);
  }, 1000);

}