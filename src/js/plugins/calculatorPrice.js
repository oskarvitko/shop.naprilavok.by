$(document).ready(function () {
  $("form.calculator-greenhouses").change(function () {
    var brandName           = $("input[name='product']", this).val(),
        arcType             = $("input[name='arc_type']:checked", this).val(),
        lengthDevice        = $("input[name='length']:checked", this).val(),
        arcStep             = $("input[name='arc_step']:checked", this).val(),
        polycarbonate       = $("input[name='polycarbonate']:checked", this).val(),
        calculationPrice    = 0

    calculationPrice += DATA.priceList[brandName][arcType][lengthDevice][arcStep][polycarbonate]

    var calculatorPriceNew    = $(".price--new", this),
        calculatorPriceOld    = $(".catalog__card-price--old", this)

    $({ animateNumber: brandName }).animate({ animateNumber: calculationPrice }, {
      duration: 200, step: (brandName) => {
        calculatorPriceNew.text(Number(brandName).toFixed())
        calculatorPriceOld.text(Number(1.15 * brandName).toFixed())
      },
      complete: () => {
        calculatorPriceNew.data("animateFrom", Number(calculationPrice).toFixed())
      }
    })
  });
  $("form.calculator-greenhouses").change()
})
