
var hamburger = document.querySelector(".hamburger");
var submenu = document.querySelector(".submenu");
// On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  submenu.classList.toggle("submenu--active");
});

var time = 1582231568;

 // Set up FlipDown
 var flipdown = new FlipDown(time)

   // Start the countdown
   .start()

   // Do something when the countdown ends
   .ifEnded(() => {
     console.log('The countdown has ended!');
   });
