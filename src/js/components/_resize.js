document.addEventListener("DOMContentLoaded", () => {
  const sectionTitles = document.querySelectorAll('.title-resize');

  if (sectionTitles) {
    function resize() {
      if (window.innerWidth < 1025) {
        sectionTitles.forEach((title) => {
          title.classList.remove('title-line');
        })
      } else {
        sectionTitles.forEach((title) => {
          title.classList.add('title-line');
        })
      }
    }
  }

  // sectionTitles.forEach(function resize(title) {
  //   if(window.innerWidth < 1025) {
  //     title.classList.remove('title-line');
  //   } else {
  //     title.classList.add('title-line');
  //   }
  // })

  window.onresize = resize;
  resize();
});