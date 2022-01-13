let randomNumber;
let computerChoice;
let userChoice;
$(".play").click(function(){
  let userChoice = $(".input").val();
//  if (!userChoice === "rock" || !userChoice === "paper" || !userChoice === "scissors"){}
  randomNumber = (Math.random() * 3);
  
if (randomNumber<1)
  {
    computerChoice = "rock";
  }
else if (randomNumber<2) {
  computerChoice = "paper";
}
  
else {computerChoice = "scissors";}
  $(".computerChoice").text(computerChoice);   
  $(".userChoice").text(userChoice);  
  
  
  
  if (computerChoice === userChoice){
      $(".result").text("Tie");
    }
  
   if (userChoice === "rock" && computerChoice === "paper") {
  $(".result").text("paper wins");
   }
  
  
  
     if (userChoice === "paper" && computerChoice === "rock") {
  $(".result").text("paper wins");
     }
  
  
  
     if (userChoice === "rock" && computerChoice === "scissors") {
  $(".result").text("rock wins");
     }
  
     if (userChoice === "scissors" && computerChoice === "rock") {
  $(".result").text("rock wins");
     }
  
  
     if (userChoice === "scissors" && computerChoice === "paper") {
  $(".result").text("scissors wins");
     }
  
    if (userChoice === "paper" && computerChoice === "scissors") {
  $(".result").text("scissors wins");
                                                                 }
}