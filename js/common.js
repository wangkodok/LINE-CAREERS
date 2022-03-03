window.addEventListener('load', () => {
  stopRefreshing();
  language();
  searchBar();
});

// 페이지 언어 변경
function language() {
  const languageChange = document.querySelector('.language');
  languageChange.addEventListener('click', (e)=> {
    let target = e.target;
    if (target.nextSibling.nextSibling.className === 'language-change') {
      languageChange.nextSibling.nextSibling.classList.add('on');
    } else {
      languageChange.nextSibling.nextSibling.classList.remove('on');
    }
  })
  
  // 아무 곳이나 클릭해서 클래스 on 전체 제거
  window.addEventListener('click', (e) => {
    let tag;
    function tagCheck() {
      while (tag !== 'HTML') {
        if (e.target.tagName !== 'BUTTON') {
          tag = e.target.parentNode;
          languageChange.nextSibling.nextSibling.classList.remove('on');
        }
        return;
      }
    }
    tagCheck();
  });
}

// 검색 창
function searchBar() {
  const html = document.querySelector('html');
  const headerLogoImg = document.querySelector('header .logo img');
  const headerUtil = document.querySelector('.util');
  const searchOn = document.querySelector('.util .search-bg');

  headerUtil.addEventListener('click', (e) => {
    if (e.target.className !== 'search-btn' && e.target.className !== 'close') {
      return;
    }

    if (e.target.className === 'search-btn') {
      searchOn.classList.add('on');
      headerLogoImg.src = '../../image/logo.png';
      headerLogoImg.style.position = 'relative';
      headerLogoImg.style.zIndex = 1;
      window.addEventListener('scroll', () => {
        if (html.scrollTop === 0) {
          headerLogoImg.src = '../../image/logo.png';
        }

        if (html.scrollTop < 1 && html.scrollTop > 1) {
          headerLogoImg.src = '../../image/logo.png';
        }
      });
    } else {
      searchOn.classList.remove('on');
      window.addEventListener('scroll', () => {
        if (html.scrollTop === 0) {
          headerLogoImg.src = '../../image/logo_whtie.png';
          if (window.location.href.includes('index') === false) {
            headerLogoImg.src = '../../image/logo.png';
          }
        }
        
        if (html.scrollTop < 1 && html.scrollTop > 1) {
          headerLogoImg.src = '../../image/logo_whtie.png';
        }
      });

      if (html.scrollTop > 1) {
        headerLogoImg.src = '../../image/logo.png';
      } else {
        headerLogoImg.src = '../../image/logo_whtie.png';
        if (window.location.href.includes('index') === false) {
          headerLogoImg.src = '../../image/logo.png';
        }
      }
      headerLogoImg.style.position = '';
      headerLogoImg.style.zIndex = '';
    }
  });
}

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

