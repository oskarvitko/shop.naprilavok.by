$(document).ready(function () {
  // Маска ввода номера телефона:
  $('input[type="tel"]').mask("+375 (99) 999-99-99", { placeholder: " " });
  // Установка курсора в нужное место для ввода номера телефона
  $.fn.setCursorPosition = function (pos) {
    if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };
  $('input[type="tel"]').click(function () {
    $(this).setCursorPosition(6);  // set position number
  });

});