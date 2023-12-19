import { createContext, useState, useEffect, useContext } from "react";

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext); // Esto es para que halla menos importaciones.

const init = JSON.parse(localStorage.getItem('cart')) || [];

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(init);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const agregarAlCarrito = (item) => setCart([...cart, item]); // Agrega al Carrito
    const isInCart = (id) => cart.some(item => item.id === id);  // Verifica si esta en el carrito
    const emptyCart = () => setCart([]); // Elimina todo el carrito
    const totalCart = () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0); // Suma el total;
    const removeItem = (id) => setCart(cart.filter(item => item.id !== id)); // Elimina un articulo del carrito;
    const totalQuantity = () => cart.reduce((acc, item) => acc + item.quantity, 0); // Total de items

    return (
        <CartContext.Provider value={{ 
            cart, agregarAlCarrito, isInCart, emptyCart, totalCart, removeItem, totalQuantity 
            }}>
            {children}
        </CartContext.Provider>
    );
};