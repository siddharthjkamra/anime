const title = document.getElementById('sitetitle');

function generateRandomColor() {
  const colorOptions = [
        '#FF3E4D', // Vibrant Red (70s)
        '#FFD700', // Gold (70s, 80s)
        '#FF6347', // Tomato (90s)
        '#FFA500', // Orange (70s, 80s, 90s)
        '#00CED1', // Dark Turquoise (Anime)
        '#9932CC', // Dark Orchid (Anime)
        '#32CD32', // Lime Green (Anime)
        '#FF4500', // Orange Red (Anime)
      ];
  return colorOptions[Math.floor(Math.random() * colorOptions.length)];
}

function getTextColor(bgColor) {
  const brightness = getColorBrightness(bgColor);
  return brightness > 150 ? '#333' : 'white';
}

function getColorBrightness(color) {
  const hex = color.replace(/^#/, '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return Math.sqrt(0.299 * (r ** 2) + 0.587 * (g ** 2) + 0.114 * (b ** 2));
}

function changeColors() {
  const randomColor = generateRandomColor();
  const textColor = getTextColor(randomColor);
  title.style.backgroundColor = randomColor;
  title.style.color = textColor;
}

window.addEventListener('load', changeColors);
title.addEventListener('click', changeColors);