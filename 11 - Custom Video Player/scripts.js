const video = document.querySelector('video');
const viewer = document.querySelector('.viewer');
const toggleButton = document.querySelector('.toggle');
const volumeSlider = document.querySelector('.volume');

viewer.addEventListener('click', togglePlay);
toggleButton.addEventListener('click', togglePlay);
volumeSlider.addEventListener('change', handleVolume);

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