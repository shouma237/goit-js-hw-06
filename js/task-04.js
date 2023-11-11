let counterValue = 0;
let decrementButton = document.querySelector('[data-action="decrement"]');
let incrementButton = document.querySelector('[data-action="increment"]');
let valueSpan = document.getElementById("value");

decrementButton.addEventListener("click", () => {
  counterValue--;
  valueSpan.textContent = counterValue;
});

incrementButton.addEventListener("click", () => {
  counterValue++;
  valueSpan.textContent = counterValue;
});
