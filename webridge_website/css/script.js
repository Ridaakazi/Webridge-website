      // JavaScript to handle navbar hiding/showing on scroll
      window.addEventListener("scroll", function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY === 0) {
            navbar.classList.remove('hidden', 'translate-y-full');
        } else {
            navbar.classList.add('hidden', 'translate-y-full');
        }
    });


    // JavaScript for carousel functionality
    const carouselItems = document.getElementById('carouselItems');
        let currentIndex = 0;
        const totalItems = carouselItems.children.length;
        const interval = 9000; // Interval in milliseconds (5 seconds)

        function showNextItems() {
            // Hide current items
            for (let i = 0; i < totalItems; i++) {
                carouselItems.children[i].style.display = 'none';
            }

            // Calculate next index to show
            currentIndex = (currentIndex + 3) % totalItems;

            // Show next set of items
            for (let i = 0; i < 3; i++) {
                const nextIndex = (currentIndex + i) % totalItems;
                carouselItems.children[nextIndex].style.display = 'block';
            }
        }

        // Show initial set of items
        showNextItems();

        // Automatically show next set of items after interval
        setInterval(showNextItems, interval);


        document.addEventListener("DOMContentLoaded", function() {
            const icons = [
              { id: "icon1", color: "black" },
              { id: "icon2", color: "black" },
              { id: "icon3", color: "black" },
              { id: "icon4", color: "black" },
              { id: "icon5", color: "black" },
              { id: "icon6", color: "black" },
              { id: "icon7", color: "black" },
              { id: "icon8", color: "black" },
            ];
          
            function animateIcons() {
              icons.forEach((icon, index) => {
                setTimeout(() => {
                  const element = document.getElementById(icon.id);
                  // Change color and size
                  element.style.color = icon.color;
                  element.style.fontSize = "2rem";  // Change to desired size
          
                  // Revert back to original after 1.5 seconds
                  setTimeout(() => {
                    element.style.color = "";
                    element.style.fontSize = "";
                  }, 2000);  // Revert interval time to match the transition duration
                }, index * 2000);  // Change interval time as needed
              });
          
              // Repeat the animation sequence
              setTimeout(animateIcons, icons.length * 2000);
            }
          
            // Start the animation
            animateIcons();
          });
          