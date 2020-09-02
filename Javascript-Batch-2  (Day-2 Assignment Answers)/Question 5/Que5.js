let arr=[10,20,30,40,50]
document.getElementById("id1").value=Display();
function Display()
{
    document.getElementById("id2").innerHTML=arr;
}




for(let i=arr.length-1;i>=0;i--)
{
  document.getElementById("id3").value=document.write(arr[i]+" ,")
  //document.write(arr[i])

}
