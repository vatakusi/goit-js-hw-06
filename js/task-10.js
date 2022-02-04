/* Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>

Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

Размеры самого первого <div> - 30px на 30px.
Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы. */

const inInput = document.querySelector("input");
console.log("1: ", inInput);

const buttons = document.querySelectorAll("button");
console.log("1b: ", buttons[0]);

const divBox = document.querySelector("div#boxes");
console.log("divBox: ", divBox);

const buttCheck = inInput.addEventListener("blur", () => {
  const buttCheck = buttons[0].addEventListener("click", () => {
    const numOfDiv = inInput.value;
    console.log("1c check: ", inInput.value);
    let num = 30;
    const setDiv = [];
    for (let i = 0; i < numOfDiv; i += 1) {
      setDiv.push(
        `<div style="background-color: ${getRandomHexColor()}; width: ${num}px; height: ${num}px;"></div>`
      );
      num += 10;
      console.log("4a: ", num);
    }
    ///

    console.log(setDiv);

    //
    const toSetDiv = setDiv.join("");
    divBox.insertAdjacentHTML("afterbegin", toSetDiv);

    const buttCheck = buttons[1].addEventListener("click", () => {
      // const divs = document.querySelector("div");
      divBox.innerHTML = "";
      // buttons[1].setAttribute("type", "reset");
      numOfDiv = 0;
      console.log(numOfDiv);
      // console.log("6: ", divBox[div]);
    });
  });
  console.log("4: ");
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
