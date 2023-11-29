var video = document.getElementById("background-video");
var playButton = document.getElementById("play-pause");

playButton.addEventListener("click", function() {
    if (video.paused) {
        video.play();
        playButton.textContent = "Pause";
    } else {
        video.pause();
        playButton.textContent = "Play";
    }
});

