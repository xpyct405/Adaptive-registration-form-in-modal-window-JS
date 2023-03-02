// Объявляем переменные
let openBtn = document.querySelector("#registration-btn");
let closeBtn = document.querySelector(".close-btn");
let cancelBtn = document.querySelector(".cancel-btn");
let modal = document.querySelector(".modal");

// Обработка события при клике по openBtn
openBtn.addEventListener('click', function() {
    modal.style.display = "block"
})

// Обработка события при клике по closeBtn
closeBtn.addEventListener('click', function() {
    modal.style.display = "none"
})

// Обработка события при клике по cancelBtn
cancelBtn.addEventListener('click', function() {
    modal.style.display = "none"
})

// Обработка события при клике вне модального окна
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
})