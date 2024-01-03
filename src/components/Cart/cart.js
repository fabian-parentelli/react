import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { FaTrashAlt } from "react-icons/fa";

const Cart = () => {

    const { cart, emptyCart, totalCart, removeItem } = useCartContext();

    if (cart.length === 0) {  // Lo ideal es tener dos componentes, pero esto sirve.
        return (
            <div>
                <h2>Tu carriro esta Vacio</h2>
                <hr/>
                <p>Vuelve e aver los productos</p>
                <Link to="/">Volver</Link>
            </div>
        );
    };

    return (
        <div>
            <h2>Tu Compra</h2>
            <hr />
            {
                cart.map(item => (
                    <div key={item.id}>
                        <h4>{item.name}</h4>
                        <p>Cantidad: {item.quantity}</p>
                        <p>Precio: ${item.price * item.quantity}</p>
                        <button onClick={() => removeItem(item.id)}><FaTrashAlt /></button>
                        <hr />
                    </div>
                ))
            }
            <h4>Total: ${totalCart()}</h4>
            <button onClick={emptyCart}>Vaciar Carrito</button>
        </div>
    );
};

export default Cart;