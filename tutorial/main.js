// let text=document.getElementById("text");
// let result="anusree";
// text.innerText= "my name is"+ " "+result;
// // text.innerHtml=`my name is ${result}`;
// // console.log(result)
let items=document.getElementById("itemslist")
let powders=["chilly","turmeric","chicken massala","coriyander"];
console.log(powders);
for(let powder of powders){
    let li=document.createElement("li");
    console.log(li)
    li.innerText=powder;
    items.appendChild(li);
    console.log(li);

}
