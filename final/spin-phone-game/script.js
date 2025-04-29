const wheel = document.getElementById('wheel');
const spinButton = document.getElementById('spinButton');
const confirmation = document.getElementById('confirmation');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const builtNumberSpan = document.getElementById('builtNumber');
const submitButton = document.getElementById('submitButton');

let builtPhoneNumber = [];
let spinning = false;
let spinInterval = null;

spinButton.addEventListener('click', () => {
  if (spinning) return;
  spinning = true;
  confirmation.style.display = "none";
  spinInterval = setInterval(() => {
    const randomDigit = Math.floor(Math.random() * 10);
    wheel.textContent = randomDigit;
  }, 100);
  
  setTimeout(() => {
    clearInterval(spinInterval);
    spinning = false;
    confirmation.style.display = "block";
  }, 2000); // Spins for 2 seconds
});

yesButton.addEventListener('click', () => {
  const selectedDigit = wheel.textContent;
  builtPhoneNumber.push(selectedDigit);
  builtNumberSpan.textContent = builtPhoneNumber.join('');
  confirmation.style.display = "none";

  if (builtPhoneNumber.length === 10) {
    spinButton.style.display = 'none';
    confirmation.style.display = 'none';
    submitButton.style.display = 'block';
  }
});

noButton.addEventListener('click', () => {
  confirmation.style.display = "none";
});
