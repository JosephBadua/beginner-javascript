const webcam = document.querySelector(`.webcam`);
const video = document.querySelector(`.video`);
const canvas = document.querySelector(`.face`);
const context = canvas.getContext(`2d`);
const FaceContext = canvas.getContext(`2d`);
const optionInput = document.querySelectorAll(`.controls input[type="range"]`);
const options = {
  size: 10,
  scale: 1.5,
};

function handleOption(event) {
  const { value, name } = event.currentTarget;
  options[name] = parseFloat(value);
}

optionInput.forEach(input => input.addEventListener(`input`, handleOption));
const faceDetector = new window.FaceDetector();

async function populateVideo() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: { width: 1280, height: 720 },
  });
  webcam.srcObject = stream;
  await webcam.play();
  console.log(webcam.videoWidth, webcam.videoHeight);
  canvas.width = webcam.videoWidth;
  canvas.height = webcam.videoHeight;
  video.width = webcam.videoWidth;
  video.height = webcam.videoHeight;
}

async function detect() {
  const faces = await faceDetector.detect(webcam);
  faces.forEach(drawFace);
  faces.forEach(censor);
  requestAnimationFrame(detect);
}

function drawFace(face) {
  const { width, height, top, left } = face.boundingBox;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.lineWidth = 2;
  context.strokeRect(left, top, width, height);
}

function censor({ boundingBox: face }) {
  FaceContext.drawImage(
    webcam,
    face.x,
    face.y,
    face.width,
    face.height,
    face.x,
    face.y,
    options.size,
    options.size
  );

  const width = face.width * options.scale;
  const height = face.height * options.scale;

  FaceContext.drawImage(
    canvas,
    face.x,
    face.y,
    options.size,
    options.size,
    face.x - (width - face.width) / 2,
    face.y - (height - face.height) / 2,
    width,
    height
  );
}

populateVideo().then(detect);
