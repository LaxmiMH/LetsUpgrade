let arr=["blue" , "green" , "purple" , "yellow" , "red"]
document.getElementById("display").value=DispArray();
 function DispArray()
 {
    document.getElementById("disp").innerHTML= arr;
 }

 function Find()
 {
   let x= document.getElementById("id1").value;
   let y= arr.includes(x)
   if(y)
   {
       document.getElementById("answer").innerHTML= x +" "+ "is present in the array"
   }
     else{
        document.getElementById("answer").innerHTML= x +" "+ "is not present in the array" 
     }
 }