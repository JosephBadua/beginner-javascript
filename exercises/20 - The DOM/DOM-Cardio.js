// Make a div
const div = document.createElement(`div`);

// add a class of wrapper to it
div.classList.add(`wrapper`);

// put it into the body
document.body.appendChild(div);
// make an unordered list
const ul = `<ul>
<li>List Item One</li>
<li>List Item Two</li>
<li>List Item Three</li>
</ul>`;

div.innerHTML = ul;
// add three list items with the words "one, two three" in them
// put that list into the above wrapper

// create an image
const myImage = document.createElement(`img`);
// set the source to an image
myImage.src = `https://picsum.photos/500`;
// set the width to 250
myImage.width = 250;
myImage.height = 250;
// add a class of cute
myImage.classList.add(`cute`);
// add an alt of Cute Puppy
myImage.alt = `Cute Puppy`;
// Append that image to the wrapper
div.appendChild(myImage);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
// add a class to the second paragraph called warning
// remove the first paragraph
const listElement = document.querySelector('ul');
console.log(listElement);

const paragraph = `
<div class="myDiv">
<p>Paragraph 1</p>
<p>Paragraph 2</p>
</div>`;

listElement.insertAdjacentHTML(`beforebegin`, paragraph);

const myDiv = div.querySelector('.myDiv');
myDiv.firstElementChild.remove();
myDiv.lastElementChild.classList.add('warning');
// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
  const html = `
    <div class=playerCard>
    <h2>${name} - ${age}</h2>
    <p>They are ${height} and ${age} years old. In Dog years this person would be ${age *
    7}. That would be a tall dog!</p>
    <button class="delete" type="button"> Delete </button>
    </div>
  `;
  return html;
}
// make a new div with a class of cards
const card = document.createElement('div');
card.classList.add(`cards`);
console.log(card);

// Have that function make 4 cards
let player1 = generatePlayerCard('carlos', 50, 100);
player1 += generatePlayerCard('carlos', 50, 100);
player1 += generatePlayerCard('carlos', 50, 100);
player1 += generatePlayerCard('carlos', 50, 100);

card.innerHTML = player1;

div.append(card);

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
function deleteCard(event) {
  event.currentTarget.this.parentElement.remove();
  console.log(`DELETE`);
}

const buttons = document.querySelectorAll(`.delete`);
buttons.forEach(button => button.addEventListener(`click`, deleteCard));
