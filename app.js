const users = [
  {
    songName: "Allah Hu akbar",
    filePath: "asset/songs/1.mp4",
    songImg: "asset/images/1.jpg",
    singerNAme: "Coke Studio",
  },
  {
    songName: "Aqaa",
    filePath: "asset/songs/2.mp4",
    songImg: "asset/images/2.jpg",
    singerNAme: "Coke Studio",
  },
  {
    songName: "Wohi Khuda ha",
    filePath: "asset/songs/3.mp4",
    songImg: "asset/images/3.jpg",
    singerNAme: "Coke Studio",
  },
  {
    songName: "Tu Khuja Man Khuja",
    filePath: "asset/songs/4.mp4",
    songImg: "asset/images/4.jpg",
    singerNAme: "Coke Studio",
  },

  {
    songName: "Tajdar E Haram",
    filePath: "asset/songs/6.mp4",
    songImg: "asset/images/6.jpg",
    singerNAme: "Coke Studio",
  },
];

let imgs = document.querySelectorAll("img");
let h2 = document.querySelector("h2");
let p = document.querySelector("p");
let masterPlay = document.querySelector("#masterPlay");
let myProgressBar = document.querySelector("#myProgressBar");
let icon = document.querySelector("#icon");
let forward = document.querySelector("#forward");
let backward = document.querySelector("#backward");

let songIndex = 1;
let audioElement = new Audio(`asset/songs/${songIndex}.mp4`);

audioElement.addEventListener("timeupdate", function () {
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  myProgressBar.value = progress;
});

masterPlay.addEventListener("click", function () {
  if (audioElement.paused) {
    audioElement.play();
    icon.classList.remove("fa-play");
    icon.classList.add("fa-pause");
  } else {
    audioElement.pause();
    icon.classList.remove("fa-pause");
    icon.classList.add("fa-play");
  }
});

myProgressBar.addEventListener("input", function () {
  audioElement.currentTime =
    (myProgressBar.value / 100) * audioElement.duration;
});
forward.addEventListener("click", function () {
  if (songIndex >= users.length) {
    songIndex = 1;
  } else {
    songIndex++;
  }

  audioElement.pause();
  audioElement.src = users[songIndex - 1].filePath;
  audioElement.currentTime = 0;

  h2.innerText = users[songIndex - 1].songName;
  p.innerText = users[songIndex - 1].singerNAme;

  audioElement.load();
  audioElement.play();

  icon.classList.remove("fa-play");
  icon.classList.add("fa-pause");
});
backward.addEventListener("click", function () {
  if (songIndex <= 1) {
    songIndex = users.length; // go to last song
  } else {
    songIndex--; // move backward
  }

  audioElement.pause();
  audioElement.src = users[songIndex - 1].filePath;
  audioElement.currentTime = 0;

  h2.innerText = users[songIndex - 1].songName;
  p.innerText = users[songIndex - 1].singerName;

  audioElement.load();
  audioElement.play();

  icon.classList.remove("fa-play");
  icon.classList.add("fa-pause");
});
