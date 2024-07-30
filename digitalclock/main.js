let hr=document.getElementById("hr");
let minu=document.getElementById("minu");
let sec=document.getElementById("sec");
setInterval(()=>{


let currentTime=new Date();
console.log(currentTime)
hr.innerHTML=(currentTime.getHours()<10?"0":"")+currentTime.getHours();
minu.innerHTML=(currentTime.getMinutes()<10?"0":"")+currentTime.getSeconds();
sec.innerHTML=(currentTime.getSeconds()<10?"0":"")+currentTime.getMinutes();},1000)


