const playButton$ = document.getElementById("playButton");
const pauseButton$ = document.getElementById("pauseButton");
const video$ = document.querySelector(".video-container");

pauseButton$.style.display = "none";
const playVideo = () => {
  video$.play();
  playButton$.style.display = "none";
  pauseButton$.style.display = "block";
};
console.log(playVideo);
const pauseVideo = () => {
  if (!video$.play()) {
    pauseButton$.style.display = "none";
    playButton$.style.display = "block";
  }
};
console.log(pauseVideo);
playButton$.addEventListener("click", playVideo);
pauseButton$.addEventListener("click", pauseVideo);
