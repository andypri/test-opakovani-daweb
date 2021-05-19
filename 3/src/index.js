import { Pribeh } from './Pribeh';
import { pribehy } from './pribehy';

import './style.css';

const appElm = document.querySelector('#app');

pribehy.forEach((pribeh) => {
  appElm.appendChild(Pribeh(pribeh));
});
