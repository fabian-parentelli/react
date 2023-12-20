import { Routes, Route, Navigate } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer.js";
import ItemDetailsContainer from "../components/ItemDetailsContainer/ItemDetailsContainer.js";
import Cart from "../components/Cart/cart.js";


const PrivateRouters = () => {

    return (
        <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/products/:categoryId" element={<ItemListContainer />} />
            <Route path="/detail/:itemId" element={<ItemDetailsContainer />} />
            <Route path="*" element={<Navigate to={'/'} />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    );

};

export default PrivateRouters;