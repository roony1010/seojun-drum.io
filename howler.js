document.addEventListener('DOMContentLoaded', function () {
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

  const sounds = {
    kick: new Howl({
      src: ['sounds/kick.wav']
    }),
    snare: new Howl({
      src: ['sounds/snare.wav']
    })
    // Add more sounds as needed
  };

  function playSound(index) {
    if (sounds[index]) {
      sounds[index].play();
    }
  }

  // Remove the 'playing' class after transition
  function removeTransition(event) {
    if (event.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }

  drumPads.forEach(drumPad => {
    drumPad.addEventListener('transitionend', removeTransition);
  });
});