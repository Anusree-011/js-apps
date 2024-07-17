let SaveEl=document.getElementById("save-El")
let Demo=document.getElementById("demo");

let count=0;
function increment(){
    count+=1;
    Demo.innerText=count;
    
}
function decrement(){
    count-=1;
    Demo.innerText=count;
}
function refresh(){
    count=0;
    Demo.innerText=count;
}

console.log(increment)
console.log(decrement)

function save(){
    let totalCount= count +"-" ;
    SaveEl.innerText += totalCount;
    console.log(count)
    
}

