let text=document.getElementById("text");
let btn=document.getElementById("btn")
let listcontainer=document.getElementById("box")
function todolist(){


    if(text.value==''){
    alert("add something");
    }
    else{
        let task=document.createElement("li")
        task.textContent=text.value;
        listcontainer.appendChild(task)

    }
text.value='';
}