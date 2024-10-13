// Функция для динамического изменения высоты right-panel
function adjustRightPanelHeight() {
    // Получаем элементы main и nav
    const main = document.querySelector('main');
    const nav = document.querySelector('nav');
    const rightPanel = document.querySelector('.right-panel');
    
    // Получаем высоты элементов
    const mainHeight = main.offsetHeight;
    const navHeight = nav.offsetHeight;
    
    // Суммируем высоты main и nav
    const totalHeight = mainHeight + navHeight + 35;
    
    // Применяем высоту к .right-panel
    rightPanel.style.height = totalHeight + 'px';
    console.log(rightPanel.style.height)
}

// Вызываем функцию при загрузке страницы
window.addEventListener('load', adjustRightPanelHeight);

// Также вызываем функцию при изменении размера окна
window.addEventListener('resize', adjustRightPanelHeight);
