$(document).ready(function() {

  var magic8Ball = {};
    magic8Ball.answerList = ["No :(" , "Yes :)" , "Of Course!!!" , "In your dreams :p" , "I don't know :|" ,  "Try again..."];

    $("#answer").hide();

    magic8Ball.askQuestion = function(question) {
      $("#8ball").effect("shake");
  
      $("#8ball").attr("src", "./resources/magic8ballAnswer.png" );
  
      $("#answer").fadeIn(4000);
  
      var randomNumber = Math.random();
  
      var randomNumberForAnswer = randomNumber * this.answerList.length;
  
      var randomIndex = Math.floor(randomNumberForAnswer);
  
      var answer = this.answerList[randomIndex];
  
      $("#answer").text(answer);
  
      console.log(question);
      console.log(answer);
    };
  
    var onClick = function() {
  
      $("#answer").hide();
  
      $("#8ball").attr("src","./resources/magic8ballQuestion.png");
  
  
      setTimeout(function(){
        var question = prompt("ASK A YES/NO QUESTION!");
        magic8Ball.askQuestion(question);
      }, 500);
  
  
    };
  
    $("#questionButton").click(onClick);
  
  });
  