const buttons = document.querySelectorAll(`.card button`);
const inner = document.querySelector(`.modal-inner`);
const outer = document.querySelector(`.modal-outer`);
function buttonClicked(event) {
  const stuff = event.currentTarget;
  const card = stuff.closest(`.card`);
  const img = card.querySelector(`img`).src;
  const desc = card.dataset.description;
  const title = card.querySelector(`h2`).textContent;
  inner.innerHTML = `
  <img width="600" height="600" src="${img.replace(200, 600)}" alt="${title}"/>
  <p>${desc}</p>`;

  outer.classList.add(`open`);
}

function closeModal() {
  outer.classList.remove(`open`);
}

outer.addEventListener(`click`, function(event) {
  const isOutside = event.target.closest(`.modal-inner`);
  if (isOutside == null) {
    closeModal();
  }
});

buttons.forEach(button => button.addEventListener(`click`, buttonClicked));

window.addEventListener(`keydown`, function(event) {
  if (event.key === `Escape`) {
    closeModal();
  }
});
