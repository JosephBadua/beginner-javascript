export function handleResult(event){
  logWords(event.results)
  const words = (results[results.length - 1][0].transcript)
}

function logWords(results){
  console.log(results[results.length - 1][0].transcript)
}