//solution 1

// let str= "Javascript";
// console.log(str.indexOf('a'));

//solution 2
function Search() {
    let x = document.getElementById("id1").value;
    let y = document.getElementById("id2").value;
    let result = x.search(y);
    if(result!=-1){
    document.getElementById("character").innerHTML = 
    "the character is there and  index is: "+result;
}
else
{
    document.getElementById("character").innerHTML = 
    "the character  is not there and index is:"+result;
                       
}
}