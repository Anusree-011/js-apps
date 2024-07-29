const qootes = [

{   
    quote: "And we find at the end of a perfect day, The soul of a friend we've made.",
        fullNam:" Carrie Jacobs Bond"
    
},
    {
        quote:"Love is like the wild-rose briar; Friendship is like the holly-tree. The holly is dark when the rose briar blooms, But which will bloom most constantly?",
        fullNam:"Emily Bronte"
   
    },  

    
   { quote :"Life without a friend is death without a witness.",
    fullNam:" Spanish proverb"
   }

]
let btn=document.getElementById("btn");
let t2=document.getElementById("t2");
let quoets=document.getElementById("quoets")

btn=document.addEventListener("click",function(){
   
    let text=Math.floor(Math.random()*qootes.length)
    t2.innerHTML=qootes[text].fullNam;
    quoets.innerHTML=qootes[text].quote;
})

