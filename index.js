const bigbutton = document.getElementById('bigred');
const imgcontainer = document.getElementById('imgcontainer');

let currentImage = 0;

const images = ["balls.jpg", "bbc.jpg", "car.png", "tank1.png", "tank2.png", "tank3.png", "tank4.png", "tank5.png", ]

bigbutton.addEventListener("mousedown", () => {
    let audio = new Audio('./static/sound.mp3');
    
    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }
    imgcontainer.innerHTML = `<img src="./static/${images[currentImage]}" width=500px>`

    audio.play();
})