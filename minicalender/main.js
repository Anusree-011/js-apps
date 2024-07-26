const date=document.getElementById("date");
const day=document.getElementById("day");
const month=document.getElementById("month");
const year=document.getElementById("year");


const today = new Date();
console.log(today);


const weekDays=["sunday","monday","tuesday","wedwnsday","thursday","friday"];
const allMonths=["january", "February",  "March", "April", "May", "June", "July", "August", "September", "October",
    "november","December"];
    


date.innerHTML = (today.getDate()<10?"0":"")+today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML =allMonths[today.getMonth()];
year.innerHTML = today.getFullYear();