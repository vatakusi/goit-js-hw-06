/* Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span> */

const ref = {
  inputSlider: document.querySelector("input#font-size-control"),
  fontSize: document.querySelector("span"),
};

ref.inputSlider.addEventListener("change", (el) => {
  ref.inputSlider = document.querySelector("input#font-size-control");
  const getChange = Number(ref.inputSlider.value) - 42;
  console.log(typeof getChange, getChange);
  ref.fontSize.style.fontSize = `${getChange}px`;
});
