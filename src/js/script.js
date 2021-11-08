@@include('./lib/_jquery-3.6.0.min.js');
@@include('./plugins/_jquery.maskedinput.min.js');
@@include('./plugins/_chief-slider.js');
@@include('./plugins/_countdown.js');

@@include('./components/_testWebP.js');
@@include('./components/_resize.js');
@@include('./components/_chief-slider-init.js');
@@include('./components/_masked-input.js');

const header = document.querySelector('#nav-header');

window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 400) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

// Плавная прокрутка по ссылкам
const anchors = document.querySelectorAll('a._link');

anchors.forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    event.preventDefault();

    const blockID = anchor.getAttribute('href')

    document.querySelector(blockID).scrollIntoView({
      left: 0,
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Фикс дергания экрана при появлении Модального окна
const TIMEOUT                 = 280;
const BODY                    = document.querySelector('body');
const lockPadding             = document.querySelectorAll('.lock-padding');
const lockPosition            = document.querySelector('.lock-position');
const modalLegalInfo          = document.querySelector('.legal-info__modal');
const closeBtnModalLegalInfo  = document.querySelector('.legal-info__close-btn');
const modalShowBtn            = document.querySelector('.legal-info__btn');


if (modalShowBtn) {
  modalShowBtn.addEventListener('click', () => {
    modalLegalInfo.classList.add('show');
    setBodyLock();
  });
    closeBtnModalLegalInfo.addEventListener('click', () => {
    modalLegalInfo.classList.remove('show');
    setBodyUnLock();
  });
}

const modalFeedbackRequest = document.querySelector('.feedback-request__modal');
const showModalFeedbackBtns = document.querySelectorAll('.modal-feedback__btn--show');
const closeBtnModalFeedback = document.querySelector('.feedback-request__close-btn');

showModalFeedbackBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    modalFeedbackRequest.classList.add('show');
    setBodyLock();
  });
});
closeBtnModalFeedback.addEventListener('click', () => {
  modalFeedbackRequest.classList.remove('show');
  setBodyUnLock();
  setTransition();
});

const setBodyLock = () => {
  const lockPaddingValue = window.innerWidth - document.querySelector('.page').offsetWidth;

  if (lockPadding.length > 0) {
    lockPadding.forEach((element) => {
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
    lockPadding.forEach((element) => {
      element.style.transition = 'all 280ms ease 0ms';
    })
  }, TIMEOUT + 500)
}

// Переход по ссылкам с применением класса active
const navLinks = document.querySelectorAll('.nav-header__menu-item');

if (navLinks) {
  navLinks.forEach((link) => {
    link.onclick = () => {
      navLinks.forEach(activeLink => activeLink.classList.remove('active'));
      link.classList.add('active');
    }
  });
}

// Burger Menu
const burgerBtn     = document.querySelector('.nav-header__burger');
const navHeaderMenu = document.querySelector('.nav-header__menu-list');
let isBodyLock      = false;
const setIsBodyLock = () => {
  isBodyLock = !isBodyLock;
  if (isBodyLock) {
    setBodyLock();
  } else {
    setBodyUnLock();
  }
  
}
if (burgerBtn) {
  burgerBtn.onclick = () => {
    burgerBtn.classList.toggle('nav-header__burger--active');
    navHeaderMenu.classList.toggle('nav-header__menu-list--active');
    setIsBodyLock();
  }
}

anchors.forEach(anchor => {
  anchor.onclick = () => {
    burgerBtn.classList.toggle('nav-header__burger--active');
    navHeaderMenu.classList.toggle('nav-header__menu-list--active');
    if (isBodyLock) {
      setIsBodyLock();
    }
  } 
});

// Аккордеон
const accordionItems = document.querySelectorAll('.faq-accordion__item');

accordionItems.forEach((accordionItem) => {
    accordionItem.onclick = () => {
      accordionItems.forEach((el) => el.classList.remove('active'));
      accordionItem.classList.add('active');
    }
});