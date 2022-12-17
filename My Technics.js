/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания: */
function showSlides(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides = document.getElementsByClassName("item");

    /* Проверяем количество слайдов: */
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides[slideIndex - 1].style.display = "block";
}


function func1() {
    var elem = document.getElementById('r1');
    elem.value = '🗸';
}

function func2() {
    var elem = document.getElementById('r2');
    elem.value = '🗸';
}

function func3() {
    var elem = document.getElementById('r3');
    elem.value = '🗸';
}

function func4() {
    var elem = document.getElementById('r4');
    elem.value = '🗸';
}

function func5() {
    var elem = document.getElementById('r5');
    elem.value = '🗸';
}

function func6() {
    var elem = document.getElementById('r6');
    elem.value = '🗸';
}

function func7() {
    var elem = document.getElementById('r7');
    elem.value = '🗸';
}

function func8() {
    var elem = document.getElementById('r8');
    elem.value = '🗸';
}