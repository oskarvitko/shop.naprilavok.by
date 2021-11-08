// после готовности DOM инициализация Слайдера
document.addEventListener('DOMContentLoaded', () => {
  new ChiefSlider('.certificate__slider', {
    loop: true,
    interval: 10000,
  });
  new ChiefSlider('.sale-form__slider', {
    loop: false,
    interval: 10000,
  })
});