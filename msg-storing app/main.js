




// btn =document.addEventListener("click",function(){
//     let btn=document.getElementById("btn");
// let texts=document.getElementById("text");
// let msg=document.getElementById("msg");
//    let contents= texts.value;
//    if(contents===""){
//     alert("Please enter the valid value");
//    }
//    console.log(contents);
//     msg.innerHTML=contents;
//     texts.value=" ";
//  })


 btn=document.addEventListener("click",function(){
    let btn=document.getElementById("btn");
let texts=document.getElementById("text");
let msg=document.getElementById("msg");
    let contents=texts.value;
    msg.innerHTML=contents;
    texts.value='';
 })