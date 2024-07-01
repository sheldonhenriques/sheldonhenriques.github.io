// Menu toogle
const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('nav-toggle'),
      closeMenu = document.getElementById('nav-close');

// Show
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show');
});

// Hide
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show');
});

// Remove menu
const navLink = document.querySelectorAll('.nav__link');

function linkAction()
{
    navMenu.classList.remove('show');
};

navLink.forEach(n => n.addEventListener('click', linkAction));