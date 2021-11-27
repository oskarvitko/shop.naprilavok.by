$(document).ready(function () {
  $("form.calculator-greenhouses").change(function () {
    var brandName           = $("input[name='product']", this).val(),
        arcType             = $("input[name='arc_type']:checked", this).val(),
        lengthDevice        = $("input[name='length']:checked", this).val(),
        arcStep             = $("input[name='arc_step']:checked", this).val(),
        polycarbonate       = $("input[name='polycarbonate']:checked", this).val(),
        // addEquipment     = $("input[name='additional[]']:checked", this),
        calculationPrice    = 0;

    console.log({brandName});
    console.log(calculatorDATA.products[brandName]);
    console.log(calculatorDATA.products[brandName][arcType]);
    
    
    // calculationPrice += calculatorDATA.products.brandName.arcType.polycarbonate.arcStep.lengthDevice
    calculationPrice += calculatorDATA.products[brandName][arcType][lengthDevice][arcStep][polycarbonate]

    // addEquipment.each(function (calculatorPriceNew, brandName) {
    //   calculationPrice += calculatorDATA.additional[$(brandName).val()]
    // });

    var priceContainer        = $(".catalog__card-price", this),
        calculatorPriceNew    = $(".price--new", this),
        calculatorPriceOld    = $(".catalog__card-price--old", this)
    
    priceContainer.addClass("animated faster pulse")
    priceContainer.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
      priceContainer.removeClass("animated faster pulse")
    });

    brandName = 0 < calculatorPriceNew.data("animateFrom") ? calculatorPriceNew.data("animateFrom") : 0;

    $({ animateNumber: brandName }).animate({ animateNumber: calculationPrice }, {
      duration: 800, step: function (brandName) {
        calculatorPriceNew.text(Number(brandName).toFixed())

        calculatorPriceOld.text(Number(1.15 * brandName).toFixed())
      },
      complete: function () {
        calculatorPriceNew.data("animateFrom", Number(calculationPrice).toFixed())
      }
    })
  });
  $("form.calculator-greenhouses").change()
});