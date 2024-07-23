let result=document.getElementById("result");

function countOfvowles(str){
    let count=0;
    for(const char of str){
        if(
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"  )

           
          {
            count++;
            result.innerHTML=count;
        }
    }
    console.log(count);

    }