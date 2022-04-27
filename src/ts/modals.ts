/* eslint-disable no-param-reassign */
export {};

const openedModalList: Element[] = [];

const modalFormInfoList = [
  {
    button: 'Получить информацию',
  },
  {
    button: 'Получить расчет',
  },
  {
    button: 'Получить поддержку',
  },
  {
    button: 'Проверить город',
  },
];

const modalTitleElList = document.querySelectorAll('.modal-form__modal-title');

const cityModalInputElList = document.querySelectorAll('.js-city-modal-input');
const nameModalInputElList = document.querySelectorAll('.js-name-modal-input');

const closeModal = (modalEl: HTMLDivElement) => {
  modalEl.style.opacity = '0';
  modalEl.style.overflowY = 'inherit';
  modalEl.style.pointerEvents = 'none';
  document.body.style.overflowY = 'auto';
  document.body.style.paddingRight = '0px';
};

const openModal = (modalEl: HTMLDivElement) => {
  if (window.innerWidth > document.body.clientWidth) {
    document.body.style.paddingRight = `${
      window.innerWidth - document.body.clientWidth
    }px`;
  }
  modalEl.style.opacity = '1';
  modalEl.style.overflowY = 'auto';
  modalEl.style.pointerEvents = 'auto';
  document.body.style.overflowY = 'hidden';
};

const modalElList = document.querySelectorAll('.modal');
const [formModalEl, policyModalEl, youtubeModalEl] = modalElList;

const formBtnEl = formModalEl.querySelector(
  '.js-modal-form-btn',
) as HTMLButtonElement;

const modalWrapperElList = document.querySelectorAll('.modal__center-wrapper');
modalElList.forEach(modalEl => {
  modalEl.addEventListener('click', (e: Event) => {
    if (
      e.target === e.currentTarget ||
      [...modalWrapperElList].includes(e.target as Element)
    ) {
      const clickedModal = e.currentTarget as HTMLDivElement;
      // Если модальных видео несколько, проверить каждое
      if (clickedModal === youtubeModalEl) {
        const iframe = clickedModal.querySelector('iframe');
        if (iframe) {
          const iframeSrc = iframe.src;
          iframe.src = iframeSrc;
        }
      }
      closeModal(clickedModal);
    }
  });
});

const closeModalElList = document.querySelectorAll('.modal__close');
closeModalElList.forEach(closeEl => {
  closeEl.addEventListener('click', () => {
    closeModal(openedModalList[0] as HTMLDivElement);
    openedModalList.shift();
  });
});

// Найти кнопки и прописать события
const policyBtnElList = document.querySelectorAll('.js-policy');
policyBtnElList.forEach(el => {
  el.addEventListener('click', () => {
    openedModalList.unshift(policyModalEl);
    openModal(policyModalEl as HTMLDivElement);
  });
});

const callbackBtnElList = document.querySelectorAll('.js-callback');
callbackBtnElList.forEach(btn => {
  btn.addEventListener('click', () => {
    modalTitleElList.forEach(el => {
      (el as HTMLHeadingElement).style.display = 'none';
    });
    nameModalInputElList.forEach(nameModalInputEl => {
      (nameModalInputEl as HTMLInputElement).hidden = false;
    });
    cityModalInputElList.forEach(cityModalInputEl => {
      (cityModalInputEl as HTMLInputElement).hidden = true;
    });
    openedModalList.unshift(formModalEl);
    (modalTitleElList[0] as HTMLHeadingElement).style.display = 'block';
    formBtnEl.textContent = modalFormInfoList[0].button;
    openModal(formModalEl as HTMLDivElement);
  });
});

const presentBtnElList = document.querySelectorAll('.js-present');
presentBtnElList.forEach(btn => {
  btn.addEventListener('click', () => {
    modalTitleElList.forEach(el => {
      (el as HTMLHeadingElement).style.display = 'none';
    });
    nameModalInputElList.forEach(nameModalInputEl => {
      (nameModalInputEl as HTMLInputElement).hidden = false;
    });
    cityModalInputElList.forEach(cityModalInputEl => {
      (cityModalInputEl as HTMLInputElement).hidden = true;
    });
    openedModalList.unshift(formModalEl);
    (modalTitleElList[0] as HTMLHeadingElement).style.display = 'block';
    formBtnEl.textContent = modalFormInfoList[1].button;
    openModal(formModalEl as HTMLDivElement);
  });
});

const calcBtnElList = document.querySelectorAll('.js-calc');
calcBtnElList.forEach(btn => {
  btn.addEventListener('click', () => {
    modalTitleElList.forEach(el => {
      (el as HTMLHeadingElement).style.display = 'none';
    });
    nameModalInputElList.forEach(nameModalInputEl => {
      (nameModalInputEl as HTMLInputElement).hidden = false;
    });
    cityModalInputElList.forEach(cityModalInputEl => {
      (cityModalInputEl as HTMLInputElement).hidden = true;
    });
    openedModalList.unshift(formModalEl);
    (modalTitleElList[1] as HTMLHeadingElement).style.display = 'block';
    formBtnEl.textContent = modalFormInfoList[1].button;
    openModal(formModalEl as HTMLDivElement);
  });
});

const helpBtnElList = document.querySelectorAll('.js-help');
helpBtnElList.forEach(btn => {
  btn.addEventListener('click', () => {
    modalTitleElList.forEach(el => {
      (el as HTMLHeadingElement).style.display = 'none';
    });
    nameModalInputElList.forEach(nameModalInputEl => {
      (nameModalInputEl as HTMLInputElement).hidden = true;
    });
    cityModalInputElList.forEach(cityModalInputEl => {
      (cityModalInputEl as HTMLInputElement).hidden = false;
    });
    openedModalList.unshift(formModalEl);
    (modalTitleElList[2] as HTMLHeadingElement).style.display = 'block';
    formBtnEl.textContent = modalFormInfoList[3].button;
    openModal(formModalEl as HTMLDivElement);
  });
});
