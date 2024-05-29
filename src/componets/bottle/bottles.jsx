import { useEffect, useState } from "react"
import Bottle from "./bottle";
import './bottles.css'

export default function Bottles(){
   
    const [bottles,setBottles]=useState([]);

    const [cart,setCart]=useState([]);

    useEffect(()=>{
        fetch('bottles.json')
        .then(res=>res.json())
        .then(data=>setBottles(data))
    },[])

    const handleBottleClick=bottle=>{
        const  newCart=[...cart,cart]
        setCart(newCart)
    } 

    return (
        <div className="bottles">
             <h1 >You can buy any bottle cheaply</h1>
             <h3>bottles quantity : {bottles.length}</h3>
             <h3>cart : {cart.length}</h3>
             <div >
             {
               bottles.map(bottle=><Bottle
                  key={bottle.id} 
                  bottle={bottle}
                  handleBottleClick={handleBottleClick}
                  > </Bottle>)
            }
         
             </div>

         


        </div>
    )
}