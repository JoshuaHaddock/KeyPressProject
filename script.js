// const button = document.getElementsByTagName('button');
//     document.addEventListener('keypress', () => {
//         button.Audio.play(boom.wav)
//  })

let boom = new Audio('/audio/boom.wav')
let clap = new Audio('/audio/clap.wav')
let hihat = new Audio('/audio/hihat.wav')
let kick = new Audio('/audio/kick.wav')
let openhat = new Audio('/audio/openhat.wav')
let ride = new Audio('/audio/ride.wav')
let snare = new Audio('/audio/snare.wav')
let tink = new Audio('/audio/tink.wav')
let tom = new Audio('/audio/tom.wav')


document.getElementById('boomButton').addEventListener("click", function(){
    boom.play()
})
document.getElementById('clapButton').addEventListener("click", function(){
    clap.play()
})
document.getElementById('hihatButton').addEventListener("click", function(){
    hihat.play()
})
document.getElementById('kickButton').addEventListener("click", function(){
    kick.play()
})
document.getElementById('openhatButton').addEventListener("click", function(){
    openhat.play()
})
document.getElementById('rideButton').addEventListener("click", function(){
    ride.play()
})
document.getElementById('snareButton').addEventListener("click", function(){
    snare.play()
})
document.getElementById('tinkButton').addEventListener("click", function(){
    tink.play()
})
document.getElementById('tomButton').addEventListener("click", function(){
    tom.play()
})

    document.addEventListener('keydown', function(e) {
        console.log(e)
      if(e.keyCode == 65){
      boom.play();
      }else if (e.keyCode == 83){
    snare.play();
      }
    }
    );

const insert = document.getElementById('insert');
const RenderCharacters  = keyData => {
    insert.innerHTML = `<div class="key">
        ${keyData.key === ' ' ? 'Space' : keyData.key}
        <small>event.key</small>
    </div>
    <div class="key">
        ${keyData.keyCode}
        <small>event.keyCode</small>
    </div>
    <div class="key">
        ${keyData.code}
        <small>event.code</small>
    </div>`;
};


window.addEventListener('keydown', (event) => {
    RenderCharacters(event);
})