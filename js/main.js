window.addEventListener('load', () => {
  visual();
});

// 비주얼 텍스트
function visual() {
  const visualTitle = document.querySelector('.visual .text-box');
  visualTitle.classList.add('on');
}

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