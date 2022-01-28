import '../scss/thanks.scss';
import './modals';

const userName = localStorage.getItem('userName');

const nameLabelEl = document.querySelector('.js-name') as HTMLSpanElement;
nameLabelEl.textContent = userName
  ? `${localStorage.getItem('userName')},`
  : 'Гость,';

document.title = userName ? `${userName}, спасибо, Ваша заявка принята` : 'Cпасибо, Ваша заявка принята';
