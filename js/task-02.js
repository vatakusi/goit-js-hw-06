/* В HTML есть пустой список ul#ingredients.

<ul id="ingredients"></ul>
В JavaScript есть массив строк.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
Напиши скрипт, который для каждого элемента массива ingredients:

Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
Добавит название ингредиента как его текстовое содержимое.
Добавит элементу класс item.
После чего вставит все <li> за одну операцию в список ul.ingredients. */

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
