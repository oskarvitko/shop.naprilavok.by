const menuNav            = document.querySelector('.nav-header__menu-list');
const menuNavItemLinks   = document.querySelectorAll('._link');
const sectionIdInNavMenu = document.querySelectorAll('.__section');

const getId = link => link.getAttribute('href').replace('#', '');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      menuNavItemLinks.forEach(link => {
        link.classList.toggle('active', getId(link) === entry.target.id)
      })
    }
  })
}, {
  threshold: 0.7,
})

sectionIdInNavMenu.forEach(section => observer.observe(section));

menuNav.onclick = (event => {
  if (event.target.classList.contains('_link')) {
    event.preventDefault();

    window.scrollTo({
      top: document.getElementById(getId(event.target)).offsetTop,
      behavior: 'smooth',
    })
    onClickNavLinks();
  }
})