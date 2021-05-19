'use strict';

const pribehyElms = document.querySelectorAll('.pribeh');

pribehyElms.forEach((pribehElm) => {
  const tlacitkoElm = pribehElm.querySelector('button');

  tlacitkoElm.addEventListener('click', () => {
    const odstavecElm = pribehElm.querySelector('p');
    odstavecElm.classList.toggle('hidden');

    odstavecElm.classList.contains('hidden')
      ? (tlacitkoElm.textContent = 'Zobrazit')
      : (tlacitkoElm.textContent = 'Skrýt');
  });
});
