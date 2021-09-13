'use strict';

document.addEventListener('DOMContentLoaded', () => {

    if (document.documentElement.clientWidth < 415) {
        document.getElementById('1').innerHTML = 'Лица с патологиями, а также с нарушениями обмена веществ<sup>20</sup>';
    }

    const btn = document.querySelector('.naproksen__btn'),
          videoBlock = document.querySelector('.video'),
          close = document.querySelector('.video__close');


    btn.addEventListener('click', () => {
        videoBlock.classList.add('_active');
        videoBlock.classList.remove('_hidden');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', () => {
        videoBlock.classList.add('_hidden');
        videoBlock.classList.remove('_active');
        document.body.style.overflow = '';
        hideVideo();
        document.getElementsByTagName('video')[0].pause();
    });

    /* ---------------------------- */

    const btnPlay = document.querySelector('.video__btn'),
          videoImg = document.querySelector('.video__image'),
          video = document.querySelector('.video__video');

        btnPlay.addEventListener('click', (e) => {
            showVideo();
            document.getElementsByTagName('video')[0].play();
        });

    function showVideo() {
        btnPlay.classList.add('_hidden');
        btnPlay.classList.remove('_active');
        videoImg.classList.add('_hidden');
        videoImg.classList.remove('_active');
        video.classList.remove('_hidden');
        video.classList.add('_active');
    }

    function hideVideo() {
        btnPlay.classList.remove('_hidden');
        btnPlay.classList.add('_active');
        videoImg.classList.remove('_hidden');
        videoImg.classList.add('_active');
        video.classList.add('_hidden');
        video.classList.remove('_active');
    }

    /* ----------------------------- */

    const answers = document.querySelectorAll('.answers-block__data');

    function addComent() {
        let coment = document.createElement('div');
        coment.classList.add('comment');

        answers.forEach((item, index) => {
            item.addEventListener('click', () => {

                if (item.dataset.true == 1) {
                    coment.innerHTML = '<h2>верно!</h2>';
                    coment.classList.add('true');
                    item.classList.add('green-block');
                } else {
                    coment.innerHTML = '<h2>ошибка(</h2>';
                    coment.classList.remove('true');
                    item.classList.add('red-block');
                }

                if (index <= 2 && index >= 0) {
                    coment.innerHTML += '<p>Систолическое и диастолическое давление не изменяется после перорального приема Сермиона<sup>®</sup>, или же снижается незначительно, без существенной разницы по сравнению с плацебо<sup>4</sup></p>';
                } else if (index <= 5 && index >= 3) {
                    coment.innerHTML += '<p>Одной из основных причин ХИМ является вазоспазм. Начиная с первых проявлений ХИМ, Сермион<sup>®</sup> уменьшает выраженность вазоспазма, улучшает микроциркуляцию и оптимизирует когнитивные функции<sup>1,2,4-7</sup></p>';
                } else if (index <= 8 && index >= 6) {
                    coment.innerHTML += '<p>Рекомендованная суточная доза препарата Сермион<sup>®</sup> 30 — 60 мг. Курс лечения 3-6 месяцев (можно повторять 1-2 раза в год)<sup>1,12</sup></p>';
                }

                item.after(coment);
            });
        });
    }

    addComent();


});