const gallery1 = Gallery(document.querySelector(`.gallery1`));
const gallery2 = Gallery(document.querySelector(`.gallery2`));

function Gallery(gallery) {
  const modal = document.querySelector(`.modal`);
  const prevButton = modal.querySelector(`.prev`);
  const nextButton = modal.querySelector(`.next`);
  let currentImage;
  if (!gallery) {
    throw console.log(`error`);
  }
  const images = Array.from(gallery.querySelectorAll(`img`));
  console.log(images);

  function closeModal() {
    modal.classList.remove(`open`);
    window.removeEventListener(`keyup`, handleKey);
    nextButton.removeEventListener(`click`, nextImage);
    prevButton.removeEventListener(`click`, prevImage);
  }

  function handleClickOutside(event) {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }

  function handleKey(event) {
    if (event.key === `Escape`) closeModal();
    if (event.key === `ArrowRight`) nextImage();
    if (event.key === `ArrowLeft`) prevImage();
  }

  function openModal() {
    console.log(`Open`);
    if (modal.matches(`.open`)) {
      console.info(`Modal`);
    }
    modal.classList.add(`open`);
    window.addEventListener(`keyup`, handleKey);
    nextButton.addEventListener(`click`, nextImage);
    prevButton.addEventListener(`click`, prevImage);
  }

  function nextImage() {
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
  }

  function prevImage() {
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
  }

  function showImage(imageElement) {
    if (!imageElement) {
      console.log(`no image`);
    }
    console.log(imageElement);
    modal.querySelector(`img`).src = imageElement.src;
    modal.querySelector(`h2`).textContent = imageElement.title;
    modal.querySelector(`figure p`).textContent =
      imageElement.dataset.description;
    currentImage = imageElement;
    openModal();
  }

  images.forEach(image =>
    image.addEventListener(`click`, event => showImage(event.currentTarget))
  );

  images.forEach(image =>
    image.addEventListener(`keyup`, function(event) {
      if (event.key === `Enter`) {
        showImage(event.currentTarget);
      }
    })
  );

  modal.addEventListener(`click`, handleClickOutside);
}
