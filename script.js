document.addEventListener("DOMContentLoaded", () => {
    let progress = 0;
    const progressBar = document.getElementById("progress");
    const loadingText = document.getElementById("loading-text");
    const loadingScreen = document.getElementById("loading-screen");
    const mainMenu = document.getElementById("main-menu");

    // Фразы для атмосферы Blue Lock
    const phrases = [
        "Анализ поля...",
        "Поиск эгоистов...",
        "Пробуждение эго...",
        "Подготовка оружия...",
        "Вход в Blue Lock..."
    ];

    // Функция симуляции загрузки
    let interval = setInterval(() => {
        // Случайный шаг загрузки от 1 до 5%
        progress += Math.floor(Math.random() * 5) + 1; 

        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            finishLoading();
        }

        // Обновляем полосу
        progressBar.style.width = progress + "%";
        
        // Меняем текст в зависимости от процента
        let phraseIndex = Math.floor((progress / 100) * phrases.length);
        if (phraseIndex >= phrases.length) phraseIndex = phrases.length - 1;
        
        loadingText.innerText = `${phrases[phraseIndex]} ${progress}%`;

    }, 150); // Скорость обновления в миллисекундах

    function finishLoading() {
        loadingText.innerText = "ГОТОВО!";
        
        // Ждем полсекунды и показываем меню
        setTimeout(() => {
            // Плавное затухание (если добавим анимацию CSS) или просто скрытие
            loadingScreen.classList.add("hidden");
            mainMenu.classList.remove("hidden");
        }, 500);
    }
});