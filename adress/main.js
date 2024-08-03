const btn=document.getElementById("btn");

btn.addEventListener("click",getValues);

function getValues(){

    const firstName=document.getElementById("firstname").value;
    const secondName=document.getElementById("second").value;
    const emailvalue=document.getElementById("email").value;
    const phonenumber=document.getElementById("phone").value;
    const adressvalue=document.getElementById("adress").value;

let result=firstName+secondName+" ,"+emailvalue+" ,"+phonenumber+" ,"+adressvalue+" ." ;

console.log(result)
}