let firstone=6
let secondone=30
let sum = firstone+secondone;
let message=""
let messaage=document.getElementById("message")
console.log(messaage)

function startGame () {
    if(sum<21){
        message=("do you want to draw a card")
    }
    else if(sum===21){
        message=("Wohoo!you've got black card")
    }
    else if(sum>21){
        message=("you are out of game")
    }
    messaage.textContent=message
}




