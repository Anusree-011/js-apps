const form=document.querySelector("#create-account-form");
const usernameInput=document.querySelector("#username");
const emialInput=document.querySelector("#email");
const passwordInput=document.querySelector("#password");
const text=document.getElementById("text");
let btn=document.getElementById("btn")


btn=document.addEventListener("click",validateForm);

function validateForm(){
   
    const validateInputs = ()=>{
        const namevalue=username.value.trim();
        const Emailvalue=email.value.trim();
        const passwordvalue=password.value.trim();
    text.innerText=validateInputs;
     console.log(text);

}
}

    // let usernameInput= document.getElementById('username').value;
    // // localStorage.setItem('validateForm', usernameInput);
    // text.innerHTML=usernameInput;
    // console.log(username)

        
    

    // function saveData() {
    //     const inputData =
    //     localStorage.setItem('savedData', inputData);
    //     window.location.href = 'result.html'; 