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
    
    function validate(num1,num2){
        if (num1=='' || num2==''){
            alert("please enter the values");
            return false;
        }
        else{
            return true;
        }
    }
    
    
    
    function Addnumbers(){
        let num1 = document.getElementById("input1").value;
        let num2 = document.getElementById("input2").value;
        
        let isValid = validate(num1,num2);
        
          if(!isValid)
            return;

        let sum= parseInt(num1)+parseInt(num2);
        document.getElementById("text").innerHTML= "Result: "+sum;
       


    }
    
    function subnumbers(){
        let num1 =document.getElementById("input1").value;
        let num2 =document.getElementById("input2").value;
        let isValid = validate(num1,num2)
        if(!isValid)
            return;

        let sum = parseInt(num1)-parseInt(num2);
        
        document.getElementById("text").innerHTML= "Result : "+sum;
        

  
    }
    function mulnumbers(){
        let num1 =document.getElementById("input1").value;
        let num2 =document.getElementById("input2").value;
       
        let isValid=validate(num1,num2)
        if(!isValid)
            return;

        let sum= parseInt(num1)*parseInt(num2);
        document.getElementById("text").innerHTML= "Result:"+sum;

  
    }
    function divnumbers(){
        let num1 =document.getElementById("input1").value;
        let num2 =document.getElementById("input2").value;
      
        let isValid=validate(num1,num2)
        if(!isValid)
            return;
        

        let sum= parseInt(num1)/parseInt(num2);
        document.getElementById("text").innerHTML= "Result: "+sum;

  
    }
