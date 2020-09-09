let obj =[{
    name: "Shreeram",
    age: 23,
    country: "India",
    hobbies: ["singing","dancing","watching Tv","Drawing","Swimming"],
  },
    {
        name: "Jaya",
        age: 13,
        country: "UK",
        hobbies: ["singing","dancing","watching Tv",]
    },
    {
        name: "Deepa",
        age: 35,
        country: "India",
        hobbies: ["Drawing","Swimming","photography"],
    }
   
]

console.log("The objects having age less than 30")
obj.forEach(
    function(a){
        if(a.age<30)
        {
            console.log(a);
        }
    })
    console.log("The objects having country India")
    obj.forEach(
        function(a){
            if(a.country=="India")
            {
                console.log(a);
            }
        })
