document.addEventListener("DOMContentLoaded", function () {
  const container2 = document.getElementById("container2");
  const container1 = document.getElementById("container1");
  setTimeout(() => {
    container2.classList.add("hide");
    container1.classList.remove("hide");
  }
    , 2300);
})

const imgdrg = document.querySelector("#logo");
imgdrg.ondragstart = () => {
  return false;
};

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});