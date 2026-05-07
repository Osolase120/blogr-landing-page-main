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
      if (window.innerWidth <= 786) {
        e.preventDefault();

        menuItems.forEach(i => {
          if (i !== item) {
            i.classList.remove('active');
          }
        });

        item.classList.toggle('active');
      }
    });
  });
