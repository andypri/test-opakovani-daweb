import './style.css';

export const Pribeh = (props) => {
  const pribehElm = document.createElement('div');
  pribehElm.classList.add('pribeh');

  const nadpisElm = document.createElement('h2');
  nadpisElm.textContent = props.nazev;

  const odctavecElm = document.createElement('p');
  odctavecElm.classList.add('hidden');
  odctavecElm.textContent = props.text;

  const tlacitkoElm = document.createElement('button');
  tlacitkoElm.textContent = 'Zobrazit';

  tlacitkoElm.addEventListener('click', () => {
    odctavecElm.classList.toggle('hidden');

    if (odctavecElm.classList.contains('hidden')) {
      tlacitkoElm.textContent = 'Zobrazit';
    } else {
      tlacitkoElm.textContent = 'Skrýt';
    }
  });

  pribehElm.appendChild(nadpisElm);
  pribehElm.appendChild(odctavecElm);
  pribehElm.appendChild(tlacitkoElm);

  return pribehElm;
};
