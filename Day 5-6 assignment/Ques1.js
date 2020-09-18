let personDetails=[
    {
        name: "Shreeram",
        age:22,
        city:"Hubli",
        salary:10000
    },
    {
        name: "Laxmi",
        age:25,
        city:"Haveri",
        salary:20000
    },
    {
        name: "Jaya",
        age:21,
        city:"Dharwad",
        salary:15000
    },
    {
        name: "Deepa",
        age:20,
        city:"Hubli",
        salary:12000
    },
    {
        name: "Shivam",
        age:21,
        city:"Bengalore",
        salary:50000
    },
];
console.log(personDetails)
function display(superperson){
    let tabledata="";
    superperson.forEach(function(person,index){
    let personData=  `<tr>
      <td>${index+1}</td>
       <td>${person.name}</td>
       <td>${person.age}</td>
      <td>${person.city}</td>
      <td>${person.salary}</td>
      <td>
    <button onclick="DeleteData(${index})">DeleteData</button>
      </td>
      </tr>`
    //   console.log(personData)
    tabledata+=personData;

    });
    
    
    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
}

display(personDetails)

function searchByName(){
    let searchValue = document.getElementById("searchName").value;
  
    let newdata = personDetails.filter(function (person) {
      return (
        person.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
      );
    });
  
    display(newdata);

}

function searchByCity(){
    let searchValue = document.getElementById("searchCity").value;
  
    let newdata = personDetails.filter(function (person) {
      return (
        person.city.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
      );
    });
  
    display(newdata);

}
function DeleteData(index){
personDetails.splice(index,1);
display(personDetails)
}