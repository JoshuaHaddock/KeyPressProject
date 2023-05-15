// const button = document.getElementsByTagName('button');
//     document.addEventListener('keypress', () => {
//         button.Audio.play(boom.wav)
//  })


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

// document.addEventListener('keydown', function() {
//     if (keyCode == 65) {
//       document.getElementById('audio').play();
//     }
//   });
//   if ("keyCode" == 65) {
//     if(document.getElementById('audio').paused){
//     document.getElementById('audio').play();
//    }
//    else{
//     document.getElementById('audio').pause;
//   }
// };

window.addEventListener('keydown', (event) => {
    RenderCharacters(event);
})