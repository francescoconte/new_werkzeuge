
$(window).scroll(function() {
if ($(this).scrollTop() > (350)){  
    $('div.fix-menu').fadeIn(1000);

  }
  else{
    $('div.fix-menu').fadeOut(300)

  }
});


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




});


     $(document).ready(function() {
        var click1 = 0;
        $('#ch1').click(function() {
                $('#post15').css('opacity' , '1');
                $('#post14').css('opacity' , '0');
                $('#post13').css('opacity' , '0');
                $('#post12').css('opacity' , '0');
                $('#post10').css('opacity' , '0');
                $('#post9').css('opacity' , '0');
                $('#post8').css('opacity' , '0');
                $('#post7').css('opacity' , '0');
                $('#post6').css('opacity' , '0');
                $('#post5').css('opacity' , '0');
                $('#post4').css('opacity' , '0');
                $('#post3').css('opacity' , '0');
                $('#post2').css('opacity' , '0');
                $('#post1').css('opacity' , '1');
          

        });
 
        $('#ch2').click(function() {
                $('#post15').css('opacity' , '1');
                $('#post14').css('opacity' , '0');
                $('#post13').css('opacity' , '0');
                $('#post12').css('opacity' , '0');
                $('#post11').css('opacity' , '0');
                $('#post10').css('opacity' , '0');
                $('#post8').css('opacity' , '0');
                $('#post7').css('opacity' , '0');        
                $('#post6').css('opacity' , '0');
                $('#post5').css('opacity' , '0');
                $('#post4').css('opacity' , '0');
                $('#post3').css('opacity' , '0');
                $('#post1').css('opacity' , '0');
                $('#post2').css('opacity' , '1');
                


        });
         
         
                $('#ch3').click(function() {
                $('#post15').css('opacity' , '1');
                $('#post14').css('opacity' , '0');
                $('#post13').css('opacity' , '0');    
                $('#post12').css('opacity' , '0');
                $('#post11').css('opacity' , '0');
                $('#post10').css('opacity' , '0');
                $('#post8').css('opacity' , '0');
                $('#post7').css('opacity' , '0');
                $('#post6').css('opacity' , '0');
                $('#post5').css('opacity' , '0');
                $('#post4').css('opacity' , '0');
                $('#post1').css('opacity' , '0');
                $('#post2').css('opacity' , '0');
                $('#post3').css('opacity' , '1');
                


        });
         
         
                $('#ch4').click(function() {
                $('#post15').css('opacity' , '1');
                $('#post14').css('opacity' , '0');
                $('#post13').css('opacity' , '0');    
                $('#post12').css('opacity' , '0');
                $('#post10').css('opacity' , '0');
                $('#post9').css('opacity' , '0');
                $('#post8').css('opacity' , '0');
                $('#post7').css('opacity' , '0');
                $('#post6').css('opacity' , '0');
                $('#post5').css('opacity' , '0');
                $('#post1').css('opacity' , '0');
                $('#post2').css('opacity' , '0');
                $('#post3').css('opacity' , '0');
                $('#post4').css('opacity' , '1');           
                


        });
         
                $('#ch5').click(function() {
                $('#post15').css('opacity' , '1');
                $('#post14').css('opacity' , '0');
                $('#post13').css('opacity' , '0');    
                $('#post12').css('opacity' , '0');
                $('#post11').css('opacity' , '0');
                $('#post10').css('opacity' , '0');
                $('#post9').css('opacity' , '0');
                $('#post8').css('opacity' , '0');
                $('#post7').css('opacity' , '0');
                $('#post6').css('opacity' , '0');
                $('#post1').css('opacity' , '0');
                $('#post2').css('opacity' , '0');
                $('#post3').css('opacity' , '0');
                $('#post4').css('opacity' , '0');  
                $('#post5').css('opacity' , '1');
                


        });
         
         
                $('#ch6').click(function() {
                $('#post15').css('opacity' , '1');
                $('#post14').css('opacity' , '0');
                $('#post13').css('opacity' , '0');
                $('#post12').css('opacity' , '0');
                $('#post11').css('opacity' , '0');
                $('#post10').css('opacity' , '0');
                $('#post8').css('opacity' , '0');
                $('#post7').css('opacity' , '0');
                $('#post1').css('opacity' , '0');
                $('#post2').css('opacity' , '0');
                $('#post3').css('opacity' , '0');
                $('#post4').css('opacity' , '0');  
                $('#post5').css('opacity' , '0');
                $('#post6').css('opacity' , '1');
                


        });
        
                $('#ch7').click(function() {
                $('#post15').css('opacity' , '1');
                $('#post14').css('opacity' , '0');
                $('#post13').css('opacity' , '0');
                $('#post12').css('opacity' , '0');
                $('#post11').css('opacity' , '0');
                $('#post10').css('opacity' , '0');
                $('#post9').css('opacity' , '0');
                $('#post8').css('opacity' , '0');
                $('#post1').css('opacity' , '0');
                $('#post2').css('opacity' , '0');
                $('#post3').css('opacity' , '0');
                $('#post4').css('opacity' , '0');  
                $('#post5').css('opacity' , '0');
                $('#post6').css('opacity' , '0');
                $('#post7').css('opacity' , '1');
                


        });
         
                $('#ch8').click(function() {
                $('#post15').css('opacity' , '1');
                $('#post14').css('opacity' , '0');
                $('#post13').css('opacity' , '0');
                $('#post12').css('opacity' , '0');
                $('#post11').css('opacity' , '0');
                $('#post10').css('opacity' , '0');
                $('#post9').css('opacity' , '0');
                $('#post1').css('opacity' , '0');
                $('#post2').css('opacity' , '0');
                $('#post3').css('opacity' , '0');
                $('#post4').css('opacity' , '0');  
                $('#post5').css('opacity' , '0');
                $('#post6').css('opacity' , '0');
                $('#post7').css('opacity' , '0');
                $('#post8').css('opacity' , '1');
                


        });
         
         
                         $('#ch9').click(function() {
                $('#post15').css('opacity' , '1');
                $('#post14').css('opacity' , '0');
                $('#post13').css('opacity' , '0');
                $('#post12').css('opacity' , '0');
                $('#post11').css('opacity' , '0');
                $('#post10').css('opacity' , '0');
                $('#post1').css('opacity' , '0');
                $('#post2').css('opacity' , '0');
                $('#post3').css('opacity' , '0');
                $('#post4').css('opacity' , '0');  
                $('#post5').css('opacity' , '0');
                $('#post6').css('opacity' , '0');
                $('#post7').css('opacity' , '0');
                $('#post8').css('opacity' , '0');
                $('#post9').css('opacity' , '1');


        });
         
         
                                  $('#ch10').click(function() {
                $('#post15').css('opacity' , '1');
                $('#post14').css('opacity' , '0');
                $('#post13').css('opacity' , '0');
                $('#post12').css('opacity' , '0');
                $('#post11').css('opacity' , '0');
                $('#post1').css('opacity' , '0');
                $('#post2').css('opacity' , '0');
                $('#post3').css('opacity' , '0');
                $('#post4').css('opacity' , '0');  
                $('#post5').css('opacity' , '0');
                $('#post6').css('opacity' , '0');
                $('#post7').css('opacity' , '0');
                $('#post8').css('opacity' , '0');
                $('#post9').css('opacity' , '0');
                $('#post10').css('opacity' , '1');


        });
         
                                  $('#ch11').click(function() { 
                $('#post15').css('opacity' , '1');
                $('#post14').css('opacity' , '0');
                $('#post13').css('opacity' , '0');
                $('#post12').css('opacity' , '0');                      
                $('#post1').css('opacity' , '0');
                $('#post2').css('opacity' , '0');
                $('#post3').css('opacity' , '0');
                $('#post4').css('opacity' , '0');  
                $('#post5').css('opacity' , '0');
                $('#post6').css('opacity' , '0');
                $('#post7').css('opacity' , '0');
                $('#post8').css('opacity' , '0');
                $('#post9').css('opacity' , '0');
                $('#post10').css('opacity' , '0');
                $('#post11').css('opacity' , '1');


        });
         
         
                                  $('a#ch12').click(function() { 
                $('#post15').css('opacity' , '1');
                $('#post14').css('opacity' , '0');
                $('#post13').css('opacity' , '0');
                $('#post1').css('opacity' , '0');
                $('#post2').css('opacity' , '0');
                $('#post3').css('opacity' , '0');
                $('#post4').css('opacity' , '0');  
                $('#post5').css('opacity' , '0');
                $('#post6').css('opacity' , '0');
                $('#post7').css('opacity' , '0');
                $('#post8').css('opacity' , '0');
                $('#post9').css('opacity' , '0');
                $('#post10').css('opacity' , '0');
                $('#post11').css('opacity' , '0');
                $('#post12').css('opacity' , '1');                    


        });
         
         
                                  $('a#ch13').click(function() {
                $('#post15').css('opacity' , '1');
                $('#post14').css('opacity' , '0');
                $('#post1').css('opacity' , '0');
                $('#post2').css('opacity' , '0');
                $('#post3').css('opacity' , '0');
                $('#post4').css('opacity' , '0');  
                $('#post5').css('opacity' , '0');
                $('#post6').css('opacity' , '0');
                $('#post7').css('opacity' , '0');
                $('#post8').css('opacity' , '0');
                $('#post9').css('opacity' , '0');
                $('#post10').css('opacity' , '0');
                $('#post11').css('opacity' , '0');
                $('#post12').css('opacity' , '0'); 
                $('#post13').css('opacity' , '1'); 


        });
         
         
         
                                  $('a#ch14').click(function() { 
                $('#post15').css('opacity' , '0');
                $('#post1').css('opacity' , '0');
                $('#post2').css('opacity' , '0');
                $('#post3').css('opacity' , '0');
                $('#post4').css('opacity' , '0');  
                $('#post5').css('opacity' , '0');
                $('#post6').css('opacity' , '0');
                $('#post7').css('opacity' , '0');
                $('#post8').css('opacity' , '0');
                $('#post9').css('opacity' , '0');
                $('#post10').css('opacity' , '0');
                $('#post11').css('opacity' , '0');
                $('#post12').css('opacity' , '0'); 
                $('#post13').css('opacity' , '0'); 
                $('#post14').css('opacity' , '1');


        });         
         
                                  $('a#ch15').click(function() {               
                $('#post1').css('opacity' , '0');
                $('#post2').css('opacity' , '0');
                $('#post3').css('opacity' , '0');
                $('#post4').css('opacity' , '0');  
                $('#post5').css('opacity' , '0');
                $('#post6').css('opacity' , '0');
                $('#post7').css('opacity' , '0');
                $('#post8').css('opacity' , '0');
                $('#post9').css('opacity' , '0');
                $('#post10').css('opacity' , '0');
                $('#post11').css('opacity' , '0');
                $('#post12').css('opacity' , '0'); 
                $('#post13').css('opacity' , '0'); 
                $('#post14').css('opacity' , '0');
                $('#post15').css('opacity' , '1');


        });
         
         
         
         


   });