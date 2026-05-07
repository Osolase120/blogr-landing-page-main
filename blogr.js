const menuToggle = document.getElementById("Hamburger");
const navMenu = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
});

const menuItems = document.querySelectorAll('.dropDown-menu');

  menuItems.forEach(item => {
    const link = item.querySelector('a');

    link.addEventListener('click', function (e) {
      // Prevent default link behavior on mobile
      if (window.innerWidth <= 786) {
        e.preventDefault();

        // Close other open menus
        menuItems.forEach(i => {
          if (i !== item) {
            i.classList.remove('active');
          }
        });

        // Toggle current menu
        item.classList.toggle('active');
      }
    });
  });