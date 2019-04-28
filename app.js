//sign in page

//Events for sign in form
document.querySelector(".form-options-login ").addEventListener("click", formSubmit);

//function form submit
function formSubmit(e) {
  e.preventDefault();
  //get username value
  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;
  checkFormValues(username, password);

}
//function to check form input
function checkFormValues(name, password) {
  if (name == "" && password == "") {
    document.querySelector("#username").style.border = "3px solid crimson";
    document.querySelector("#password").style.border = "3px solid crimson";
    return;
  } else if (name == "" || name.length < 6) {

    document.querySelector("#username").style.border = "3px solid crimson"

    return;

  } else if (password == "" || password.length < 6) {
    document.querySelector("#password").style.border = "3px solid crimson"
    return;
  } else {
    document.querySelector(".sign-in").style.display = "none";
    document.querySelector(".playlist").style.display = "grid";

  }


}
//set date
setInterval(function init() {
  // creating date object
  let date = new Date();
  let hours = date.getHours();
  let mins = date.getMinutes();
  //check and update calling
  checkTime(hours, mins);
}, 1000);
//function to check and update time
function checkTime(hrs, mins) {
  if (hrs < 10) {
    hrs = `0${hrs}`;
  }
  if (mins < 10) {
    mins = `0${mins}`
  }
  document.querySelector(".playlist .notification-time").innerHTML = `${hrs}:${mins}`;
  document.querySelector(".sign-in .notification-time").innerHTML = `${hrs}:${mins}`;
}
//set music playlist page

let songLists = document.querySelectorAll(".playlist li");
songLists.forEach(song => song.addEventListener("click", playMusic));

let audio = document.querySelector("#audio")
let playPauseBtn = document.querySelector(".playPauseBtn")
document.querySelector(".playPauseBtn").addEventListener("click", playPause);
document.querySelector(".volume").addEventListener("click", muteUnmute)
let muteBtn = document.querySelector(".volume");
// play music on clicking li
function playMusic() {

  let targetAudioId = this.id;

  let targetAudioImg = this.querySelector(".song-img img").src;
  console.log(targetAudioImg)
  let targetAudioName = this.querySelector(".song-detail-name").textContent;
  let targetAudioSpec = this.querySelector(".song-detail-artist").textContent;
  document.querySelector(".artist-main-head-img").src = targetAudioImg;
  document.querySelector(".artist-main-head-name").textContent = targetAudioName;
  document.querySelector(".artist-main-head-song").textContent = targetAudioSpec;
  let songsArr = ["01-Wiz Khalifa - Amber Ice [Prod. By I.D. Labs Productions] [www.SongsLover.com].mp3", "Martin Garrix & Tiësto - The Only Way Is Up (Official Music Video).mp3", "Space Buddha - Self Therapy.mp3"];
  audio.src = `${songsArr[targetAudioId]}`;
  audio.currentTime = 0;
  playPauseBtn.className = "fas fa-pause";
  playPause();

}
//play and pause on clicking playPause Button
function playPause() {

  if (audio.paused && audio.getAttribute("src") != "") {

    audio.play()
    playPauseBtn.className = "fas fa-pause";

  } else if (audio.getAttribute("src") != "") {
    audio.pause();
    playPauseBtn.className = "fas fa-play";

  }
}

function muteUnmute() {

  if (audio.muted) {
    audio.muted = false;
    muteBtn.className = "fas fa-volume-up";
  } else {
    audio.muted = true;
    muteBtn.className = "fas fa-volume-mute";
  }
}
let battery2 = document.querySelector(".playlist .battery");
let battery1 = document.querySelector(".sign-in .battery");

function batteryCharge() {

  setTimeout(function () {
    battery2.className = "fas fa-battery-empty";
    battery1.className = "fas fa-battery-empty";
  }, 0);
  setTimeout(function () {
    battery2.className = "fas fa-battery-quarter";
    battery1.className = "fas fa-battery-quarter";
  }, 1000);
  setTimeout(function () {
    battery2.className = "fas fa-battery-half";
    battery1.className = "fas fa-battery-half";
  }, 2000);
  setTimeout(function () {
    battery2.className = "fas fa-battery-three-quarters";
    battery1.className = "fas fa-battery-three-quarters";
  }, 3000);
  setTimeout(function () {
    battery2.className = "fas fa-battery-full";
    battery1.className = "fas fa-battery-full";
  }, 4000);



};
batteryCharge();
setInterval(batteryCharge, 5000)