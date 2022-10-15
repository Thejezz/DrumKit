document.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return;
    const key  = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
})

function endTransition (e){
    if (e.propertyName != 'transform') return
    this.classList.remove('playing')
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', endTransition))