const images =["0.jpeg", "1.jpg", "2.jpeg"]; 

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); 

bgImage.src = `img/${chosenImage}`; 

bgImage.classList.add("bg-image");

document.body.appendChild(bgImage); 