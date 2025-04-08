// Select the buttons
const newQuoteButton = document.querySelector('#js-new-quote');
const answerButton = document.querySelector('#js-tweet');

// Select display elements
const quoteText = document.querySelector('#js-quote-text');
const answerText = document.querySelector('#js-answer-text');

// API endpoint
const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

// Store the current answer
let currentAnswer = '';

// Event listeners
newQuoteButton.addEventListener('click', getQuote);
answerButton.addEventListener('click', showAnswer);
document.addEventListener('DOMContentLoaded', getQuote);

// Fetch a new trivia question
function getQuote() {
  fetch(endpoint)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Trivia fetched:', data);
      displayQuote(data.question);
      currentAnswer = data.answer;
      answerText.textContent = ''; // Clear previous answer
    })
    .catch(error => {
      console.error('Fetch error:', error);
      alert('Failed to fetch trivia. Please try again later.');
    });
}

// Display the question
function displayQuote(quote) {
  quoteText.textContent = quote;
}

// Display the answer
function showAnswer() {
  if (currentAnswer) {
    answerText.textContent = currentAnswer;
  } else {
    answerText.textContent = 'Click the button above to get a trivia question first!';
  }
}
