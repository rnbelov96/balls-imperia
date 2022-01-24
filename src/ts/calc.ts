/* eslint-disable no-param-reassign */
export {};

const girlsRange = document.querySelector('.js-girls-range') as HTMLInputElement;
const corpRange = document.querySelector(
  '.js-corp-range',
) as HTMLInputElement;
const birthRange = document.querySelector('.js-birth-range') as HTMLInputElement;

const girlsRangeLineEl = document.querySelector(
  '.js-girls-line',
) as HTMLDivElement;
const corpRangeLineEl = document.querySelector('.js-corp-line') as HTMLDivElement;
const birthRangeLineEl = document.querySelector(
  '.js-birth-line',
) as HTMLDivElement;

const resultLabelEl = document.querySelector(
  '.js-calc-result',
) as HTMLSpanElement;

let result: number;

let girlsCurrentStep = 4;
let corpCurrentStep = 4;
let birthCurrentStep = 4;

const calcResult = () => {
  result = (Number(girlsRange.value) * 4500 + Number(corpRange.value) * 10500 + Number(birthRange.value) * 4500)
    * 0.01;
  resultLabelEl.textContent = result.toLocaleString();
  return result;
};

calcResult();

girlsRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  girlsCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  girlsRangeLineEl.style.width = `${girlsCurrentStep * (100 / steps)}%`;

  calcResult();
});

corpRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  corpCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  corpRangeLineEl.style.width = `${corpCurrentStep * (100 / steps)}%`;

  calcResult();
});

birthRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  birthCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  birthRangeLineEl.style.width = `${birthCurrentStep * (100 / steps)}%`;

  calcResult();
});
