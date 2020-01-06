function wait(ms = 0) {
  return new Promise (resolve => setTimeout (resolve, ms))
}

async function destroyPopup(popup){
  popup.classList.remove(`open`);
  await wait(!000);
  popup.remove();
  popup = null;
};

function ask(options) {
  return new Promise(async function(resolve) {
    const popup = document.createElement('form');
    popup.classList.add(`popup`);
    popup.insertAdjacentHTML(`afterbegin`, `
    <fieldset>
    <label>${options.title}</label>
    <input type="text" name="input"/>
    <button type="submit">Submit</button>
    </fieldset>
    `
    );

    if (options.cancel) {
      const skipButton = document.createElement(`button`);
      skipButton.type = `button`;
      skipButton.textContent = `Cancel`;
      popup.firstElementChild.appendChild(skipButton)
      skipButton.addEventListener(`click`, function(){
        resolve(null);
      }, {once: true});
      destroyPopup(popup)
    }

    popup.addEventListener(`submit`, function(event){
      event.preventDefault();
      resolve(event.target.input.value)
      destroyPopup(popup);
    }, {once: true});

    document.body.appendChild(popup)
    await wait(500).then(() => popup.classList.add(`open`))
  });
}

async function askQuestion(event){
  const button = event.currentTarget;
  const cancelButton = `cancel` in dataset.cancel;
  const answer = await ask({title: button.dataset.question, cancel: cancelButton})
  console.log(answer)
}

const buttons = document.querySelectorAll(`[data-question]`);
console.log(buttons);
buttons.forEach(button => button.addEventListener(`click`, askQuestion))