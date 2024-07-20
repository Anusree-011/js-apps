const roll=document.getElementById("roll");
const label=document.getElementById("mylabel1");
// let label2=document.getElementById("label2");
// let label3=document.getElementById("label3");
const min=2;
const max=6;
let randomNumber1;
// let randomNumber2;
// let randomNumber3;

roll.onclick=function(){
randomNumber1 = Math.floor(Math.random()* max)+ min;
label.textContent = randomNumber1;
// randomNumber2=Math.floor(Math.random()* max)+ min;
// randomNumber3=Math.floor(Math.random()* max)+ min;
// label1.textContent=randomNumber1;
// label2.textContent=randomNumber2;
// label3.textContent=randomNumber3;

}
