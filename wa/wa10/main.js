// Select elements
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

// Function to get a random item from an array
function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

const storyText = "On a chilly evening, :insertx: decided to explore the haunted forest. As they reached :inserty:, an eerie sound echoed, and suddenly, they :insertz:. Bob witnessed it all, but remained unfazed — after all, :insertx: had a reputation for strange encounters.";
const insertX = ['The Mischievous Elf', 'Captain Thunder', 'Madame Whimsy'];
const insertY = ['the abandoned castle', 'the misty graveyard', 'the enchanted lake'];
const insertZ = ['vanished into thin air', 'started floating uncontrollably', 'turned into a glowing firefly and flew away'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  // Get random values
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  // Replace placeholders
  newStory = newStory.replaceAll(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  // Replace Bob with custom name if entered
  if (customName.value !== '') {
    newStory = newStory.replace('Bob', customName.value);
  }

  // Convert to UK units if UK radio button is checked
  if (document.getElementById('uk').checked) {
    const weight = Math.round(300 / 14) + ' stone';
    const temperature = Math.round((94 - 32) * 5 / 9) + ' centigrade';
    newStory = newStory.replace('300 pounds', weight);
    newStory = newStory.replace('94 fahrenheit', temperature);
  }

  // Display the story
  story.textContent = newStory;
  story.style.visibility = 'visible';
}
