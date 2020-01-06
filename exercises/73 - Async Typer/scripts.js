function wait(ms = 0){
    return new Promise(resolve => setTimeout(resolve, ms));
}

function randomBetween(min = 20, max = 150, random = Math.random()){
    return Math.floor(random * (max-min) + min);
}

// async function draw(element){
//     console.log(element)
//     const text = element.textContent;
//     let soFar = "";
//     for (const letter of text){
//         console.log(letter);
//         soFar += letter;
//         element.textContent = soFar;
//         const { typeMin, typeMax } = element.dataset
//         const timetoWait = randomBetween(typeMin, typeMax)
//         await wait(timetoWait);
//     }
// }

function draw(el) {
    let index = 1;
    const text = el.textContent;
    const { typeMin, typeMax } = el.dataset
    async function drawLetter() {
        el.textContent = text.slice(0, index);
        index += 1;
        const timetoWait = randomBetween(typeMin, typeMax)
        await wait(timetoWait);
        if(index <= text.length){
        drawLetter();   
        }
    }
    drawLetter();
}



const elements = document.querySelectorAll(`[data-type]`)
elements.forEach(element => draw(element))