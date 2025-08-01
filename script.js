    const toggleBtn = document.getElementById('menu-toggle');
    const menu = document.getElementById('main-menu');

    toggleBtn.addEventListener('click', () => {
      menu.classList.toggle('open');
    });