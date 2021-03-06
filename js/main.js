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

      // 아무 곳이나 클릭해서 클래스 on 전체 제거
      window.addEventListener('click', (e) => {
        let tag;
        function tagCheck() {
          while (tag !== 'HTML') {
            if (e.target.tagName !== 'A') {
              tag = e.target.parentNode;
              listText[i].nextSibling.nextSibling.classList.remove('on');
            }
            return;
          }
        }
        tagCheck();
      });

      // 클래스 on 추가/제거
      function textListLnb(e) {
        let lnbClassName = e.target.parentNode.querySelector('.text-list-lnb');
        let pageMore = document.querySelector('.page-more');
        
        lnbClassName.addEventListener('click', (e) => {
          if (e.target) {
            listText[i].textContent = e.target.textContent;
            lnbClassName.classList.remove('on');
            listText[i].classList.remove('on');
            pageMore.classList.add('on');
          }
        });
        
        if (lnbClassName.className === 'text-list-lnb') {
          classNameRemove();
          lnbClassName.classList.add('on');
          listText[i].classList.add('on');
        } else {
          lnbClassName.classList.remove('on');
          listText[i].classList.remove('on');
        }
      }

      // 클래스 on 전체 제거
      function classNameRemove() {
        for (let i = 0; i < listText.length; i++) {
          let target = listText[i].nextSibling.nextSibling;
          target.classList.remove('on');
          listText[i].classList.remove('on');
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