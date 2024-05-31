import PropTypes from 'prop-types';
import './cart.css'
const cart = ({cart, handleRemoveCart}) => {
    return (
        <div>
            <h3>cart : {cart.length}</h3>
             <div className="cart-container">
                {
                     cart.map(bottle=><div key={bottle.id} >
                        <img src={bottle.img}></img>

                        <button onClick={()=>handleRemoveCart(bottle.id)}>remove</button>
                     </div>
                     )
                }
                
             </div>

        </div>
    );
};

cart.propsTypes = {
    Cart:PropTypes.array.isRequired,
    handleRemoveCart:PropTypes.func.isRequired

}
export default cart;