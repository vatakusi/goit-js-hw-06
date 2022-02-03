const ulCateg = document.querySelectorAll(".item");
console.log("Number of categories: ", ulCateg.length);
ulCateg.forEach((elem) => {
  const titleRef = elem.querySelector("h2").textContent;
  console.log("Category: ", titleRef);
  const sumItemRef = elem.querySelectorAll("li");
  console.log("Elements: ", sumItemRef.length);
});
