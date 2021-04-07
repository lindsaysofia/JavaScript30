const video = document.querySelector('video');
const viewer = document.querySelector('.viewer');
const toggleButton = document.querySelector('.toggle');
const volumeSlider = document.querySelector('.volume');
const playbackRateSlider = document.querySelector('.playback');
const backwardButton = document.querySelector('.backward');
const forwardButton = document.querySelector('.forward');

viewer.addEventListener('click', togglePlay);
toggleButton.addEventListener('click', togglePlay);
volumeSlider.addEventListener('change', handleVolume);
playbackRateSlider.addEventListener('change', handlePlaybackRate);
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

function handleVolume() {
  video.volume = volumeSlider.value;
}

function handlePlaybackRate() {
  video.playbackRate = playbackRateSlider.value;
}

function handleBackwardButton() {
  video.currentTime += +backwardButton.dataset.skip;
}

function handleForwardButton() {
  video.currentTime += +forwardButton.dataset.skip;
}