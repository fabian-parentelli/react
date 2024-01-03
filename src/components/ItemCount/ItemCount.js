import { Link } from 'react-router-dom';
import './itemCount.css'

const ItemCount = ({ quantity, setQuantity, handleAgregar, max }) => {

    const handleLess = () => quantity > 1 && setQuantity(quantity - 1);
    const handleAdd = () => quantity < max && setQuantity(quantity + 1);

    return (
        <div className="itemCount">

            <div className="count">
                <p className={quantity > 1 ? 'add': 'addFile' } onClick={handleLess}>-</p>
                <p>{quantity}</p>
                <p className={quantity === max ? 'addFile' : 'add' } onClick={handleAdd}>+</p>
            </div>

            <Link className='btn' to={'/cart'} onClick={handleAgregar}>Agergar al Carrito</Link>
        </div>
    );
};

export default ItemCount;