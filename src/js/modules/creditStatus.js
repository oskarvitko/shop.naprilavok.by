document.addEventListener('DOMContentLoaded', () => { 
  const creditStatusBody = document.querySelector('.credit-status')
  const closeBtn        = document.querySelector('.credit-status__btn-close')
  
  closeBtn.addEventListener('click', () => {
    creditStatusBody.classList.add('credit-status--close')
  })
})