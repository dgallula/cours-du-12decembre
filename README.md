# cours-du-12decembre

 <!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>replit</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
    <script 
    src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js"></script>
    <script src="script.js"></script>
  </head>
  <body id="lightMode">
 <button  id="toggle-background-button">toggle background ! </button>

    <h1>welcome</h1>
    <p id="first"> hello with id </p>
    <p>hello with p </p>
    <p class="cool1">hello with class</p>
     <p class="cool2">hello with class</p>
    <p> hello with p </p>
    <button  id="hide-button">hide hello id ! </button>
    <button  id="show-button">show hello id  ! </button>
    <button  id="toggle-button">toggle hello id  ! </button>
    <button  id="fadeIn-button">fadeIn hello id  ! </button>
    <button  id="fadeOut-button">fadeOut hello id  ! </button>
    <br><br>

 <button  id="toggle-color-button">toggle color ! </button>

 <div  class="squaresContainer">
    <div>
        <div class=" square greenSquare">g</div>
        <div class=" square redSquare">r</div>
    </div> 
     <div>
        <div class=" square redSquare">r</div>
        <div class="square greenSquare">g</div>

    </div>   

  </body>
</html>

.darkMode {
    background-color: grey
  }
  
  .lightMode {
   background-color: black
  }
  
    .squaresContainer { 
     height: 600px;
     width: 600px;
     display: flex;
   }
  
  .greenSquare {
    background-color:green;
  }
  
  .redSquare {
    background-color: red;
  }
   
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
    
    
    
