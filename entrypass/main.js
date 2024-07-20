let mytext=document.getElementById("mytext")
let btn=document.getElementById("btn")
let entry=document.getElementById("entry")
let age;

btn.onclick=function(){
    age=mytext.value;
    age=Number(age);

    if (age >= 100) {
        entry.textContent="you are too old  to entry this site";

    }
    
    else if(age<=18) {
        entry.textContent="you are younger";
    }
    else  {
        entry.textContent="you are able to entry this site";
    }
}