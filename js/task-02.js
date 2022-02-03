const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const newIngr = ingredients.map((elem) => {
  const itRef = document.createElement("li");
  itRef.classList.add("item");
  itRef.textContent = elem;
  return itRef;
});

const listRef = document.querySelector("ul");
listRef.append(...newIngr);
console.log(newIngr);
/* console.log(listRef); */
