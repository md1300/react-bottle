import './bottle.css'


export default function Bottle({bottle,handleBottleClick}){

    const {img,name,category,quantity,price}=bottle ;
           

    return(
        <div className="bottle">
           
            <img src={img} alt="" srcset="" />
            <h3>name : {name}</h3>
            <h3>category : {category}</h3>
            <h3>quantity :{quantity}</h3>
            <h3>price : {price}</h3>
            <button onClick={()=>handleBottleClick(bottle)}>showData</button>
        </div>
    )
}