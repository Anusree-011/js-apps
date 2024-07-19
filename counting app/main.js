let heading=document.getElementById("text");
let saveEl=document.getElementById("save-El");
// let incrementBtn=document.getElementById("incrementBtn")
// let decrementBtn=document.getElementById("decrementBtn")
// let resetBtn=document.getElementById("resetBtn")

let count=0;

function increment(){
    count++;
    heading.innerText=count;
}
function decrement(){
    count--;
    heading.innerText=count;
}
function reset(){
    count=0;
    heading.innerText=count;
}
function save(){
    let totalCount=  count +"-" ;
    saveEl.textContent += totalCount;

}
console.log(count)



   
    