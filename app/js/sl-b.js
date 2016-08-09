 $(document).ready(function() {
   var  tcsl = 0; tcsl2 = 0; tcsl3 = 0; tcsl4 = 0; tcsl5 = 0; tcsl6 = 0;
     
     
// слайдер в блоке тц

     $("#tc1").hover(
  function () {
    $('#slider1').fadeIn();
    $('#abs1').fadeIn();   
    // start to automatically cycle slides

      
  },
  function () {
    $('#slider1').fadeOut();
    $('#abs1').fadeOut();

  }
);  
 
     $("#tc2").hover(
  function () {
    $('#slider2').fadeIn();
    $('#abs2-ph1').fadeIn();   
    // start to automatically cycle slides

      
  },
  function () {
    $('#slider2').fadeOut();
    $('#abs2').fadeOut();

  }
);  
 
     $("#tc3").hover(
  function () {
    $('#slider3').fadeIn();
    $('#ab3-ph1').fadeIn();   
    // start to automatically cycle slides

      
  },
  function () {
    $('#slider3').fadeOut();
    $('#abs3').fadeOut();

  }
);  
   
     
 
     $("#tc4").hover(
  function () {
    $('#slider4').fadeIn();
    $('#ab4-ph1').fadeIn();   
    // start to automatically cycle slides

      
  },
  function () {
    $('#slider4').fadeOut();
    $('#abs4').fadeOut();

  }
);  
        
  
     $("#tc5").hover(
  function () {
    $('#slider5').fadeIn();
    $('#ab5-ph1').fadeIn();   
    // start to automatically cycle slides

      
  },
  function () {
    $('#slider5').fadeOut();
    $('#abs5').fadeOut();

  }
);  
        
      $("#tc6").hover(
  function () {
    $('#slider6').fadeIn();
    $('#ab6-ph1').fadeIn();   
    // start to automatically cycle slides

      
  },
  function () {
    $('#slider6').fadeOut();
    $('#abs6').fadeOut();

  }
);      
    
     
    // You can also use "$(window).load(function() {"
    $(function () {

      // Slideshow 1
      $("#slider1").responsiveSlides({
        maxwidth: 800,
        speed: 1200
      });

      // Slideshow 2
      $("#slider2").responsiveSlides({
        maxwidth: 800,
        speed: 1200
      });

      // Slideshow 3
      $("#slider3").responsiveSlides({
        maxwidth: 800,
        speed: 1200
      });

      // Slideshow 4
      $("#slider4").responsiveSlides({
        maxwidth: 800,
        speed: 1200
      }); 
        
      // Slideshow 4
      $("#slider5").responsiveSlides({
        maxwidth: 800,
        speed: 1200
      });
        
      // Slideshow 4
      $("#slider6").responsiveSlides({
        maxwidth: 800,
        speed: 1200
      });

    });     
     
});
     
    