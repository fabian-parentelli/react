import { useEffect } from "react";
import { useState } from "react";
import { getDate } from '../../helpers/getDate.js';
import ItemList from "../ItemList/ItemList.js";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams(); // con esto veo el parametro

    useEffect(() => {
        setLoading(true);
        getDate()
            .then((res) => {
                if (!categoryId) setProducts(res);
                else setProducts(res.filter(prod => prod.type === categoryId));
            })
            .catch((error) => { console.log(error) })
            .finally(() => setLoading(false)) // Al final de cualquier caso siempre se ejecuta el finally
    }, [categoryId]);

    return (
        <div>
            {loading ? <h2>Cargando ...</h2> : <ItemList products={products} />}
        </div>
    );
};

export default ItemListContainer;