/*eslint-disable*/
const div = document.createElement(`div`);
const header = document.createElement(`h2`)
const list = document.createElement(`ul`);
const firstItem = document.createElement(`li`);
const secondItem = document.createElement(`li`);
const thirdItem = document.createElement(`li`);
const fourthItem = document.createElement(`li`);
const fifthItem = document.createElement(`li`);
firstItem.textContent =`Bacon`;
secondItem.textContent = `Shrimp`;
thirdItem.textContent = `Steak`;
fourthItem.textContent = `Starbucks`
fifthItem.textContent = `Hats`;
header.textContent = `My List`

list.classList.add("cool")

list.insertAdjacentElement(`beforeend`, firstItem);
list.insertAdjacentElement(`beforeend`, secondItem);
list.insertAdjacentElement(`beforeend`, thirdItem);
list.insertAdjacentElement(`beforeend`, fourthItem);
list.insertAdjacentElement(`beforeend`, fifthItem);
div.insertAdjacentElement(`beforeend`, header)

div.append(list)
document.body.append(div);


