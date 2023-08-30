// Import Howler.js library - Make sure to include the Howler.js script in your HTML
// <script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js"></script>
import {Howl, Howler} from 'howler';
const {Howl, Howler} = require('howler');
const drumPads = document.querySelectorAll('.drum-pad');

drumPads.forEach(drumPad => {
  drumPad.addEventListener('click', function () {
    const soundIndex = drumPad.getAttribute('data-key');
    playSound(soundIndex);
    drumPad.classList.add('playing');
  });
});

// Handle touch events for mobile devices
drumPads.forEach(drumPad => {
  drumPad.addEventListener('touchstart', function (event) {
    event.preventDefault(); // Prevent default touch behavior
    const soundIndex = drumPad.getAttribute('data-key');
    playSound(soundIndex);
    drumPad.classList.add('playing');
  });
});

function playSound(index) {
  // Replace with actual audio playback code for your app
  // You can use the Web Audio API or other libraries for this purpose
  // Example: Use the Howler.js library
  const sound = new Howl({
    src: [`sounds/${index}.wav`],
  });

  sound.play();
}

// Remove the 'playing' class after transition
function removeTransition(event) {
  if (event.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

drumPads.forEach(drumPad => {
  drumPad.addEventListener('transitionend', removeTransition);
});
