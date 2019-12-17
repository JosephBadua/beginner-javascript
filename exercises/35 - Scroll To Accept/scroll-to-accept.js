console.log('IT WORKS!');

const accept = document.querySelector(`.terms-and-conditions`);
const watch = document.querySelector(`.watch`);
const button = document.querySelector(`.accept`);
function observeCallback(payload) {
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    observe.unobserve(accept.lastElementChild);
  } else {
    button.disabled = true;
  }
}
const observe = new IntersectionObserver(observeCallback, {
  root: accept,
  threshold: 1,
});

observe.observe(accept.lastElementChild);
