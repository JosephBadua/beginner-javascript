import { isValidColor } from './colors';

export function handleResult({ results }){
  logWords(results)
  const words = (results[results.length - 1][0].transcript)
  let color = words.toLowerCase();
  color = color.replace(/\s/g, '');
  if(!isValidColor(color)) return;
  const colorSpan = document.querySelector(`.${color}`)
  colorSpan.classList.add('got')
  console.log(`valid color`);
  document.body.style.backgroundColor = color
}

function logWords(results){
  // console.log(results[results.length - 1][0].transcript)
}