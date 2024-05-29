import { useEffect, useState } from "react"

export default function CreatStore (){
    const dataStore =[
        {
        "type": "water bottle",
        "brand": "Aquafina",
        "material": "plastic",
        "capacity_ml": 500,
        "color": "clear"
      },
      {
        "type": "wine bottle",
        "brand": "Chateau Lafite Rothschild",
        "material": "glass",
        "capacity_ml": 750,
        "color": "green"
      },
      {
        "type": "milk bottle",
        "brand": "Organic Valley",
        "material": "glass",
        "capacity_ml": 1000,
        "color": "white"
      },
      {
        "type": "sauce bottle",
        "brand": "Heinz",
        "material": "plastic",
        "capacity_ml": 350,
        "color": "red"
      },
      {
        "type": "perfume bottle",
        "brand": "Chanel",
        "material": "glass",
        "capacity_ml": 50,
        "color": "transparent"
      },  
    ]
      
    const [fakeData,setFakeData]=useState([])


    useEffect(()=>{
        fetch(dataStore)
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])

    
    return (
        <div>
             
        </div>
    )

       
}