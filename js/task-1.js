const catigList = document.querySelector(`#categories`);
const catigItem = catigList.querySelectorAll(`.item`);

const titleAll = document.querySelectorAll(`.item > h2`);
const ulAll = document.querySelectorAll(`.item ul`);
const liAll = document.querySelectorAll(`.item li`);

console.log(`Number of categories: ${catigItem.length}`);

catigItem.forEach(item => {
    const catigName = item.querySelector(`h2`).textContent;

    const elemAll = item.querySelectorAll('ul li').length;

    console.log(`Category: ${catigName}`);
    console.log(`Elements: ${elemAll}`);
});

catigList.classList.add(`js-catigories`);

catigItem.forEach((item) => {
  item.classList.add(`catigitem`);
});

titleAll.forEach((item) => {
  item.classList.add(`js-htwoelem`);
});

ulAll.forEach((item) => {
  item.classList.add(`js-ulelem`);
});

liAll.forEach((item) => {
  item.classList.add(`js-lielem`);
});







// catigItem.forEach((item) => {
//   item.classList.add("js-li-item");
// });



// liAll.forEach((item) => {
//   item.classList.add("js-lielem");
// });