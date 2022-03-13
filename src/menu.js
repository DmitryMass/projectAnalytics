let header = document.querySelector("#nav");

function getMenu() {
  header.classList.toggle("active");
}
header.addEventListener("click", getMenu);
