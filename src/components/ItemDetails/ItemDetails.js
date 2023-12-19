import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './itemDetails.css';
import { useCartContext } from '../../context/CartContext';

const ItemDetails = ({ id, name, image, description, price, type, stock }) => {

    const { isInCart, agregarAlCarrito } = useCartContext();

    const [quantity, setQuantity] = useState(1);
    const [itemAdded, setItemAdedd] = useState(false);

    const navigate = useNavigate();
    const handleVolver = () => navigate(-1);

    const handleAgregar = () => {
        const item = { id, name, image, description, price, stock, quantity };
        agregarAlCarrito(item)
        setItemAdedd(true);
    };

    return (
        <div className='itemDetails'>
            <h2>{name}</h2>
            <div>
                <img src={image} />
                <div className='text'>
                    <p>Categoria: {type}</p>
                    <p>Banda: {description}</p>
                    <p>Precio: ${price}</p>
                    {
                        !isInCart(id) 
                            ? !itemAdded && 
                            <ItemCount 
                                quantity={quantity} 
                                setQuantity={setQuantity} 
                                handleAgregar={handleAgregar} 
                                max={stock} 
                            />
                            : <Link to="/cart">Terminar Mi Compra</Link>
                    }
                    <button className='btn' onClick={handleVolver}>Volver</button>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;