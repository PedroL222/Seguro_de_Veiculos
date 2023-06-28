$('nav a').click(function(e){
    e.preventDefault();
    let menuHeight = $('nav').innerHeight();
    let id = $(this).attr('href'),
    targetOffset = $(id).offset();
    $('html, body').animate({
        scrollTop: targetOffset.top - menuHeight
    }, 500);
})