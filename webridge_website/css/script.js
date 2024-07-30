// JavaScript to handle navbar hiding/showing on scroll
// window.addEventListener("scroll", function () {
//   const navbar = document.querySelector(".navbar");
//   if (window.scrollY === 0) {
//     navbar.classList.remove("hidden", "translate-y-full");
//   } else {
//     navbar.classList.add("hidden", "translate-y-full");
//   }
// });

// JavaScript for carousel functionality
const carouselItems = document.getElementById("carouselItems");
let currentIndex = 0;
const totalItems = carouselItems.children.length;
const interval = 9000; // Interval in milliseconds (5 seconds)

function showNextItems() {
  // Apply transition for current items to slide out to the left
  for (let i = 0; i < totalItems; i++) {
    carouselItems.children[i].classList.remove("slide-in-right");
    carouselItems.children[i].classList.add("slide-out-left");
  }

  // Calculate next index to show
  currentIndex = (currentIndex + 3) % totalItems;

  // After transition ends, update display and apply transition for next items to slide in from the right
  setTimeout(() => {
    for (let i = 0; i < totalItems; i++) {
      carouselItems.children[i].style.display = "none";
      carouselItems.children[i].classList.remove("slide-out-left");
    }

    for (let i = 0; i < 3; i++) {
      const nextIndex = (currentIndex + i) % totalItems;
      carouselItems.children[nextIndex].style.display = "block";
      carouselItems.children[nextIndex].classList.add("slide-in-right");
    }
  }, 900);
}

// Show initial set of items
showNextItems();

// Automatically show next set of items after interval
setInterval(showNextItems, interval);

