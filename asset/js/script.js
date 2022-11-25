const burger = document.getElementById("burger");
const user = document.getElementById("signUserHide");
const btnBurger = document.getElementById("btnBurger");
const btnUser = document.getElementById("btnUser");
console.log(burger);
// ecoutes

btnBurger.addEventListener("click", helloMeal);
btnUser.addEventListener("click", helloUser);

// functions
function helloMeal() {
  burger.classList.toggle("burgerHide");
}

function helloUser() {
  user.classList.toggle("signUserHide");
}
