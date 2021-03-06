class Quiz {
  constructor(){
    
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.input1.hide();
    question.input2.hide();
    question.button.hide();
    question.title.hide();
    question.option1.hide();
    question.option2.hide();
    question.option3.hide();
    question.option4.hide();
    question.question.hide();

    //write code to change the background color here
    background("yellow");

    //write code to show a heading for showing the result of Quiz
    

    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();

    //write condition to check if contestantInfor is not undefined
    if(allContestants !== undefined){

     var display_position = 130;

     fill("Blue");
     textSize(20);
     //write code to add a note here
     text("*NOTE: Contestant who answered correcy are highlighted in green colour!",130,230)
     for(var plr in allContestants){
      var correctAns = "2";
      if(correctAns === allContestants[plr].answer)
          fill("Green");
      else
          fill("red");
          
          display_position += 20;
          textSize(15);
          text(allContestants[plr].name + ": " + allContestants[plr].answer, 120,display_position)
     }
     }

    //write code to highlight contest who answered correctly
    
  }

}
