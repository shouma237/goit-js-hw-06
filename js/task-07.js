const fontSizeControl = document.getElementById("font-size-control");
const textElement = document.getElementById("text");

fontSizeControl.addEventListener("input", (event) => {
  textElement.style.fontSize = `${event.currentTarget.value}px`;
});
