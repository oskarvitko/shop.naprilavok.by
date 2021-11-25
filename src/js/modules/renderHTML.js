const renderHTML = (catalogData, place, functionRenderHTML) => {
  catalogData.forEach((itemCatalog) => {
    place.insertAdjacentHTML('beforeend', functionRenderHTML(itemCatalog))
  })
}

const getHTMLAbout = props => {
  return (`
    <div class="about__item">
      <div class="about__item-img">
        <img src="./img/icon${props.imgUrl}" alt="icon" class="lazy">
      </div>
      <h4 class="about__item-title">${props.title}</h4>
      <span class="about__item-description">${props.description}</span>
    </div>
  `)
}

const getHTMLMakepurchase = props => {
  return (`
    <div class="makepurchase__item">
      <span class="makepurchase__number">${props.id}</span>
      <div class="makepurchase__subtitle">
        <span class="${props.className}">${props.subtitle} шаг</span>
      </div>
      <div class="makepurchase__item-title">
        <p>${props.title}</p>
      </div>
      <div class="makepurchase__item-text">
        <p>${props.description}</p>
      </div>
    </div>
  `)
}

const getHTMLAddEquipment = props => {
  const srcUrl = 'src="data:image/gif;base64,R0lGODlhGQACAIAAAP///wAAACH5BAEAAAEALAAAAAAZAAIAAAIGjI+py50FADs="'

  return (`
    <div class="add-equipment__item item__block">
      <div class="item__img">
        <img class="lazy" ${srcUrl} data-src="img/add-equip${props.imgUrl}" alt="${props.altName}">
      </div>
      <div class="item-cover">
        <h3 class="item-cover__title">${props.name}</h3>
      </div>
      <div class="item-labels">
        <div class="item-labels__price">${props.price} руб.</div>
        <div class="item-labels__btn modal-feedback__btn--show">Купить</div>
      </div>
    </div>
  `)
}

const getHTMLAccordion = props => {
  return (`
    <div class="faq-accordion__item">
      <div class="item__header">
        <h4 class="item__header-title">${props.title}</h4>
      </div>
      <div class="item__body">
        <p class="item__body-text">${props.description}</p>
      </div>
    </div>
  `)
}

const aboutPlace            = document.querySelector('.about__items')
const makepurchasePlace     = document.querySelector('.makepurchase__items')
const addEquipmentPlace     = document.querySelector('.add-equipment__items')
const accordionPlace        = document.querySelector('.faq-accordion')

renderHTML(DATA.about, aboutPlace, getHTMLAbout)
renderHTML(DATA.makepurchase, makepurchasePlace, getHTMLMakepurchase)
renderHTML(DATA.addEquipment, addEquipmentPlace, getHTMLAddEquipment)
renderHTML(DATA.accordion, accordionPlace, getHTMLAccordion)