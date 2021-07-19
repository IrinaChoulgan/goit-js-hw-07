const totalElements = document.querySelectorAll(".item");
console.log(`В списке ${totalElements.length} категории.`);

const elementsArray = [...totalElements]
  .map(
    (elements) => `Категория: ${elements.children[0].textContent}
Количество элементов: ${elements.children[1].children.length}`
  )
  .join("\n");
console.log(elementsArray);
