import { Link } from 'react-router-dom';
import './cartWidget.css';
import { useCartContext } from '../../context/CartContext.js';

const CartWidget = () => {

    const { totalQuantity } = useCartContext();

    return(
        <Link to="/cart" className="cartWidget">
            <img src="./img/cart.png" alt="cart"/>
            <p>{totalQuantity()}</p>
        </Link>
    );
};  

export default CartWidget;