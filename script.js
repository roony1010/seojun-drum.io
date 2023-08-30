document.addEventListener('keydown', playSound);

function playSound(event) {
  const keyCode = event.keyCode;
  const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
  const drumPad = document.querySelector(`.drum-pad[data-key="${keyCode}"]`);
  
  if (audioElement) {
    audioElement.currentTime = 0; // Reset audio to the beginning
    audioElement.play();
    drumPad.classList.add('playing');
  }
}

const drumPads = document.querySelectorAll('.drum-pad');
drumPads.forEach(drumPad => {
  drumPad.addEventListener('transitionend', removeTransition);
  drumPad.addEventListener('click', function () {
    const keyCode = drumPad.getAttribute('data-key');
    const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);

    if (audioElement) {
      audioElement.currentTime = 0; // Reset audio to the beginning
      audioElement.play();
      drumPad.classList.add('playing');
    }
  });
});

function removeTransition(event) {
  if (event.propertyName !== 'transform') return;
  this.classList.remove('playing');
}
