/* Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1> */

const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

// const textInput = "Anonymus";

textInput.addEventListener("input", (event) => {
  let text = event.currentTarget.value.trim();
  if (!text) {
    text = "Anonymous";
  }
  output.textContent = text;
});
