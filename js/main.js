// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Открытие и закрытие меню
document.addEventListener('DOMContentLoaded', function () {
    const openMenuButton = document.querySelector('.p-navigation__toggle--open');
    const closeMenuButton = document.querySelector('.p-navigation__toggle--close');
    const navigationMenu = document.querySelector('.p-navigation__nav');

    // Проверяем, что элементы найдены
    if (!openMenuButton || !closeMenuButton || !navigationMenu) {
        console.error('Один из элементов не найден!');
        return;
    }

    // Открыть меню
    openMenuButton.addEventListener('click', function (e) {
        e.preventDefault(); // Предотвращаем стандартное поведение ссылки
        navigationMenu.classList.add('is-visible'); // Добавляем класс для отображения меню
    });

    // Закрыть меню
    closeMenuButton.addEventListener('click', function (e) {
        e.preventDefault(); // Предотвращаем стандартное поведение ссылки
        navigationMenu.classList.remove('is-visible'); // Убираем класс для скрытия меню
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