window.addEventListener('keydown', (event)=>{
    const audio = document.querySelector(`audio[data-key='${event.keyCode}']`)
    const key = document.querySelector(`div[data-key='${event.keyCode}']`)
    console.log(key);
    if (!audio){return;}

    audio.play();

    key.setAttribute('class', 'pushed')

});

window.addEventListener('keyup', (event)=>{
    const key = document.querySelector(`div[data-key='${event.keyCode}']`)

    key.setAttribute('class', 'key')

});