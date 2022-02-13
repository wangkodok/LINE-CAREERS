window.addEventListener('load', () => {
  visual();
});

// 비주얼 텍스트 박스
function visual() {
  const visualTitle = document.querySelector('.visual .text-box');
  visualTitle.classList.add('on');

  // 텍스트 리스트
  function visualTitleList() {
    const listText = document.querySelectorAll('.visual .text-list .txt');

    for (let i = 0; i < listText.length; i++) {
      listText[i].addEventListener('click', (e) => {
        textListLnb(e);
      });

      // 클래스 on 추가/제거
      function textListLnb(e) {
        let lnbClassName = e.target.parentNode.querySelector('.text-list-lnb');
        if (lnbClassName.className === 'text-list-lnb') {
          classNameRemove();
          lnbClassName.classList.add('on');
        } else {
          lnbClassName.classList.remove('on');
        }
      }

      // 클래스 on 전체 제거
      function classNameRemove() {
        for (let i = 0; i < listText.length; i++) {
          let target = listText[i].nextSibling.nextSibling;
          target.classList.remove('on');
        }
      }
    }
  }

  visualTitleList();
};

// 스크롤시 헤더 스타일 변경
function headerScroll() {
  const html = document.querySelector('html');
  const header = document.querySelector('header');
  const headerLogoImg = document.querySelector('header .logo img');

  if (html.scrollTop > 1) {
    header.className = 'sub-header';
    headerLogoImg.src = '../../image/logo.png';
  } else {
    header.className = 'main-header';
    headerLogoImg.src = '../../image/logo_whtie.png';
  }
}

// 스크롤 실행
window.addEventListener('scroll', () => {
  headerScroll();
});