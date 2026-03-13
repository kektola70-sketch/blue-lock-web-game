document.addEventListener("DOMContentLoaded", () => {
    const startScreen = document.getElementById("start-screen");
    const statusText = document.getElementById("status-text");
    const mainMenu = document.getElementById("main-menu");

    let isLoaded = false;

    // Имитация загрузки (3 секунды)
    setTimeout(() => {
        isLoaded = true;
        // Текст меняется после загрузки
        statusText.innerText = "Нажмите, чтобы продолжить";
    }, 3000); 

    // Обработка тапа по стартовому экрану
    startScreen.addEventListener("click", () => {
        if (isLoaded) {
            startScreen.classList.add("hidden");
            mainMenu.classList.remove("hidden");
        }
    });

    // Обработка кнопок Главного меню
    document.getElementById("btn-play").addEventListener("click", () => {
        alert("Поиск матча... (Сделаем в следующем шаге)");
    });

    document.getElementById("btn-spin").addEventListener("click", () => {
        alert("Рулетка талантов... (Сделаем систему как в Роблоксе)");
    });

    document.getElementById("btn-stats").addEventListener("click", () => {
        alert("Меню прокачки (Скорость, Удар, Дриблинг)");
    });
});