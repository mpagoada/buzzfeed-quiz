/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var finalAnswer = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore = questionOne(q1Result) + questionTwo(q2Result) + questionThree(q3Result);
        $(".result").text(answer(totalScore));
    });
        
    function questionOne(q1Result){
        if (q1Result === "Bloomingdales"){
            return 1;
        }
        else if (q1Result === "Topshop"){
            return 2;
        }
        else if (q1Result === "Zara"){
            return 3;
        }
        else if (q1Result === "L Train Vintage"){
            return 4;
        }
    }
    
    function questionTwo(q2Result){
        if (q2Result === "Manhattan"){
            return 1;
        }
        else if (q2Result === "Queens"){
            return 2;
        }
        else if (q2Result === "Brooklyn"){
            return 3;
        }
    }
    
    function questionThree(q3Result){
        if (q3Result === "Puppy"){
            return 1;
        }
        else if (q3Result === "Kitty"){
            return 2;
        }
        else if (q3Result === "Bunny") {
            return 3;
        }  
        else if (q3Result === "Bird") {
            return 4;
        }
    }
    
  function answer(totalScore){
      if (totalScore <= 4){
          return "Blair Waldorf";
          
      }
      
     else if (totalScore >4 && totalScore <=  6){
          return "Serena Van der Woodsen";
     }
     
     else if(totalScore> 6){
        return "Dan Humphrey";
     }
          
      
  }

function congrats() {
    $(".result").text("Hey," + " " + name + " " + "" );
}

});


