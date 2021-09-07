$(".admission-button").click(function() {
  alert("Welcome to the Admissions Section!")
});

const hamburger_menu = document.querySelector(".hamburger-menu")
const container = document.querySelector(".new-container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
})
