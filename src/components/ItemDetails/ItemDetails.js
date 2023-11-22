import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './itemDetails.css'

const ItemDetails = ({ id, name, image, description, price, type, stock }) => {

    const [quantity, setQuantity] = useState(1);
    const [itemAdded, setItemAdedd] = useState(false);

    const navigate = useNavigate();
    const handleVolver = () => navigate(-1);

    const handleAgregar = () => {
        console.log({ id, name, image, description, price, stock, quantity });
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
                    {!itemAdded && <ItemCount quantity={quantity} setQuantity={setQuantity} handleAgregar={handleAgregar} max={stock} />}
                    <button className='btn' onClick={handleVolver}>Volver</button>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;