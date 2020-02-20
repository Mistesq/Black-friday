
var hamburger = document.querySelector(".hamburger");
var submenu = document.querySelector(".submenu");
var body = document.querySelector("body");
var dummy = document.querySelector(".dummy");
// On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  submenu.classList.toggle("submenu--active");
  body.classList.toggle("ov-hidden");
});

var time = 1616096925;

 // Set up FlipDown
 var flipdown = new FlipDown(time)

   // Start the countdown
   .start()

   // Do something when the countdown ends
   .ifEnded(() => {
     startStub();
     console.log('The countdown has ended!');
   });


   function startStub() {
      body.classList.add("ov-hidden");
      dummy.classList.add("dummy--active");
      window.scrollTo(0, 0);
  };
