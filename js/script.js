document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling to sections
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
  
        if (targetElement) {
          // Close mobile menu if open
          document.querySelector('.nav-links').classList.remove('active');
  
          // Smoothly scroll to the target section
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust offset for fixed nav
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Toggle mobile menu
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
  
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  });
  