window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    menu__hamburger = document.querySelector('.menu__hamburger');

    menu__hamburger.addEventListener('click', () => {
        menu__hamburger.classList.toggle('menu__hamburger_active');
        menu.classList.toggle('menu__active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            menu__hamburger.classList.toggle('menu__hamburger_active');
            menu.classList.toggle('menu__active');
        })
    })
})