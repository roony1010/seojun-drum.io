<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Drum Website</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="drum-container">
    <div class="drum-pad" data-key="65">
      Q
      <audio data-key="65" src="sounds/kick.wav"></audio>
    </div>
    <div class="drum-pad" data-key="83">
      S
      <audio data-key="83" src="sounds/snare.wav"></audio>
    </div>
    <!-- Add more drum-pad elements for other sounds -->
  </div>
  
  <script src="script.js"></script>
</body>
</html>
