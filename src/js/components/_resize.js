document.addEventListener("DOMContentLoaded", () => {
  const sectionTitles = document.querySelectorAll('.title-resize');

  const onResize = () => {
    if (sectionTitles) {
      sectionTitles.forEach(title => (
        window.innerWidth < 1025
          ? title.classList.remove('title-line')
          : title.classList.add('title-line')
      ))
    }
  }

  window.onresize = onResize;
  onResize();
});