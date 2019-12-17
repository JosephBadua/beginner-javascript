const tabs = document.querySelector(`.tabs`);
const buttons = tabs.querySelectorAll(`[role="tab"]`);
const tabPanel = tabs.querySelectorAll(`[role="tabpanel"]`);

function handleTabClick(event) {
  console.log(event.currentTarget);
  tabPanel.forEach(panel => (panel.hidden = true));
  buttons.forEach(tab => tab.setAttribute(`aria-selected`, false));
  event.currentTarget.setAttribute(`aria-selected`, true);
  const buttonId = event.currentTarget.id;
  const thisThing = tabs.querySelector(`[aria-labelledby="${buttonId}"]`);
  thisThing.hidden = false;
  console.log(buttonId);
}

buttons.forEach(button => button.addEventListener(`click`, handleTabClick));
