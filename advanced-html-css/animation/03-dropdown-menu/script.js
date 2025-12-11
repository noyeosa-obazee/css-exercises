const dropdownContainer = document.querySelector(".dropdown-container");
const menuTitle = document.querySelector(".menu-title");
const dropdownMenu = document.querySelector(".dropdown-menu");

menuTitle.addEventListener("click", () => {
  dropdownMenu.classList.toggle("visible");
});

window.addEventListener("click", (e) => {
  if (!dropdownContainer.contains(e.target)) {
    dropdownMenu.classList.remove("visible");
  }
});
