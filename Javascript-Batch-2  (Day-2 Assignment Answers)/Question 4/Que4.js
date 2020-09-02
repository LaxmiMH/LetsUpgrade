let arr=["Lilly" , "Rose" , "Jasmine" , "Daisy", "Chrysanthemum" ]
document.getElementById("display").value=DispArray();
 function DispArray()
 {
    document.getElementById("disp").innerHTML= arr;
 }
 document.getElementById("display1").value=MainArray();
 function MainArray()
{
     for(let i=0;i<arr.length;i++)
     {
         let j=arr[i].match('a')
         if(j)
         {
             document.write(arr[i]+", ");

         }
     }
 }