const listItem = document.querySelectorAll(".item");

console.log(`Number of categories ${listItem.length}`);

const item = document.querySelector(".item");

listItem.forEach((categorie) => {
  const categorieName = categorie.firstElementChild.textContent;
  const categorieNumber = categorie.lastElementChild.children.length;
  console.log(`Category: ${categorieName}`);
  console.log(`Elements : ${categorieNumber}`);
});
