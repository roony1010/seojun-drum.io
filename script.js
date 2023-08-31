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

  function playSound(index) {
    const sound = new Howl({
      src: [`sounds/${index}.wav`], // Replace with your sound file extensions
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
});
