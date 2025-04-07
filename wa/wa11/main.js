const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// Image list & alt text
const imageFilenames = ['my1.jpg', 'my2.jpg', 'my3.jpg', 'my4.jpg', 'my5.jpg'];
const altTexts = {
  'my1.jpg': 'Description of image 1',
  'my2.jpg': 'Description of image 2',
  'my3.jpg': 'Description of image 3',
  'my4.jpg': 'Description of image 4',
  'my5.jpg': 'Description of image 5'
};

// Generate thumbnails
imageFilenames.forEach(file => {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', file);
  newImage.setAttribute('alt', altTexts[file]);
  thumbBar.appendChild(newImage);

  newImage.addEventListener('click', () => {
    displayedImage.setAttribute('src', file);
    displayedImage.setAttribute('alt', altTexts[file]);
  });
});

// Toggle darken/lighten
btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});

