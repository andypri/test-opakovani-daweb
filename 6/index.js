'use strict';

const ulozitElm = document.querySelector('#ulozit');

const nakup = [];

ulozitElm.addEventListener('click', (event) => {
  const inputElm = document.querySelector('#email');
  nakup.push(inputElm.value);
  event.preventDefault();
  inputElm.value = '';
  inputElm.focus();
  console.log(nakup);
});
