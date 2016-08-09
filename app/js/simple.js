$(function(){
  var parent = document.getElementsByClassName('paralax')[0];
  var items = document.getElementsByClassName('paralax__item');
  var center = {
      x: parent.offsetWidth / 2,
      y: parent.offsetHeight / 2
  }
  parent.onmousemove = function(event) {
      
      for (var i = 0; i < items.length; i++) {
        items[i].setAttribute('style', 'transform: translate3d(' +
          Math.round((center.x - event.pageX)/20) +'px, ' +
          Math.round((center.y - event.pageY)/20) + 'px, 0) scale(1.1); ');
      }   
  }


  $('.comics').owlCarousel({
    loop:true,
    nav:true,
    items: 2
  });
  
 $('#children').owlCarousel({
    loop:true,
    nav:true,
    items: 3
  });


  var $fixedHeader = $('#page-header');
  // var h = $(window).height();
  var h = 700;

  // var anim = $('.screen--fourth');
  // var animOffset = anim.offset().top;
  // var animH = anim.height();
  
  $(document).on('scroll', function(){
    if($(this).scrollTop() > h) {
      $fixedHeader.addClass('fixed')
    } else {
      $fixedHeader.removeClass('fixed')
    }
    // if(($(this).scrollTop() > animOffset - animH) && ($(this).scrollTop() < animOffset + animH)) {
    //   anim.addClass('anim');
    // } else {
    //   anim.removeClass('anim');
    // }
  });



  


  $('.js-modal').on('click', function(e){
    e.preventDefault();
    $('body').toggleClass('fixed');
    $('.modal-ctn').toggleClass('open');
  });









});

$(window).load(function() {
  $('#carousel_characters').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 146,
    itemMargin: 40,
    // move: 1,


    asNavFor: '#slider_characters'
  });
 
  $('#slider_characters').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel_characters"
  });


  $('#carousel_characters .flex-direction-nav .flex-next').click(function(){
    console.log('click #carousel_characters .flex-next');
    $('#slider_characters .flex-direction-nav .flex-next').click();

  });
  $('#carousel_characters .flex-direction-nav .flex-prev').click(function(){
    console.log('click #carousel_characters .flex-prev');
    $('#slider_characters .flex-direction-nav .flex-prev').click();

  });

  $(".btn_scroll_anchor").click(function() {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top - 0 + "px"
      }, {
      duration: 700
    });
    return false;
  });




  // var slider_characters = $("#slider_characters");
  // var carousel_characters = $("#carousel_characters");

  // Custom Navigation Events
  // $("#carousel_characters .flex-direction-nav .flex-next").click(function(){
  //   slider_characters.trigger('#slider_characters .flex-direction-nav .flex-next');
  // })


  // $('#carousel_characters .flex-direction-nav .flex-prev').click(function(event){
  //   $('#slider_characters .flex-direction-nav a.flex-prev').click();
  // });

});