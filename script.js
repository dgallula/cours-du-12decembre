$(document).ready(function(){

    // hide p
      $("p").click(function(){
        $(this).hide();
      });
    
    // hide with button 
      $("#hide-button").click(function(){
        alert("hide")
        $("#first").hide(1000);
      });
    
    // show with button 
      $("#show-button").click(function(){
        alert("show")
        $("#first").show();
      });
    
      // toggle with button 
      $("#toggle-button").click(function(){
        alert("toggle")
        $("#first").toggle();
      });
    
      // fadeIn with button 
      $("#fadeIn-button").click(function(){
        alert("fadeIn")
        $("#first").fadeIn();
      });

      
       // fadeOut with button 
       $("#fadeOut-button").click(function(){
        alert("fadeOut")
        $("#first").fadeout();
      });

      
       // toggle with button toggle background
       $("#toggle-background-button").click(function(){
        alert("toggle color")
        $("body").toggleClass("darkMode");
      });
    


    
      //  // animation with button 
      // $("#animation-button").click(function(){
      //   alert("animations")
      //    $(".animation1").animate({left: '250px'})
      // });
    
      // toggle with button color 
        $("#toggle-color-button").click(function(){
        alert("square")
        $("square").toggleClass("greenSquare");
        $("square").toggleClass("redSquare");
        });
    
    
    
    
        
      
    
    });
    
    
    
    
      