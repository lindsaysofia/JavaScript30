const video = document.querySelector('video');
const viewer = document.querySelector('.viewer');
const toggleButton = document.querySelector('.toggle');
const volumeSlider = document.querySelector('.volume');
const playbackRateSlider = document.querySelector('.playback');

viewer.addEventListener('click', togglePlay);
toggleButton.addEventListener('click', togglePlay);
volumeSlider.addEventListener('change', handleVolume);
playbackRateSlider.addEventListener('change', handlePlaybackRate);

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