const video = document.querySelector('video');
const viewer = document.querySelector('.viewer');
const toggleButton = document.querySelector('.toggle');
const playerSliders = document.querySelectorAll('.player__slider');
const backwardButton = document.querySelector('.backward');
const forwardButton = document.querySelector('.forward');

viewer.addEventListener('click', togglePlay);
toggleButton.addEventListener('click', togglePlay);
playerSliders.forEach(playerSlider => playerSlider.addEventListener('change', handlePlayerSliders));
backwardButton.addEventListener('click', handleBackwardButton);
forwardButton.addEventListener('click', handleForwardButton);

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

function handleBackwardButton() {
  video.currentTime += +backwardButton.dataset.skip;
}

function handleForwardButton() {
  video.currentTime += +forwardButton.dataset.skip;
}