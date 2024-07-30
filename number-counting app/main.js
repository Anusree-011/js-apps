// alert("hii")


//   function increment(){
//     count++;
//     number.innerHTML=count;
//   }
//   function decrement(){
//     count--;
//     number.innerHTML=count;

 
//   }
let btn=document.getElementById("btn");
let btns=document.getElementById("btns");
let number=document.getElementById("number");
let saveEl=document.getElementById("save-El");
  let count=0;

btn.document=addEventListener("click",increment)

        function increment(){
            count--;
            number.innerHTML=count;

        }
        btns.document=addEventListener("click",decrement)

        function decrement(){
            count++;
            number.innerHTML=count;

        }


   
