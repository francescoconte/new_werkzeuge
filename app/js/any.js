 $(document).ready(function() {
   var bigMenu1 = 0; bigMenu2 = 0; subMenu1 = 0; subMenu2 = 0; subMenu3 = 0;
   var urlImage; 
     
    
     
          $('#sub-t1').click(function() {
              
          if (subMenu1 == 0) {
          $('#sub-b1').fadeOut(0);
          $('#sub1 i').css('transform' , 'rotate(0deg)');
          subMenu1 = 1;
          }   else {
                           
          $('#sub-b1').fadeIn(0);
          $('#sub1 i').css('transform' , 'rotate(180deg)');
          subMenu1 = 0;
                        }     
             }); 
     
          $('#sub-t2').click(function() {
              
          if (subMenu2 == 0) {
          $('#sub-b2').fadeOut(0);
          $('#sub2 i').css('transform' , 'rotate(0deg)');
          subMenu2 = 1;
          }   else {
                           
          $('#sub-b2').fadeIn(0);
          $('#sub2 i').css('transform' , 'rotate(180deg)');
          subMenu2 = 0;
                        }     
             }); 
          
          $('#sub-t3').click(function() {
              
          if (subMenu3 == 0) {
          $('#sub-b3').fadeOut(0);
          $('#sub3 i').css('transform' , 'rotate(0deg)');
          subMenu3 = 1;
          }   else {
                           
          $('#sub-b3').fadeIn(0);
          $('#sub3 i').css('transform' , 'rotate(180deg)');
          subMenu3 = 0;
                        }     
             }); 
     
     
     
     
     
     
     
          $('#big1').click(function() {
              
          if (bigMenu1 == 0) {
          $('#sub1').fadeOut(0);
          $('#sub2').fadeOut(0);
          $('#sub3').fadeOut(0);
          bigMenu1 = 1;
          }   else {
                           
          $('#sub1').fadeIn(0);
          $('#sub2').fadeIn(0);
          $('#sub3').fadeIn(0); 
          bigMenu1 = 0;
                        }     
             }); 
     
    
          $('#big2').click(function() {
              
          if (bigMenu2 == 0) {
          $('#sub4').fadeOut(0);
          $('.sub--akciii-ico i').css('transform' , 'rotate(0deg)');
          bigMenu2 = 1;
          
          }   else {
                           
          $('#sub4').fadeIn(0);
          $('.sub--akciii-ico i').css('transform' , 'rotate(180deg)');
          bigMenu2 = 0;
                        }     
             }); 
     

            $('#slide-min1').click(function() {
                  urlImage = $("#slide-min1").data('fooBar');
                  $('#slide').css('background-image' , urlImage);   
             }); 
  
           $('#slide-min2').click(function() {
                  urlImage = $("#slide-min2").data('fooBar');
                  $('#slide').css('background-image' , urlImage);   
             }); 
  
           $('#slide-min3').click(function() {
                  urlImage = $("#slide-min3").data('fooBar');
                  $('#slide').css('background-image' , urlImage);   
             }); 
  
           $('#slide-min4').click(function() {
                  urlImage = $("#slide-min4").data('fooBar');
                  $('#slide').css('background-image' , urlImage);   
             });     
     

});
































