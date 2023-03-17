// $(document).ready(function () {
//   $("form.calculator-greenhouses").change(function () {
//     var brandName           = $("input[name='product']", this).val(),
//         arcType             = $("input[name='arc_type']:checked", this).val(),
//         lengthDevice        = $("input[name='length']:checked", this).val(),
//         arcStep             = $("input[name='arc_step']:checked", this).val(),
//         polycarbonate       = $("input[name='polycarbonate']:checked", this).val(),
//         calculationPrice    = 0

//     calculationPrice += DATA.priceList[brandName][arcType][lengthDevice][arcStep][polycarbonate]

//     var calculatorPriceNew    = $(".price--new", this),
//         calculatorPriceOld    = $(".catalog__card-price--old", this)

//     $({ animateNumber: brandName }).animate({ animateNumber: calculationPrice }, {
//       duration: 200, step: (brandName) => {
//         calculatorPriceNew.text(Number(brandName).toFixed())
//         calculatorPriceOld.text(Number(1.15 * brandName).toFixed())
//       },
//       complete: () => {
//         calculatorPriceNew.data("animateFrom", Number(calculationPrice).toFixed())
//       }
//     })
//   });
//   $("form.calculator-greenhouses").change()
// })

document.addEventListener('catalogDataLoaded', () => {
    function animationNumber(currentPrice, priceLabel) {
        const time = 150
        const stepNumber = window.isRu ? 425 : 72
        let counterPrice = 0

        const timeInterval = Math.round(time / (currentPrice / stepNumber))
        const intervalChangeNumber = setInterval(() => {
            counterPrice += stepNumber

            if (counterPrice >= currentPrice) {
                clearInterval(intervalChangeNumber)
                priceLabel.innerHTML = currentPrice
            } else {
                priceLabel.innerHTML = counterPrice
            }
        }, timeInterval)
    }

    const currentForms = document.querySelectorAll(
        'form.calculator-greenhouses',
    )
    currentForms.forEach((form) => {
        function calcPrice() {
            const brandName = form.querySelector("input[name='product']").value
            const arcType = form.querySelector(
                "input[name='arc_type']:checked",
            ).value
            const lengthDevice = form.querySelector(
                "input[name='length']:checked",
            ).value
            const arcStep = form.querySelector(
                "input[name='arc_step']:checked",
            ).value
            const polycarbonate = form.querySelector(
                "input[name='polycarbonate']:checked",
            ).value
            const calculatorPriceNew = form.querySelector('.price--new')
            let calculationPrice = 0

            const productIdInput = form.querySelector('input[name=product_id]')
            if (productIdInput) {
                productIdInput.value =
                    DATA.productIdList[brandName][lengthDevice][arcStep]
            }

            calculationPrice +=
                DATA.priceList[brandName][arcType][lengthDevice][arcStep][
                    polycarbonate
                ]
            calculatorPriceNew.innerHTML = Number(calculationPrice).toFixed()

            animationNumber(calculationPrice, calculatorPriceNew)
        }
        calcPrice()
        form.addEventListener('input', calcPrice)
    })
})
