 $(document).ready(function() {
   var homesl = 0; teesersl = 0; salesl = 0; intro = 6000; click = 0; tcsl = 0; liner = 0;
     

     

           $('#tel').click(function() {
                
                  $('#false').fadeOut(0);
                  $('#true').delay(1000).css('display' , 'block');
                 
             }); 
     
     $('.tel').click(function() {
                
                  $('.false').fadeOut(0);
                  $('.true').delay(1000).css('display' , 'block');
                 
             }); 
               
               
                    
     
     
     
     
           $('#w-liner').click(function() {
               
               if (liner == 0) {
               
               
                  $('#a-table-tx').addClass('liners');
                  $('#w-liner').removeClass('w-active');
                  liner = 1;
             
             }  else {
                 
                  $('#a-table-tx').removeClass('liners');
                  $('#w-liner').addClass('w-active');
                  liner = 0;   
                 
             }
               
               
               
               
          });     
     
     
     
     
     
     
$(function(){

$('#hamb-t').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('header').offset().top }, 1000);
  e.preventDefault();
});

});
     
     
     
     
     
  $(window).scroll(function() {
if ($(this).scrollTop() > (750)){  
    $('#hamb').fadeIn();

  }
  else{
    $('#hamb').fadeOut();

  }
      
      
if ($(this).scrollTop() > (800)){  
    $('#hamb-t').fadeIn();

  }
  else{
    $('#hamb-t').fadeOut();

  }
});   
     
     
     
           $('#hamb').click(function() {
            
              if ( click ==0 ) 
              {
             $('.hamburger--squeeze').addClass('is-active');
             $('#fade').fadeIn();
             $('#mbile-web').fadeIn();
             $('#hamb').addClass('close');
              click = 1;
              }
              
              else { if ( click == 1 )  {
                  
              {
               
             $('.hamburger--squeeze').removeClass('is-active');
             $('#fade').fadeOut();
             $('#mbile-web').fadeOut();
             $('#hamb').removeClass('close');
               click = 0;
              }    
                  
              }}

    


          });      
     
             $('#hamb-mobile').click(function() {
            
              if ( click ==0 ) 
              {
             $('.hamburger--squeeze').addClass('is-active');
             $('#fade').fadeIn();
             $('#mbile-web').fadeIn();
             $('#hamb').addClass('close'); 
              click = 1;
              }
              
              else { if ( click == 1 )  {
                  
              {
               
             $('.hamburger--squeeze').removeClass('is-active');
             $('#fade').fadeOut();
             $('#mbile-web').fadeOut();
             $('#hamb').removeClass('close');      
               click = 0;
              }    
                  
              }}

    


          });     
     
     
     
  var cycleTimer;

function startCycle() {
   cycleTimer = setInterval(function () {
      if (homesl == 0) 
                  {
     
                  $('#home-info2').fadeIn(300);
                  $('#home-info1').fadeOut(300);
                  $('a.n-r').addClass('active');
                  $('a.n-l').removeClass('active');
                  homesl = 1; 
                  } else { 
                  if (homesl == 1) 
                  {   
                  $('#home-info1').fadeIn(300);
                  $('#home-info2').fadeOut(300);
                  $('a.n-l').addClass('active');
                  $('a.n-r').removeClass('active');
                  homesl = 0;  }}
    
    
    
    
           if (teesersl == 0) {
           
           $('#teeser2').fadeIn(300);
           $('#teeser1').fadeOut(300);
           teesersl = 1;
           
       } else {
       if (teesersl == 1) {   
           $('#teeser3').fadeIn(300);
           $('#teeser2').fadeOut(300);
           teesersl = 2;
           } else{ if (teesersl == 2) {
               
           $('#teeser1').fadeIn(300);
           $('#teeser3').fadeOut(300);
           teesersl = 0;
               
               
        } }}
    
    
   }, 8000);
}

// start to automatically cycle slides
startCycle();
     
   
     
function stopCycle() {
   clearInterval(cycleTimer);
   startCycle();
}


     
     
          $('a.n-l').click(function() {
                  $('#home-info1').fadeIn(300);
                  $('#home-info2').fadeOut(300);
                  $('a.n-l').addClass('active');
                  $('a.n-r').removeClass('active');
                  homesl = 0;
                  stopCycle();
                  
          });   
               $('a.n-r').click(function() {
                  $('#home-info2').fadeIn(300);
                  $('#home-info1').fadeOut(300);
                  $('a.n-r').addClass('active');
                  $('a.n-l').removeClass('active');
                  homesl = 1;
                  stopCycle()
          });  
     
     
     
     



