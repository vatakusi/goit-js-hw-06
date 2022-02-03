/* Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>

Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
} */

/* ================= */

const bodyColor = document.querySelector("body");
const buttonPress = document.querySelector("button");
const spanIn = document.querySelector("span");

console.log(bodyColor);
console.log(buttonPress);

buttonPress.addEventListener("click", () => {
  const bcg = getRandomHexColor();
  bodyColor.setAttribute("style", `background-color: ${bcg}`);
  spanIn.textContent = `- ${bcg}`;
  console.log(spanIn.textContent);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
