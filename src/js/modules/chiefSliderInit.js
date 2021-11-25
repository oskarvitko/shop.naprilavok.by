// после готовности DOM инициализация Слайдера
document.addEventListener('DOMContentLoaded', () => {
  new ChiefSlider('.catalog__card-slider', {
    loop: true,
    interval: 3000,
  })
  new ChiefSlider('.certificate__slider', {
    loop: true,
    interval: 10000,
  })
  new ChiefSlider('.sale-form__slider', {
    loop: false,
    interval: 10000,
  })
})