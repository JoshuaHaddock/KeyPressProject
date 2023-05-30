// const button = document.getElementsByTagName('button');
//     document.addEventListener('keypress', () => {
//         button.Audio.play(boom.wav)
//  })

document.getElementById('btn').onclick = function(){
    //Getting button and listning for click
    document.getElementById('audio').play();
    //Utilizing the HTML Audio/Video DOM Reference to play audio/video
    }
    
    //to play on the key A do this(using Jquery):
    document.addEventListener('keydown', function(e) {
      if(e.keyCode == 65){
      document.getElementById('audio').play();
      }
    });

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