import { useEffect, useState } from "react"
import Bottle from "./bottle";
import './bottles.css'
import { addToLS ,getStoreCart,removeFromLS} from "../../utility/localStorage";
import Cart from "../cart/cart";

export default function Bottles(){
   
    const [bottles,setBottles]=useState([]);

    const [cart,setCart]=useState([]);

    useEffect(()=>{
        fetch('bottles.json')
        .then(res=>res.json())
        .then(data=>setBottles(data))
    },[])

    useEffect(()=>{ 
        console.log(bottles.length) 
        if(bottles.length>0){
            const storeCart=getStoreCart()
            // console.log(storeCart)
             const saveCart=[];
            for(const id of storeCart ){
               const bottle= bottles.find(bottle=>bottle.id===id)
               if(bottle){
                saveCart.push(bottle)
               }
            }
            console.log(saveCart)
            setCart(saveCart)
        }                      
        
    },[bottles])

    const handleBottleClick=bottle=>{
        const  newCart=[...cart,bottle]
        setCart(newCart)
        addToLS(bottle.id)
    } 
    const handleRemoveCart=id=>{
        const remainingCart=cart.filter(bottle=>bottle.id !== id)
        setCart(remainingCart)
        removeFromLS(id)
    }
    return (
        <div className="bottles">
             <h1 >You can buy any bottle cheaply</h1>
             <h3>bottles quantity : {bottles.length}</h3>
             <Cart cart={cart} 
        handleRemoveCart={ handleRemoveCart}
        ></Cart>
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