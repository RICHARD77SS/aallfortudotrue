import { secundsToMinutes } from "./utils.js";

export default {
  set() {
    this.capa = document.querySelector('#card__img');
    this.title = document.querySelector('.music__title');
    this.artistName = document.querySelector('.music__author');
    this.playPause = document.querySelector('#playPause');
    this.nextTrack = document.querySelector("#next-track");
    this.previousTrack = document.querySelector("#previous-track");
    this.volume = document.querySelector('#volumeonicon');
    this.volumeControl = document.querySelector('#volume-control');
    this.progressbar = document.querySelector('#progressbar');
    this.currentDuration = document.querySelector('.current-duration');
    this.totalDuration = document.querySelector('.total-duration');
  },
  createAudioElement(audio) {
    this.audio = new Audio(audio);
  },
  actions() {
    this.playPause.onclick = () => this.togglePlayPause();
    this.audio.onended = () => this.next();

    this.volume.onclick = () => this.toggleMute();
    this.volumeControl.oninput = () => this.setVolume(this.volumeControl.value);
    this.volumeControl.onchange = () => this.setVolume(this.volumeControl.value);

    this.progressbar.oninput = () => this.setProgressBar(this.progressbar.value);
    this.progressbar.onchange = () => this.setProgressBar(this.progressbar.value);
    this.progressbar.max = this.audio.duration;

    this.totalDuration.innerText = secundsToMinutes(this.audio.duration);
    
    this.audio.ontimeupdate = () => this.timeUpdate()

    this.nextTrack.onclick = () => this.next();
    this.previousTrack.onclick = () => this.back();
  },
};
