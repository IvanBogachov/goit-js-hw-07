const catigList = document.querySelector(`#categories`);
const catigItem = catigList.querySelectorAll(`.item`);

console.log(`Number of categories: ${catigItem.length}`);

catigItem.forEach(item => {
    const catigName = item.querySelector(`h2`).textContent;

    const elemAll = item.querySelectorAll('ul li').length;



    console.log(`Category: ${catigName}`);
    console.log(`Elements: ${elemAll}`);
});