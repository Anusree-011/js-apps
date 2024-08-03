const box1=document.getElementById("box1");
const box2=document.getElementById("box2");
const btn=document.getElementById("btn");
const text=document.getElementById("text")
// let num;
// let num2;
btn.addEventListener("click",getanswer)                      
 function getanswer(){
    let num=document.getElementById("box1").value ;
    let num2=document.getElementById("box2").value;
    let result=parseInt(num)+parseInt(num2);

text.innerHTML=result;
 }
//  let a=1;
//  let b=2;
//  let c=a+b;


