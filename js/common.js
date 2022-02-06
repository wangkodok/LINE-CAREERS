window.addEventListener('load', () => {
  stopRefreshing();
});

// 스크롤 인터랙션
function scrollInteraction() {
  const obj = {
    selectorAll: '.main-container > section',
    className: 'scroll-js',
    screenPosition: 1.2,
  };

  const sectionWpap = document.querySelectorAll(obj.selectorAll);
  const screenPosition = window.innerHeight / obj.screenPosition;

  for (let i = 1; i < sectionWpap.length; i++) {
    const sectionPosition = sectionWpap[i].getBoundingClientRect().top;
    if (sectionPosition < screenPosition) {
      sectionWpap[i].classList.add(obj.className);
    } else {
      sectionWpap[i].classList.remove(obj.className);
    };
  };
};

// 스크롤 실행
window.addEventListener('scroll', () => {
  scrollInteraction();
});

// a 태그 새로 고침 중지
function stopRefreshing() {
  const aTag = document.querySelectorAll('a');
  
  for (let i = 0; i < aTag.length; i++) {
    aTag[i].addEventListener('click', (event) => {
      let href = aTag[i].getAttribute("href");
      if (href === '#' || href === '') {
        event.preventDefault();
      };
    });
  };
};

