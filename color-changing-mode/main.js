let modechange=document.getElementById("modechange");
let mode;

modechange.addEventListener("click", function(){
    if(mode==="light"){
        mode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }
        else{
            mode="light";
            document.querySelector("body").style.backgroundColor="white";

        }
})