


let passwordBox=document.getElementById("passwordbox");
let length= 12;


const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const numbers="123456789";
const symbols="!@#$%^**()><";
const allChars= upperCase+lowerCase+numbers+symbols;

function creatPassword(){
    let password="";
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=numbers[Math.floor(Math.random()*numbers.length)];
    password+=symbols[Math.floor(Math.random()*symbols.length)];
    console.log(password)
while(length>password.length){
    password+=allChars[Math.floor(Math.random()*allChars.length)];
}

passwordBox.value=password;

}
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy")
}