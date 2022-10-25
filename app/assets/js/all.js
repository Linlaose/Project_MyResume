$(function () {
  console.log('Hello Bootstrap5');
});

// burger
const burger = document.querySelector('.burger');
const topLine = document.querySelector('.burger__topline');
const midLine = document.querySelector('.burger__midline');
const btmLine = document.querySelector('.burger__btmline');

if (burger) {
  burger.addEventListener('click', () => {
    topLine.classList.toggle("burger__topline--open");
    midLine.classList.toggle("burger__midline--open");
    btmLine.classList.toggle("burger__btmline--open");
  });
};