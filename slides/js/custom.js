function screenulator(){
  $('screenulator').html('<div class="screen small"><div class="c1"></div><div class="c2"></div><div class="c3"></div></div>')
  var interval = setInterval(function(){
    var screen = $('screenulator .screen');
    if (screen.hasClass('small')){
      screen.removeClass('small').addClass('medium');
    } else if (screen.hasClass('medium')){
      screen.removeClass('medium').addClass('large');
    } else if (screen.hasClass('large')){
      screen.removeClass('large').addClass('small');
    }
  }, 3000);
}

$(function(){
  screenulator();
})