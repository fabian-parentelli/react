import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import ItemDetailsContainer from "./components/ItemDetailsContainer/ItemDetailsContainer.js";
import NavBar from "./components/NavBar/NavBar.js";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cart from "./components/Cart/cart.js";
import { CartProvider } from "./context/CartContext.js";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/products/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:itemId" element={<ItemDetailsContainer />} />
          <Route path="*" element={<Navigate to={'/'} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;