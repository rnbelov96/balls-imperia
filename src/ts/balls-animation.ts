const ballElList = document.querySelectorAll('.ball');

ballElList.forEach(ballEl => {
  const parrentSection = ballEl.parentElement?.parentElement;

  const topOffset = parrentSection?.getBoundingClientRect().top + window.pageYOffset;

  ballEl.topOffset = topOffset;

  (ballEl as HTMLImageElement).style.transform = `translateY(${topOffset}px)`;
});

window.addEventListener('scroll', () => {
  const windowScroll = window.pageYOffset;

  ballElList.forEach(ballEl => {
    (ballEl as HTMLImageElement).style.transform = `translateY(${ballEl.topOffset - windowScroll}px)`;
  });
});
