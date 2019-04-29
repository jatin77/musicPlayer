//global selectors
function _selector(element) {
  return document.querySelector(`${element}`);
};

function _selectorAll(element) {
  return document.querySelectorAll(`${element}`);
};
//sign in page
//Events for sign in form
_selector(".form-options-login ").addEventListener("click", formSubmit);
let signInPage = _selector(".sign-in");
let playListPage = _selector(".playlist");
let userBtn = _selector(".userBtn");
let userPage = _selector(".user");
let showPlaylistBtn = _selector(".showPlaylist");
showPlaylistBtn.addEventListener("click", showPlaylistPage);
let username = _selector("#username");
let password = _selector("#password");
let welcomeName = _selector(".welcome-name")
//switch page user
userBtn.addEventListener("click", showUser)
//show user page
function showUser() {
  userPage.style.display = "grid";
  playListPage.style.display = "none";
}
//show plalist page
function showPlaylistPage() {
  userPage.style.display = "none";
  playListPage.style.display = "grid";
}
//function form submit
function formSubmit(e) {
  e.preventDefault();
  //get username value
  username.value;
  password.value;
  checkFormValues(username, password);

}
//function to check form input
function checkFormValues(name, password) {
  if (name == "" && password == "") {
    username.style.border = "3px solid crimson";
    password.style.border = "3px solid crimson";
    return;
  } else if (name == "" || name.length < 6) {

    username.style.border = "3px solid crimson"

    return;

  } else if (password == "" || password.length < 6) {
    password.style.border = "3px solid crimson"
    return;
  } else {
    signInPage.style.display = "none";
    userPage.style.display = "grid";
    //show user name in welcome page
    welcomeName.innerHTML = name.value;

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
  document.querySelector(".user .notification-time").innerHTML = `${hrs}:${mins}`;
}
//variables for playlist
//set music playlist page

let songLists = _selectorAll(".playlist li");
songLists.forEach(song => song.addEventListener("click", playMusic));
let audio = _selector("#audio")
let playPauseBtn = _selector(".playPauseBtn");
playPauseBtn.addEventListener("click", playPause);
let muteBtn = _selector(".volume");
muteBtn.addEventListener("click", muteUnmute)
audio.addEventListener("timeupdate", updateDuration);
let headImg = _selector(".artist-main-head-img");
let headName = _selector(".artist-main-head-name");
let headSongDetail = _selector(".artist-main-head-song")
let targetAudioId = 0;
1
let battery2 = _selector(".playlist .battery");
let battery1 = _selector(".sign-in .battery");
let battery3 = _selector(".user .battery");
let currTime = _selector(".currentTime");
let durTime = _selector(".duration");

let songsArr = ["01-Wiz Khalifa - Amber Ice [Prod. By I.D. Labs Productions] [www.SongsLover.com].mp3", "Martin Garrix & Tiësto - The Only Way Is Up (Official Music Video).mp3", "Space Buddha - Self Therapy.mp3"];
//functions

// play music on clicking li
function playMusic() {

  targetAudioId = this.id;
  audio.addEventListener("audio.ended", switchTracks);

  let targetAudioImg = this.querySelector(".song-img img").src;
  let targetAudioName = this.querySelector(".song-detail-name").textContent;
  let targetAudioSpec = this.querySelector(".song-detail-artist").textContent;
  headImg.src = targetAudioImg;
  headName.textContent = targetAudioName;
  headSongDetail.textContent = targetAudioSpec;
  audio.src = `${songsArr[targetAudioId]}`;
  audio.currentTime = 0;
  playPauseBtn.className = "fas fa-pause";
  playPause();
  audio.addEventListener("ended", switchTracks);
}
//switch next trrack after one song has ended
function switchTracks() {
  if (targetAudioId == songsArr.length - 1) {
    targetAudioId = 0
  } else {
    targetAudioId++
  }
  audio.src = `${songsArr[targetAudioId]}`;
  audio.play();
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
//mute and unmute audio
function muteUnmute() {

  if (audio.muted) {
    audio.muted = false;
    muteBtn.className = "fas fa-volume-up";
  } else {
    audio.muted = true;
    muteBtn.className = "fas fa-volume-mute";
  }
}

//display current time and duration
function updateDuration() {

  let newTime = audio.currentTime * (100 / audio.duration);
  let curMins = Math.floor(audio.currentTime / 60);
  let curSecs = Math.floor(audio.currentTime - curMins * 60);
  let durMins = Math.floor(audio.duration / 60);
  let durSecs = Math.floor(audio.duration - durMins * 60);
  if (curMins < 10) {
    curMins = `0${curMins}`
  }
  if (curSecs < 10) {
    curSecs = `0${curSecs}`
  }
  if (durMins < 10) {
    durMins = `0${durMins}`
  }
  if (durSecs < 10) {
    durSecs = `0${durSecs}`
  }
  currTime.innerHTML = `${curMins}:${curSecs}`;
  durTime.innerHTML = `${durMins}:${durSecs}`;
}

//battery animation
function batteryCharge() {

  setTimeout(function () {
    battery2.className = "fas fa-battery-empty";
    battery1.className = "fas fa-battery-empty";
    battery3.className = "fas fa-battery-empty";
  }, 0);
  setTimeout(function () {
    battery2.className = "fas fa-battery-quarter";
    battery1.className = "fas fa-battery-quarter";
    battery3.className = "fas fa-battery-quarter";
  }, 1000);
  setTimeout(function () {
    battery2.className = "fas fa-battery-half";
    battery1.className = "fas fa-battery-half";
    battery3.className = "fas fa-battery-half";
  }, 2000);
  setTimeout(function () {
    battery2.className = "fas fa-battery-three-quarters";
    battery1.className = "fas fa-battery-three-quarters";
    battery3.className = "fas fa-battery-three-quarters";
  }, 3000);
  setTimeout(function () {
    battery2.className = "fas fa-battery-full";
    battery1.className = "fas fa-battery-full";
    battery3.className = "fas fa-battery-full";
  }, 4000);
};
batteryCharge();
setInterval(batteryCharge, 5000);
