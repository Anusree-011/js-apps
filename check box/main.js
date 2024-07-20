let subscribe=document.getElementById("subscribe");
let visa=document.getElementById("visa");
let mastercard=document.getElementById("mastercard");
let paypal=document.getElementById("paypal");
let submit=document.getElementById("submit");
let btn=document.getElementById("btn");
let result=document.getElementById("result");

btn.onclick=function(){
    if(subscribe .checked){
        result.textContent="you are subscribed";
    }
    else{
        result.textContent="your not subscribed";
    }
    
        if(visa .checked){
            result.textContent="you are paying with visa";
        }
        else if(mastercard.checked){
            result.textContent="your paying with mastercard";
        }
        else if(paypal .checked){
            result.textContent="you are paying with paypal";
        }


}

