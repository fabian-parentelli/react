import { useEffect, useState } from "react";
import { getDateById } from '../../helpers/getDate.js';
import ItemDetails from "../ItemDetails/ItemDetails.js";
import { useParams } from "react-router-dom";

const ItemDetailsContainer = () => {

    const [item, setItem] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        getDateById(+itemId)
            .then((data) => setItem(data));
    }, [itemId]);

    return (
        <div>
            {item && <ItemDetails {...item} />}
        </div>
    );
};

export default ItemDetailsContainer;