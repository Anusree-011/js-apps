let firstone=3
let secondone=4
let sum=firstone+secondone
let mesage=""
let msgEl=document.getElementById("message")
 function startGame(){
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