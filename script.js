const playButton$ = document.getElementById("playButton");
const pauseButton$ = document.getElementById("pauseButton");
const video$ = document.querySelector(".video-container");

const menuButton$ = document.getElementById("menuButton");
const menuHidden$ = document.querySelector(".menu-hidden");
const closeButton$ = document.getElementById("closeButton");
const answers$ = document.querySelectorAll(".answers");
const questionButtons$ = document.querySelectorAll(".faq-buttons");

closeButton$.style.display = "none";
const menuShow = () => {
  menuHidden$.classList.toggle("hidden");
  closeButton$.style.display = "block";
  menuButton$.style.display = "none";
};

const closeShow = () => {
  menuHidden$.classList.toggle("hidden");
  closeButton$.style.display = "none";
  menuButton$.style.display = "block";
};

menuButton$.addEventListener("click", menuShow);
closeButton$.addEventListener("click", closeShow);

pauseButton$.style.display = "none";
const playVideo = () => {
  video$.play();
  playButton$.style.display = "none";
  pauseButton$.style.display = "block";
};

const pauseVideo = () => {
  video$.pause();
  pauseButton$.style.display = "none";
  playButton$.style.display = "block";
};

playButton$.addEventListener("click", playVideo);
pauseButton$.addEventListener("click", pauseVideo);

for (let i = 0; i < questionButtons$.length; i++) {
  const answer = questionButtons$[i];

  answer.addEventListener("click", () => {
    const child = answer.children;
    child[1].classList.toggle("answers-show");
  });
}
