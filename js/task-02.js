const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulElement = document.getElementById("ingredients");

ingredients.forEach((ingredient) => {
  const liElement = document.createElement("li");

  liElement.classList.add("item");

  liElement.textContent = ingredient;
  6;

  ulElement.append(liElement);
});
