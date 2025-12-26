const playButton$ = document.getElementById("playButton");
const pauseButton$ = document.getElementById("pauseButton");
const video$ = document.querySelector(".video-container");

const menuButton$ = document.getElementById("menuButton");
const menuHidden$ = document.querySelector(".menu-hidden");
const closeButton$ = document.getElementById("closeButton");
const answers$ = document.querySelectorAll(".answers");
const questionButtons$ = document.querySelectorAll(".faq-buttons");

// when menu pressed show closebtn
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
// console.log(playVideo);

const pauseVideo = () => {
  video$.pause();
  pauseButton$.style.display = "none";
  playButton$.style.display = "block";
};
// console.log(pauseVideo);

playButton$.addEventListener("click", playVideo);
pauseButton$.addEventListener("click", pauseVideo);

//--
for (let i = 0; i < questionButtons$.length; i++) {
  const answer = questionButtons$[i];

  answer.addEventListener("click", () => {
    const child = answer.children;
    child[1].classList.toggle("answers-show");
  });
}

// const showAnswers = () => {
//   if (answers$.style.display === "none") {
//     answers$.style.display = "block";
//   } else {
//     answers$.style.display = "none";
//   }
//   console.log("ene duudagdaj bna");
// };
