
const renderCatalog = (catalogData, place, functionRenderHTML) => {
  catalogData.forEach((itemCatalog) => {
    place.insertAdjacentHTML('beforeend', functionRenderHTML(itemCatalog))
  })
} 
const getHTMLAddEquipment = (props) => {
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
  
const addEquipmentPlace = document.querySelector('.add-equipment__items')
renderCatalog(DATA.addEquipment, addEquipmentPlace, getHTMLAddEquipment)