// let input1=document.getElementById("input1");
// let input2=document.getElementById("input");
// let btn=document.getElementById("btn");



    // function addnumbers(){
    //     let num1=document.getElementById("input1").value;
    //     let num2=document.getElementById("input2").value;

    //     let sum = parseInt(num1) + parseInt(num2);
    //     console.log(sum)
    //     document.getElementById("text").innerHTML="Result: "+sum;
    // }

    function addnumbers(){

        let num1 =document.getElementById("input1").value;
        let num2 =document.getElementById("input2").value;

        let sum= parseInt(num1)+parseInt(num2);
        document.getElementById("text").innerHTML= "Result: "+sum;

    }