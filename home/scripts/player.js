import audios from "./data.js";
import { path, secundsToMinutes } from "./utils.js";
import elements from  "./playerElements.js";

export default {
  audioData: audios,
  currentAudio: {},
  currentPlaying: 0,
  isPlaying: false,
  start() {
    elements.set.call(this);
    this.update();
    this.volumeControl.value = 100;
  },
  play() {
    this.isPlaying = true;
    this.audio.play();
    this.playPause.innerHTML = ``
    this.playPause.innerHTML = `<i class="fa-solid fa-pause"></i>`
    
  },
  pause() {
    this.isPlaying = false;
    this.audio.pause();
    this.playPause.innerHTML = ``
    this.playPause.innerHTML = `<i class="fa-solid fa-play"></i>`
  },
  togglePlayPause() {
    if (this.isPlaying) {
      this.pause();
    } else{
      this.play()
    }
  },
  next() {
    ++this.currentPlaying;

    if (this.currentPlaying === this.audioData.length) {
      this.currentPlaying = 0;
    }
    this.pause();
    this.update();
    this.play();
  },
  back() {
    --this.currentPlaying;

    if (this.currentPlaying === -1) {
      this.currentPlaying = this.audioData.length - 1;
    }

    this.pause();
    this.update();
    this.play();
  },
  toggleMute() {
    this.audio.muted = !this.audio.muted;
    this.volume.innerHTML = this.audio.muted ? `<i class="fa-solid fa-volume-xmark"></i>` : `<i class="fa-solid fa-volume-high"></i>`;
  },
  setVolume(value) {
    this.audio.volume = value / 100;
  },
  setProgressBar(value) { 
    this.audio.currentTime = value;
  },
  timeUpdate() { 
    this.currentDuration.innerText = secundsToMinutes(this.audio.currentTime);
    this.progressbar.value = this.audio.currentTime;
  },
  update() {
    this.currentAudio = this.audioData[this.currentPlaying];
    this.capa.style.background = `url('${path(this.currentAudio.capa)}')center`;

    this.title.innerHTML = `<i class="fa-solid fa-music"></i> ${this.currentAudio.title}`;
    this.artistName.innerHTML = `<i class="fa-solid fa-user"></i> ${this.currentAudio.artistName}`;

    elements.createAudioElement.call(this, path(this.currentAudio.file));
    
    this.audio.onloadeddata = () => { 
      elements.actions.call(this);
    };
  },
};