import './item.css';
import { Link } from 'react-router-dom';

const Item = ({prod}) => {
    return(
        <div className="item" key={prod.id}>
            <img src={prod.image} />
            <h3>{prod.name}</h3>
            <small> categoria: {prod.type}</small>
            <p>${prod.price}</p>

            <Link to={`/detail/${prod.id}`}>
                <button id={prod.id}>Agregar</button>
            </Link>

        </div>
    );
};

export default Item;