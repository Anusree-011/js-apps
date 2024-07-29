let btn=document.getElementById("btn");
let body=document.querySelector("body")
const clr=["red","black","blue","violet"]

btn=document.addEventListener("click",function(){
  

    let random=Math.floor(Math.random()*clr.length)
    body.style.backgroundColor=clr[random];
})