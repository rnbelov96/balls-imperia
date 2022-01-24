/* eslint-disable no-param-reassign */
export {};

const leftColor = '#FADE40';
const rightColor = '#ffffff';

const rangeElList = document.querySelectorAll('.js-range');

const girlsRange = document.querySelector('.js-girls-range') as HTMLInputElement;
const corpRange = document.querySelector(
  '.js-corp-range',
) as HTMLInputElement;
const birthRange = document.querySelector('.js-birth-range') as HTMLInputElement;

const yaselRangeLineEl = document.querySelector(
  '.js-yasel-line',
) as HTMLDivElement;
const oldRangeLineEl = document.querySelector('.js-old-line') as HTMLDivElement;
const youngRangeLineEl = document.querySelector(
  '.js-young-line',
) as HTMLDivElement;
const dopRangeLineEl = document.querySelector('.js-dop-line') as HTMLDivElement;

const resultLabelEl = document.querySelector(
  '.js-calc-result',
) as HTMLSpanElement;

let result: number;

let personCurrentStep = 2;
let adultsCurrentStep = 2;
let kidsCurrentStep = 2;

const calcResult = () => {
  result = (Number(girlsRange.value) * 4500 + Number(corpRange.value) * 10500)
    * Number(birthRange.value);
  resultLabelEl.textContent = result.toLocaleString();
  return result;
};

calcResult();

rangeElList.forEach(el => {
  const rangeEl = el as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  const currentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (currentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (currentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;
});

girlsRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  personCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (personCurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (personCurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcResult();
});

corpRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  adultsCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (adultsCurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (adultsCurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcResult();
});

birthRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  kidsCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (kidsCurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (kidsCurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcResult();
});
