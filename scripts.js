document.addEventListener('DOMContentLoaded', () => {
    // Анимация слайдера отзывов
    const reviews = document.querySelector('.review-slider');
    let isDown = false;
    let startX;
    let scrollLeft;

    reviews.addEventListener('mousedown', (e) => {
        isDown = true;
        reviews.classList.add('active');
        startX = e.pageX - reviews.offsetLeft;
        scrollLeft = reviews.scrollLeft;
    });
    reviews.addEventListener('mouseleave', () => {
        isDown = false;
        reviews.classList.remove('active');
    });
    reviews.addEventListener('mouseup', () => {
        isDown = false;
        reviews.classList.remove('active');
    });
    reviews.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - reviews.offsetLeft;
        const walk = (x - startX) * 3;
        reviews.scrollLeft = scrollLeft - walk;
    });

    // Форма обратной связи
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
        form.reset();
    });
});
