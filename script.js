window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero1');
    const footer = document.querySelector('.footer');
    const header = document.querySelector('.header');
    const links = document.querySelectorAll('.header__link');
    const btn = document.querySelector('.header__btn');
    const btn1 = document.querySelector('.header__right');
    const logo = document.querySelector('.header__logo');
    const scrollPosition = window.scrollY;
    const threshold = 1;
    
    if (scrollPosition > threshold) {
        hero.classList.add('active');
        footer.classList.add('open');
        header.classList.add('white');
        logo.classList.add('blue1');
        links.forEach(link => {
            link.classList.add('blue');
        });
        btn.classList.add('blue2');
        btn1.classList.add('blue3');
    } else {
        hero.classList.remove('active');
        footer.classList.remove('open');
        header.classList.remove('white');
        logo.classList.remove('blue1');
        links.forEach(link => {
            link.classList.remove('blue');
        });
        btn.classList.remove('blue2');
        btn1.classList.remove('blue3');
    }
});


function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.header__menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
        if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            burger.classList.add('active-burger')
            body.classList.add('locked')
        } else {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            body.classList.remove('locked')
        }
    })
    menu.addEventListener("click", (event) => {
        if (event.target) {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            body.classList.remove('locked')
        }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
        if (window.innerWidth > 991.98) {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            body.classList.remove('locked')
        }
    })
}
burgerMenu()