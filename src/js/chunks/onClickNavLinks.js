// Переход по ссылкам с применением класса active
const onClickNavLinks = () => {
  if (anchors.length > 0) {
    anchors.forEach(link => {
      link.onclick = () => {
        anchors.forEach(activeLink => activeLink.classList.remove('active'));
        link.classList.add('active');
        burgerBtn.classList.remove('nav-header__burger--active');
        navHeaderMenu.classList.remove('nav-header__menu-list--active');
        if (isBodyLock) setIsBodyLock()
      }
    });
  }
}