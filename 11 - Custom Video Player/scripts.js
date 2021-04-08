const video = document.querySelector('video');
const viewer = document.querySelector('.viewer');
const toggleButton = document.querySelector('.toggle');
const playerSliders = document.querySelectorAll('.player__slider');
const playerButtons = document.querySelectorAll('.player__button');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');
let isMouseDown = false;

viewer.addEventListener('click', togglePlay);
toggleButton.addEventListener('click', togglePlay);
playerSliders.forEach(playerSlider => playerSlider.addEventListener('change', handlePlayerSliders));
playerButtons.forEach(playerButton => playerButton.addEventListener('click', handlePlayerButtons));
progress.addEventListener('mousedown', () => isMouseDown = true);
progress.addEventListener('mousemove', (e) => {
  if (!isMouseDown) return;
  updateVideoCurrentTime(e.layerX);
});
progress.addEventListener('mouseup', (e) => {
  isMouseDown = false;
  updateVideoCurrentTime(e.layerX);
});

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
  updateVideoCurrentTime(video.currentTime + (+e.target.dataset.skip));
}

function updateVideoCurrentTime(newTime) {
  video.currentTime = newTime;
  updateProgressFilled();
}

function updateProgressFilled() {
  let progressFilledPercentage = (video.currentTime / video.duration) * 100;
  progressFilled.style.flexBasis = `${progressFilledPercentage.toFixed(2)}%`;
}