// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ИСПРАВЛЕНИЕ: Обновленный код управления меню
document.addEventListener('DOMContentLoaded', function () {
    const openMenuButton = document.querySelector('.p-navigation__toggle--open');
    const closeMenuButton = document.querySelector('.p-navigation__toggle--close');
    const navigationMenu = document.querySelector('.p-navigation__nav');

    function toggleMenu() {
        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        if (!isMobile) return; // Работаем только на мобильных
        
        navigationMenu.classList.toggle('is-visible');
        document.body.classList.toggle('no-scroll');
        openMenuButton.style.display = navigationMenu.classList.contains('is-visible') ? 'none' : 'block';
        closeMenuButton.style.display = navigationMenu.classList.contains('is-visible') ? 'block' : 'none';
    }

    // ИСПРАВЛЕНИЕ: Добавляем проверку на существование элементов
    if (openMenuButton && closeMenuButton && navigationMenu) {
        openMenuButton.addEventListener('click', toggleMenu);
        closeMenuButton.addEventListener('click', toggleMenu);
    }

    // ИСПРАВЛЕНИЕ: Автоматически закрываем меню при изменении размера окна
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navigationMenu.classList.remove('is-visible');
            openMenuButton.style.display = 'block';
            closeMenuButton.style.display = 'none';
        }
    });
});

// Функция для открытия модального окна
function openContactsModal() {
    const modal = document.getElementById('contacts-modal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

// Функция для закрытия модального окна
function closeContactsModal() {
    const modal = document.getElementById('contacts-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Добавляем обработчик события на ссылку "Контакты"
document.addEventListener('DOMContentLoaded', function () {
    const contactsLink = document.querySelector('.p-footer a[href="#contacts"]');
    if (contactsLink) {
        contactsLink.addEventListener('click', function (e) {
            e.preventDefault(); // Отменяем стандартное поведение ссылки
            openContactsModal();
        });
    }
});
