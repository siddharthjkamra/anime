let currentIndex = 0;
const images = [
    '/assets/nobita.jpg',
    '/assets/earth.jpg',
    '/assets/door.jpg'
];

const slider = document.getElementById('slider');

function changeImage() {
  currentIndex = (currentIndex + 1) % images.length;
  slider.src = images[currentIndex];
  slider.classList.remove('visible');
  setTimeout(() => {
    slider.classList.add('visible');
  }, 50);
}

slider.src = images[currentIndex];
slider.classList.add('visible');

setInterval(changeImage, 3000);