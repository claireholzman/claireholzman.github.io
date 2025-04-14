const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');
let motherInfo = 'The mother cats are called ';
let kittenInfo;
const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json';

fetch(requestURL)
  .then(response => response.text())
  .then(text => displayCatInfo(text));

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;

  const cats = JSON.parse(catString);
  const catNames = [];

  for (let i = 0; i < cats.length; i++) {
    catNames.push(cats[i].name);
    const kittens = cats[i].kittens;
    total += kittens.length;

    for (let j = 0; j < kittens.length; j++) {
      if (kittens[j].gender === 'm') {
        male++;
      }
    }
  }

  if (catNames.length > 1) {
    const lastCat = catNames.pop();
    motherInfo += catNames.join(', ') + ' and ' + lastCat + '.';
  } else {
    motherInfo += catNames[0] + '.';
  }

  const female = total - male;
  kittenInfo = `There are ${total} kittens: ${male} male and ${female} female.`;

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;

  section.appendChild(para1);
  section.appendChild(para2);
}
