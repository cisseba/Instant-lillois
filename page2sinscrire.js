document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("video-background");
    var playButton = document.getElementById("play");

    playButton.addEventListener("click", function() {
        // console.log(video.paused);
        // console.log(!video.paused);
        if (video.paused) {
            video.play();
            playButton.innerHTML = "Pause";
        } else {
            video.pause();
            playButton.innerHTML = "Play";
        }
        playButton.classList.toggle("paused");
    });
});
