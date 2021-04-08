const video = document.querySelector('video');
const viewer = document.querySelector('.viewer');
const toggleButton = document.querySelector('.toggle');
const playerSliders = document.querySelectorAll('.player__slider');
const playerButtons = document.querySelectorAll('.player__button');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');

viewer.addEventListener('click', togglePlay);
toggleButton.addEventListener('click', togglePlay);
playerSliders.forEach(playerSlider => playerSlider.addEventListener('change', handlePlayerSliders));
playerButtons.forEach(playerButton => playerButton.addEventListener('click', handlePlayerButtons));
progress.addEventListener('')

function togglePlay() {
  if (video.paused) {
    video.play();
    toggleButton.innerHTML = '&#9616;&#9616;';
  } else {
    video.pause();
    toggleButton.innerHTML = '►';
  }
}

function handlePlayerSliders(e) {
  video[e.target.name] = e.target.value;
}

function handlePlayerButtons(e) {
  video.currentTime += +e.target.dataset.skip;
}