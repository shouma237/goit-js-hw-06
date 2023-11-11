const numberOfCategory = document.querySelectorAll(".item");
console.log("Number of categories:", numberOfCategory.length);

numberOfCategory.forEach((category) => {
  const el = category.querySelector("h2").textContent;
  console.log("Category:", el);

  const categoryList = category.lastElementChild;
  const categoryLength = categoryList.children.length;
  console.log("Elements:", categoryLength);
});
