
import './cart.css'
const cart = ({cart}) => {
    return (
        <div>
            <h3>cart : {cart.length}</h3>
             <div className="cart-container">
                {
                     cart.map(bottle=><img src={bottle.img}></img>)
                }
                
             </div>

        </div>
    );
};

export default cart;