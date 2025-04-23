'use strict';
const modal = document.querySelector('.modal__container');
const openModalBtn = document.querySelector('.open__modal');
const closeModalBtn = document.querySelector('.close__modal');

// setTimeout(function () {
//     modal.classList.add('active');
// }, 3000);

openModalBtn.addEventListener('click', function () {
    modal.classList.add('active');
})

closeModalBtn.addEventListener('click', function () {
    modal.classList.remove('active');
})

const tabs = Array.from(document.querySelectorAll('.tab'));
const content = Array.from(document.querySelectorAll('.content'));

tabs.forEach((tab, index) => {
    tab.addEventListener('click', function () {
        document.querySelector('.tab.active').classList.remove('active');
        tab.classList.add('active');
        document.querySelector('.content.active').classList.remove('active');
        content[index].classList.add('active');
    })
})