// слайдер рекламы на первой стр


   $('a.teeser-right').click(function() {
       

   
       
       if (teesersl == 0) {
           
           $('#teeser2').fadeIn(300);
           $('#teeser1').fadeOut(300);
           teesersl = 1;
           stopCycle();

       } else {
       if (teesersl == 1) {   
           $('#teeser3').fadeIn(300);
           $('#teeser2').fadeOut(300);
           teesersl = 2;
           stopCycle();

           } else{ if (teesersl == 2) {
               
           $('#teeser1').fadeIn(300);
           $('#teeser3').fadeOut(300);
           teesersl = 0;
           stopCycle();

               
        } }}}); 


   $('a.teeser-left').click(function() {
       
    stopCycle();
       
       if (teesersl == 0) {
           
           $('#teeser3').fadeIn(300);
           $('#teeser1').fadeOut(300);
           teesersl = 2;
           stopCycle();

       } else {
       if (teesersl == 1) {   
           $('#teeser1').fadeIn(300);
           $('#teeser2').fadeOut(300);
           teesersl = 0;
           stopCycle();

           } else{ if (teesersl == 2) {
               
           $('#teeser2').fadeIn(300);
           $('#teeser3').fadeOut(300);
           teesersl = 1;
           stopCycle();
   
               
               
        } }}}); 

// слайдер рекламы на первой стр

     
$('a.s-l').click(function() {
       

       
       if (salesl == 0) {
           
           $('#sale-3').fadeIn(1500);
           $('#sale-1').fadeOut(200);
           $('#sale-p1').removeClass('active');
           $('#sale-p3').addClass('active');
           salesl = 2;
           
           
       } else {
       if (salesl == 1) {   
           $('#sale-1').fadeIn(1500);
           $('#sale-2').fadeOut(200);
           $('#sale-p2').removeClass('active');
           $('#sale-p1').addClass('active');
           salesl = 0;

           } else{ if (salesl == 2) {
               
           $('#sale-2').fadeIn(1500);
           $('#sale-3').fadeOut(200);
           $('#sale-p3').removeClass('active');
           $('#sale-p2').addClass('active');
           salesl = 1;                
        } }}});     
     
   $('a.s-r').click(function() {
       

       
       if (salesl == 0) {
           
           $('#sale-2').fadeIn(1500);
           $('#sale-1').fadeOut(300);
           $('#sale-p1').removeClass('active');
           $('#sale-p2').addClass('active');
           salesl = 1;
           
       } else {
       if (salesl == 1) {   
           $('#sale-3').fadeIn(1500);
           $('#sale-2').fadeOut(300);
           $('#sale-p2').removeClass('active');
           $('#sale-p3').addClass('active');           
           salesl = 2;
           } else{ if (salesl == 2) {
               
           $('#sale-1').fadeIn(1500);
           $('#sale-3').fadeOut(300);
           $('#sale-p3').removeClass('active');
           $('#sale-p1').addClass('active');  
           salesl = 0;
  
               
        } }}});      
     
  
   $('#sale-p1').click(function() {
               
           $('#sale-1').fadeIn(1500);
           $('#sale-2').fadeOut(300);
           $('#sale-3').fadeOut(300);
           $('#sale-p3').removeClass('active');
           $('#sale-p2').removeClass('active');
           $('#sale-p1').addClass('active');
           salesl = 0;
           
                    
        } );     
     
   $('#sale-p2').click(function() {
               
           $('#sale-2').fadeIn(1500);
           $('#sale-1').fadeOut(300);
           $('#sale-3').fadeOut(300);
           $('#sale-p1').removeClass('active');
           $('#sale-p3').removeClass('active');
           $('#sale-p2').addClass('active');
           salesl = 1;
           
                    
        }); 
     
     
        $('#sale-p3').click(function() {
               
           $('#sale-3').fadeIn(1500);
           $('#sale-2').fadeOut(300);
           $('#sale-1').fadeOut(300);
           $('#sale-p1').removeClass('active');
           $('#sale-p2').removeClass('active');
           $('#sale-p3').addClass('active');
           salesl = 2;
           
                    
        } ); 
     
 

 
 



 
 
 
 
 });  


$(window).scroll(function () {
  var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();
        scrollPercent = (s / (d-c)) * 100;
        var position = scrollPercent;

   $("#progressbar").attr('value', position);

});
































