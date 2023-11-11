const validationInput = document.getElementById("validation-input");
const length = validationInput.getAttribute("data-length");

const checkLength = () => {
  const currentLength = validationInput.value.length;
  if (currentLength === parseInt(length)) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
};

validationInput.addEventListener("blur", checkLength);
