import { useEffect } from "react";
import { useState } from "react";
import ItemList from "../ItemList/ItemList.js";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config.js";

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams(); // con esto veo el parametro.

    useEffect(() => {
        setLoading(true);
        let q;
        // 1 - referencia. (Sincrónico).
        const productsRef = collection(db, 'products');
        if(categoryId) q = query(productsRef, where("type", "==" , categoryId));

        // 2 -peticion asincronica. (Asincrónico).
        getDocs(q || productsRef)
            .then((res) => {
                setProducts(res.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                }))
            })
            .finally(() => setLoading(false))

    }, [categoryId]);

    return (
        <div>
            {loading ? <h2>Cargando ...</h2> : <ItemList products={products} />}
        </div>
    );
};

export default ItemListContainer;