'use strict';

const mojeFunkce = () => {
  console.log('Ahoj');
};

const tlacitkoElm = document.querySelector('#tlacitko');

tlacitkoElm.addEventListener('click', mojeFunkce);
