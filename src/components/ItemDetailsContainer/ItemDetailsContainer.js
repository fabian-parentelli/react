import { useEffect, useState } from "react";
import ItemDetails from "../ItemDetails/ItemDetails.js";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config.js";

const ItemDetailsContainer = () => {

    const [item, setItem] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        // 1 - referencia
        const docRef = doc(db, 'products', itemId)
        // 2 - Peticion
        getDoc(docRef)
            .then(doc => {
                setItem({ ...doc.data(), id: doc.id })
            })
    }, [itemId]);

    return (
        <div>
            {item && <ItemDetails {...item} />}
        </div>
    );
};

export default ItemDetailsContainer;