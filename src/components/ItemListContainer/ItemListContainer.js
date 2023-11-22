import { useEffect } from "react";
import { useState } from "react";
import { getDate } from '../../helpers/getDate.js';
import ItemList from "../ItemList/ItemList.js";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        getDate()
            .then((res) => {
                if(!categoryId) setProducts(res);
                else setProducts(res.filter(prod => prod.type === categoryId));
            })
            .catch((error) => { console.log(error) })
    }, [categoryId]);

    return (
        <div>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;