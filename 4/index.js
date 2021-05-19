'use strict';

fetch('https://restcountries.eu/rest/v2/alpha/cz')
  .then((response) => response.json())
  .then((data) => {
    const odstavec = document.querySelector('#odstavec');
    odstavec.textContent = data.capital;
  });
