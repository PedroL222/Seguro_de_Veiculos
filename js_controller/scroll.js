$('nav a').click(function(e) {
    e.preventDefault();
    let id = $(this).attr('href');
    let targetOffset = $(id).offset();
  
    if ($(window).width() <= 992) {
      let menuHeight = 60.872;
  
      $('html, body').animate({
        scrollTop: targetOffset.top - menuHeight
      }, 500);
    } else {
      $('html, body').animate({
        scrollTop: targetOffset.top - $('#navBar').innerHeight()
      }, 300);
    }
  });