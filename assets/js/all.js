"use strict";

$(function () {
  console.log('Hello Bootstrap5');
}); // burger

var burger = document.querySelector('.burger');
var topLine = document.querySelector('.burger__topline');
var midLine = document.querySelector('.burger__midline');
var btmLine = document.querySelector('.burger__btmline');

if (burger) {
  burger.addEventListener('click', function () {
    topLine.classList.toggle("burger__topline--open");
    midLine.classList.toggle("burger__midline--open");
    btmLine.classList.toggle("burger__btmline--open");
  });
}

;
//# sourceMappingURL=all.js.map
