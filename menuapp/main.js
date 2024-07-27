

let selectitem=document.getElementById("selectitem");
let select=document.getElementById("select");
let options=document.getElementsByClassName("options");
// let item=document.getElementById("item")

// selectitem.onclick = function(){
//     item.classList.toggle("hidde");
    
// }

for(option of options){
    option.onclick=function(){
        select.innerHTML=this.textContent;
        console.log(select);
        
       
    
    
    }}
