const btn = document.querySelector('.hum');
const nav = document.querySelector('.header-nav__sp');
btn.addEventListener('click', () => {
    nav.classList.toggle('open-menu');
    btn.classList.toggle('close')
});