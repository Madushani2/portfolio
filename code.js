<script>
    // --- Mobile Menu Toggle ---
    const toggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav-links');
    toggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });

    // --- Dark/Light Mode Toggle ---
    function myFunction() {
      var element = document.body;
      element.classList.toggle("dark-mode");
    }

    // Load saved theme
    if (localStorage.getItem('theme') === 'dark') {
      body.classList.add('dark');
      themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

    themeToggle.addEventListener('click', () => {
      body.classList.toggle('dark');
      if (body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
      } else {
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
      }
    });
  </script>