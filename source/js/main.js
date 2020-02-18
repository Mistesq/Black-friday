
var hamburger = document.querySelector(".hamburger");
var submenu = document.querySelector(".submenu");
// On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  submenu.classList.toggle("submenu--active");
});
