export {};

const animationElList = [
  ...document.querySelectorAll('.animateX'),
  ...document.querySelectorAll('.animateY'),
];

const containerList = document.querySelectorAll('.container');

const windowHeight = document.documentElement.clientHeight;

setTimeout(() => {
  containerList.forEach(el => {
    el.style.opacity = 1;
  });
  window.addEventListener('scroll', () => {
    const winTop = window.pageYOffset;

    animationElList.forEach(elem => {
      if (elem.classList.contains('animated')) {
        return;
      }

      const topCoords = elem.getBoundingClientRect().top + window.pageYOffset;

      if (winTop > topCoords - windowHeight * 0.75) {
        elem.classList.add('animated');
      }
    });
  });
}, 500);
