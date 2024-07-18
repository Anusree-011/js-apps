let plusbtn=document.getElementById("plusbtn");
plusOperation=function(){
    number1=document.getElementById("number1");
    number2=document.getElementById("number2");

    sum=parseInt(number1.value)+ parseInt(number2.value);
    result=document.getElementById("result");
    result.innerText="Result:"+ sum;

}
plusbtn.addEventListener("click",plusOperation);

let minusbtn=document.getElementById("minusbtn");
minusOperation=function(){
    number1=document.getElementById("number1");
    number2=document.getElementById("number2");

    sum=parseInt(number1.value)- parseInt(number2.value);
    result=document.getElementById("result");
    result.innerText="Result:"+sum;

}
minusbtn.addEventListener("click",minusOperation);

let mutiplybtn=document.getElementById("multiplybtn");
multiplyOperation=function(){
    number1=document.getElementById("number1");
    number2=document.getElementById("number2");

    sum=parseInt(number1.value)* parseInt(number2.value);
    result=document.getElementById("result");
    result.innerText="Result:"+sum;

}
multiplybtn.addEventListener("click",multiplyOperation);
let divisionbtn=document.getElementById("divisionbtn");
divisonOperation=function(){
    number1=document.getElementById("number1");
    number2=document.getElementById("number2");

    sum=parseInt(number1.value)/parseInt(number2.value);
    result=document.getElementById("result");
    result.innerText="Result:"+sum;

}
divisionbtn.addEventListener("click",divisonOperation);


