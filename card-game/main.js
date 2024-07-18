 let firstone=3
 let secondone=4
 let sum=firstone+secondone
let mesage=""
let msgEl=document.getElementById("message")
 let cardEl=document.getElementById("card-El")
 let sumEl=document.getElementById("sum-El")
 
  function startGame(){
    sumEl.textContent="Sum:" + sum;
     cardEl.textContent= "cards:"+ firstone + " " + secondone
    if(sum<21){
        mesage=("do you want to draw a card")
     }

 else if(sum===21){
     mesage=("Wohoo!you've got black card")
 }
 else if(sum>21){
    mesage=("you are out of game")
 }

 msgEl.textContent=mesage
  }

 let firstcard=8
let secondcard=13
let sums=firstcard+secondcard
let message=""


 
 function newcard(){
    sumEl.textContent="Sum:" + sums;
     cardEl.textContent= "cards:"+ firstcard + " " + secondcard
    console.log("select new card")
    if(sums<21){
        message=("do you want to draw a card")
    }

else if(sums===21){
    message=("Wohoo!you've got black card")
}
else if(sums>21){
    message=("you are out of game")
}

msgEl.textContent=message
 }