const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;

function handleKeyup(event) {
    if (event.keyCode === 32) {
        if (!isJumping) {
            jump();
        }

    }
}

function jump() {
   
    IsJumping = true;
    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);

            // Descendo
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    position -= 15;
                    dino.style.bottom = position + 'px';
                }
            }, 20);
        } else {
            //Subindo
            position += 15;
            dino.style.bottom = position + 'px';
        }
    }, 20);
}

function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let radomTime = Math.random() * 6000;

    console.log(radomTime);

    cactus.classList.add('cactus');
    cactus.style.left = 100 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        cactusPosition -= 10;
        cactus.style.left = cactusPosition + 'px'
        if (cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if(cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            // Game over
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class ="game-over">Perdeu ksksksk</h1>';
        } else{
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px'
        }
    }, 20);
    
    setTimeout(createCactus, radomTime);
}

createCactus();
document.addEventListener('keyup', handleKeyup); 