document.addEventListener('catalogDataLoaded', () => {
  const lazyLoadInstance = new LazyLoad({
    elements_selector: '.lazy'
  });
})