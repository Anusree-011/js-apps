const form=document.querySelector("#create-account-form");
const usernameInput=document.querySelector("#username");
const emialInput=document.querySelector("#email");
const passwordInput=document.querySelector("#password");


form.addEventListener("submit", (event)=>{
    event.preventDefault();

    validateForm();
});
function validateForm(){
    if(usernameInput.value.trim()=='0'){
        setError(usernameInput, "name can not be empty");
    }


    function setError(element,errorMessage){
        const parent=element.parentElement;
        parent.classList=parent.querySelector('p');
        paragraph.textContent=errorMessage;
    }
    }
