'use strict';

let buttonEl=document.querySelectorAll('.btn');
let userScoreEl = document.querySelector('.user-score');
let botScoreEl = document.querySelector('.bot-score');
let imageEl=document.querySelector('.image');
let imageDuplicateEl=document.querySelector('.imageDuplicate');
let rockActionEl= document.getElementById('rock-btn');
let paperActionEl= document.getElementById('paper-btn');
let scissorActionEl= document.getElementById('scissor-btn');
let actionBtnEl=document.querySelector('.action-btns');
let playBtnEl=document.getElementById('play-btn');
let userEl=document.querySelector('.user-container');
let botEl=document.querySelector('.bot-container');
let winMsgEl=document.querySelector('.message-win');
let loseMsgEl=document.querySelector('.message-lose');
let resetBtnEl=document.querySelector('.reset-btn');



let selection,botSelectedOption,userSelectedOption,userScore,botScore,playing,optionAvailable;

// Function to initialize Values

let init =function(){
playing=true
botScore=0
userScore=0
optionAvailable=['rock','paper','scissor'];
userScoreEl.textContent="0";
botScoreEl.textContent="0";
imageEl.classList.add('hidden');
imageDuplicateEl.classList.add('hidden');
actionBtnEl.classList.add('hidden');
winMsgEl.classList.add('hidden');
loseMsgEl.classList.add('hidden');
};

init();

// function to start the game 

playBtnEl.addEventListener('click',function(){
   playBtnEl.classList.add('hidden');
   actionBtnEl.classList.remove('hidden');
})


let botSelection=function(){

   // Generate a random number
   selection= Math.trunc(Math.random()*3);
   imageDuplicateEl.src=`./Imgs/option-${selection}.jpg`;
   imageDuplicateEl.classList.remove('hidden');
   botSelectedOption=optionAvailable[selection];
}


// Function to check who won the game

let check=function(){
 
   switch(userSelectedOption+botSelectedOption){
      case "rockscissor":
      case "paperrock":
      case "scissorpaper":
         userScore+=1;
         userScoreEl.textContent=userScore;
         break;

         case "scissorrock":
         case "rockpaper":
         case "paperscissor":
            botScore+=1;
            botScoreEl.textContent=botScore;
            break;

         case "scissorscissor":
         case "rockrock":
         case "paperpaper":
            break;
            default:
               console.log("Hmmm! some thing went wrong");
   }
}

//Rock Button Option

rockActionEl.addEventListener('click',function(){  
if(playing){
   botSelection();
   userSelectedOption="rock"
   imageEl.src=`./Imgs/option-0.jpg`; 
   imageEl.classList.remove('hidden');
   check();
   limit();   
}
});



//Paper Button Option

paperActionEl.addEventListener('click',function(){
   if(playing){
   botSelection();
   userSelectedOption="paper"
   imageEl.src=`./Imgs/option-1.jpg`; 
   imageEl.classList.remove('hidden');  
   check();
   limit();   
}
});




//Scissor Button Option

scissorActionEl.addEventListener('click',function(){
   if(playing){
   botSelection();
   userSelectedOption="scissor"
   imageEl.src=`./Imgs/option-2.jpg`; 
   imageEl.classList.remove('hidden');  
   check();
   limit();   
}
});



// Function to declare the winner

let limit=function(){
   if(userScore===5){
     userEl.classList.add('winner');
     winMsgEl.classList.remove('hidden');
     playing=false;

   }else if(botScore===5){
      botEl.classList.add('winner');
      loseMsgEl.classList.remove('hidden');
      playing=false;

   }
}

// Function to reset the game

resetBtnEl.addEventListener('click',function(){
   userEl.classList.remove('winner');
   botEl.classList.remove('winner');
   playBtnEl.classList.toggle('hidden');
   init();
})




