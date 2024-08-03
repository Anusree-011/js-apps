// const form=document.querySelector("#create-account-form");
// const usernameInput=document.querySelector("#username");
// const emialInput=document.querySelector("#email");
// const passwordInput=document.querySelector("#password");
const text=document.getElementById("text");
let btn=document.getElementById("btn")


btn.addEventListener("click",getValues);
function getValues(){
   
    // const getValues = ()=>{
        const namevalue=username.value.trim();
        const Emailvalue=email.value.trim();
        const passwordvalue=password.value.trim();
    // text.innerText=
    
     let result=namevalue+" ,  "+  
     Emailvalue +" , "+   passwordvalue;
    
     text.innerHTML=result;
console.log(result)
}


