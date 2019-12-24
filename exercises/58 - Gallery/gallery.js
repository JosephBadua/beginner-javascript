function Gallery(gallery) {
  if (!gallery) {
    throw console.log(`error`);
  }
  const images = Array.from(gallery.querySelectorAll(`img`));
  console.log(images);

  function showImage(imageElement) {
    if (!imageElement) {
      console.log(`no image`);
    }
    console.log(imageElement);
  }

  images.forEach(image =>
    image.addEventListener(`click`, event => showImage(event.currentTarget))
  );
}

const gallery1 = Gallery(document.querySelector(`.gallery1`));
const gallery2 = Gallery(document.querySelector(`.gallery2`));

const modal = document.querySelector(`.modal`);
const prevButton = modal.querySelector(`.prev`);
const nextButton = modal.querySelector(`.next`);
