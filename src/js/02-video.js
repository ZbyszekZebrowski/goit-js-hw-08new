import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoPlayer = new Player('vimeo-player');
const STORAGE_KEY = 'videoplayer-current-time';

const savedTime = localStorage.getItem(STORAGE_KEY);

if (savedTime) {
  vimeoPlayer.setCurrentTime(parseFloat(savedTime));
}


vimeoPlayer.on('timeupdate', throttle((data) => {
  const currentTime = data.seconds;
  localStorage.setItem(STORAGE_KEY, currentTime);
}, 1000)); 
