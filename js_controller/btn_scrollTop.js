$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.scroll-to-top').addClass('show');
    } else {
      $('.scroll-to-top').removeClass('show');
    }
  });
  
  $('.scroll-to-top').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 500);
  });
  