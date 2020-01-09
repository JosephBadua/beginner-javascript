const buttonText = [
  'Ugh.',
  '🤦🏻‍♂️',
  'omg dad.',
  'you are the worst',
  'seriously',
  'stop it.',
  'please stop',
  'that was the worst one',
];

const jokeButton = document.querySelector(`.getJoke`);
const jokeHolder = document.querySelector(`.joke p`);

async function fetchJoke(){
  const response = await fetch(`https://icanhazdadjoke.com`, {
    headers: {
      Accept: 'application/json',
    }
  })
  const joke = await response.json();
  return joke
}

function randomItemFromArray(arr, not){
  const item = arr[Math.floor(Math.random() * arr.length)]
  if (item === not) {
    return randomItemFromArray(arr, not)
  }
  return item;
}

async function handleClick(){
  const { joke } = await fetchJoke()
  console.log(joke);
  jokeHolder.textContent = joke;
  jokeButton.textContent = randomItemFromArray(buttonText, jokeButton.textContent);
}

jokeButton.addEventListener(`click`, handleClick)

fetchJoke();

