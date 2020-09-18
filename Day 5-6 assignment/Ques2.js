// let bus=["abb","abjbdj"]
// console.log(bus)
// function empty(){
//     bus.length=0;

// }
// empty();
// console.log(bus)
window.onload = function () {
    let initialBusDetails = [
      {
        name: "VRL",
        source: "Bengalore",
        Destination: "Hubli",
        number:"BL12535",
        passenger_Capacity: "50",
      },
      {
        name: "Redbus",
        source: "Kochi",
        Destination: "Bengalore",
        number:"Koc135",
        passenger_Capacity: "45",
      },
      {
        name: "KSRTC",
        source: "Pune",
        Destination: "Mysore",
        number:"MY2533",
        passenger_Capacity: "54",
      },
    ];
  
    if (localStorage.getItem("bus") == null) {
      localStorage.setItem("bus", JSON.stringify(initialBusDetails));
    }
  };
// console.log(initialBusDetails);
    function display(array = undefined) {
        let tabledata = "";
        let bus;
        if (array == undefined) {
            bus = JSON.parse(localStorage.getItem("bus"));
        } else {
            bus = array;
        }
      
        bus.forEach(function (bus1, index) {
          let currentrow = `<tr>
            <td>${index + 1}</td>
            <td>${bus1.name}</td>
            <td>${bus1.source}</td>
            <td>${bus1.Destination}</td>
            <td>${bus1.number}</td>
            <td>${bus1.passenger_Capacity}</td>
        
        </tr>`;
      
          tabledata += currentrow;
        });
      
        document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
       
      }
      
      display();
      function addBus(event) {
        event.preventDefault();
        let bus2 = {};
        let name = document.getElementById("name").value;
        let source = document.getElementById("source").value;
        let Destination = document.getElementById("destination").value;
        let number = document.getElementById("busno").value;
        let passenger_Capacity = document.getElementById("pass").value;
        bus2.name = name;
        bus2.source = source;
        bus2.Destination = Destination;
        bus2.number = number;
        bus2.passenger_Capacity = Number(passenger_Capacity);
       
      
        let bus = JSON.parse(localStorage.getItem("bus"));
        bus.push(bus2);
        localStorage.setItem("bus", JSON.stringify(bus));
      
        display();
      
        document.getElementById("name").value="";
         document.getElementById("source").value="";
        document.getElementById("destination").value="";
        document.getElementById("busno").value="";
         document.getElementById("pass").value="";
      }
  function searchBySource(){
      let searchvalue = document.getElementById("source1").value
      let bus = JSON.parse(localStorage.getItem('bus'));
      let newbus = bus.filter(function(bus3){
          return(
              bus3.source.toUpperCase().indexOf(searchvalue.toUpperCase()) != -1
          );
      });
      display(newbus);
  }
  function searchByDestination(){
    let searchvalue = document.getElementById("source2").value
    let bus = JSON.parse(localStorage.getItem('bus'));
    let newbus = bus.filter(function(bus3){
        return(
            bus3.Destination.toUpperCase().indexOf(searchvalue.toUpperCase()) != -1
        );
    });
    display(newbus);
}
