@@include('./lib/_jquery-3.6.0.min.js');
@@include('./lib/_lazyload.min.js');

@@include('./plugins/_jquery.maskedinput.min.js');
@@include('./plugins/_chief-slider.js');
@@include('./plugins/_countdown.js');

@@include('./components/_testWebP.js');
@@include('./components/_lazy-init.js');
@@include('./components/_resize.js');
@@include('./components/_onClickNavLinks.js');
@@include('./components/_setActiveLink.js');
@@include('./components/_chief-slider-init.js');
@@include('./components/_masked-input.js');
@@include('./plugins/_loading-yandex-map.js');

const header = document.querySelector('#nav-header')

window.addEventListener('scroll', () => {
  header.classList.toggle('sticky', document.documentElement.scrollTop > 400)
})
// Фикс дергания экрана при появлении Модального окна
const anchors                 = document.querySelectorAll('a._link')
const TIMEOUT                 = 280
const BODY                    = document.querySelector('body')
const lockPadding             = document.querySelectorAll('.lock-padding')
const lockPosition            = document.querySelector('.lock-position')
const modalLegalInfo          = document.querySelector('.legal-info__modal')
const closeBtnModalLegalInfo  = document.querySelector('.legal-info__close-btn')
const showModalLegalInfoBtn   = document.querySelector('.legal-info__btn')
const modalFeedbackRequest    = document.querySelector('.feedback-request__modal')
const showModalFeedbackBtns   = document.querySelectorAll('.modal-feedback__btn--show')
const closeBtnModalFeedback   = document.querySelector('.feedback-request__close-btn')

if (showModalLegalInfoBtn) {
  showModalLegalInfoBtn.addEventListener('click', () => {
    modalLegalInfo.classList.add('show')
    setBodyLock()
  });
    closeBtnModalLegalInfo.addEventListener('click', () => {
    modalLegalInfo.classList.remove('show')
    setBodyUnLock()
  });
}

if (showModalFeedbackBtns.length > 0) {
  showModalFeedbackBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      modalFeedbackRequest.classList.add('show')
      setBodyLock()
    })
  })
}
closeBtnModalFeedback.addEventListener('click', () => {
  modalFeedbackRequest.classList.remove('show')
  setBodyUnLock()
  setTransition()
})

const setBodyLock = () => {
  const pageWrapper = document.querySelector('.page')
  const lockPaddingValue = window.innerWidth - pageWrapper.offsetWidth;

  if (lockPadding.length > 0) {
    lockPadding.forEach(element => {
      element.style.paddingRight = `${lockPaddingValue}px`;
      element.style.transition = 'none';
    })
    lockPosition.style.right = 15 + lockPaddingValue + 'px';
    BODY.style.paddingRight = `${lockPaddingValue}px`;
    BODY.classList.add('lock');
  }
};

const setBodyUnLock = () => {
  setTimeout(() => {
    if (lockPadding.length > 0) {
      lockPadding.forEach((element) => {
        element.style.paddingRight = '0px';
        element.style.transition = 'none';
      })
    }
    lockPosition.style.right = '15px';
    BODY.style.paddingRight = '0px';
    BODY.classList.remove('lock');
  }, TIMEOUT);
};

// Возвращение свойства transition после закрытия модального окна
const setTransition = () => {
  setTimeout(() => {
    if (lockPadding.length > 0) {
      lockPadding.forEach(element => {
        element.style.transition = 'all 280ms ease 0ms';
      })
    }
  }, TIMEOUT + 500)
}

// Burger Menu
const burgerBtn     = document.querySelector('.nav-header__burger');
const navHeaderMenu = document.querySelector('.nav-header__menu-list');
let isBodyLock      = false;
const setIsBodyLock = () => {
  isBodyLock = !isBodyLock;
  isBodyLock ? setBodyLock() : setBodyUnLock()
}
if (burgerBtn) {
  burgerBtn.onclick = () => {
    burgerBtn.classList.toggle('nav-header__burger--active');
    navHeaderMenu.classList.toggle('nav-header__menu-list--active');
    setIsBodyLock();
    setTransition();
  }
}
// Аккордеон
const accordionItems = document.querySelectorAll('.faq-accordion__item');

if (accordionItems.length > 0) {
  accordionItems.forEach((accordionItem) => {
    accordionItem.onclick = () => {
      accordionItems.forEach(activeItem => activeItem.classList.remove('active'));
      accordionItem.classList.add('active');
    }
  });
}