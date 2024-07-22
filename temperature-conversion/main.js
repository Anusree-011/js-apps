let btn=document.getElementById("btn");
let textbox=document.getElementById("textbox");
let tocelsius=document.getElementById("tocelsius");
let toFarebheit=document.getElementById("toFarebheit");
let result=document.getElementById("result");

let temp;
function convert(){
    if(toFarebheit){
        temp=Number(textbox.value);
        temp=temp*9/5+32;

        result.textContent =temp.toFixed(1);
       
    }
    else if(tocelsius){
        temp=Number(textbox.value);
        temp=(temp-32)*(5/9);

        
        result.textContent =temp.toFixed(1);}
    else{
        result.textContent="select a unit";
    } 
}
