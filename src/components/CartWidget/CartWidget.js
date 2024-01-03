import { Link } from 'react-router-dom';
import './cartWidget.css';
import { useCartContext } from '../../context/CartContext.js';

const CartWidget = () => {

    const { totalQuantity, cart } = useCartContext();

    return(
        <Link to="/cart" className={`cartWidget ${cart.length > 0 && 'cartWidget-active'}`}>
            <img src="./img/cart.png" alt="cart"/>
            <p>{totalQuantity()}</p>
        </Link>
    );
};  

export default CartWidget;