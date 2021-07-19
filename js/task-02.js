const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const elementsList = document.querySelector("#ingredients");
// console.log(elementsList);

const makeElementsList = (ingredients) => {
  return ingredients.map((ingredient) => {
    const itemEl = document.createElement("li");
    itemEl.textContent = ingredient;

    return itemEl;
  });
};

const elements = makeElementsList(ingredients);
elementsList.append(...elements);
console.log(elementsList);
