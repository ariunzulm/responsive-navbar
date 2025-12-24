const playButton$ = document.getElementById("playButton");
const pauseButton$ = document.getElementById("pauseButton");
const video$ = document.querySelector(".video-container");

const menuButton$ = document.getElementById("menuButton");
const menuHidden$ = document.querySelector(".menu-hidden");
const closeButton$ = document.getElementById("closeButton");

// when menu pressed show closebtn
closeButton$.style.display = "none";
const menuShow = () => {
  menuHidden$.classList.toggle("hidden");
  closeButton$.style.display = "block";
  menuButton$.style.display = "none";
};

menuButton$.addEventListener("click", menuShow);

pauseButton$.style.display = "none";
const playVideo = () => {
  video$.play();
  playButton$.style.display = "none";
  pauseButton$.style.display = "block";
};
// console.log(playVideo);

const pauseVideo = () => {
  if (!video$.play()) {
    pauseButton$.style.display = "none";
    playButton$.style.display = "block";
  }
};
// console.log(pauseVideo);

playButton$.addEventListener("click", playVideo);
pauseButton$.addEventListener("click", pauseVideo);
