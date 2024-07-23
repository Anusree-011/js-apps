let text=document.getElementById("text");
let marks= prompt("Enter ur mark(0-100):");
let grade;

if(marks >=90){
    grade ="A";
    text.textContent= ("ur grade is ",grade);
    
}
else if(marks >=79){
    grade ="B";
    text.textContent=("ur grade is ",grade);
}
else if(marks >=69 ){
    grade ="C";
    text.textContent=("ur grade is ",grade);
}
else if(marks >=59 ){
    grade ="D";
    text.textContent=("ur grade is ",grade);e;
}

else{
    grade ="F";
    text.textContent="ur grade is:",grade;
}

console.log(grade);