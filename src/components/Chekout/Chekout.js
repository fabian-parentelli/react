import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { Link, Navigate } from "react-router-dom";
import { db } from '../../firebase/config.js';
import { collection, writeBatch, documentId, getDocs, query, addDoc, doc, updateDoc, getDoc, where } from "firebase/firestore";
import { Formik } from "formik";

const Chekout = () => {

    const { cart, totalCart, emptyCart } = useCartContext();
    const [orderId, setOrderId] = useState(null)

    const createOrder = async (values) => {

        if (!values.name || !values.address || !values.email) return alert('Datos Invalidos');

        const order = {
            customer: values,
            items: cart,
            total: totalCart()
        };

        const batch = writeBatch(db);
        const orderRef = collection(db, 'orders');
        const productRef = collection(db, 'products');

        const outOfStock = [];

        const itemsRef = query(productRef, where(documentId(), 'in', cart.map(prod => prod.id)));

        const products = await getDocs(itemsRef);
        products.docs.forEach(doc => {
            const item = cart.find(item => item.id === doc.id);
            if (doc.data().stock >= item.quantity) {
                batch.update(doc.ref, { stock: doc.data().stock - item.quantity });
            } else {
                outOfStock.push(item);
            };
        });

        if (outOfStock.length = 0) {
            batch.commit()
                .then(() => {
                    addDoc(orderRef, order)
                        .then((doc => {
                            setOrderId(doc.id);
                            emptyCart();
                        }))
                        .catch((error) => console.log(error))
                })
        } else {
            alert('No hay productos disponibes')
        };

    };

    if (orderId) {
        return (
            <div>
                <h2>Tu Compra ha sido exitosa</h2>
                <hr />
                <p>Tu código de orden es: {orderId}</p>
                <Link to={'/'}>Volver</Link>
            </div>
        );
    };

    if (cart.length === 0) return <Navigate to={'/'} />

    return (
        <div className="chekout">
            <h2>Terminar mi compra</h2>
            <hr />

            <Formik
                initialValues={{ name: '', address: '', email: '' }}
                onSubmit={(values) => {
                    createOrder(values);
                }}
            >
                {({ values, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="name"
                            value={values.name}
                            placeholder="Tu Nombre"
                        />

                        <input
                            onChange={handleChange}
                            type="text"
                            name="address"
                            value={values.address}
                            placeholder="Tu direccion"
                        />

                        <input
                            onChange={handleChange}
                            type="email"
                            name="email"
                            value={values.email}
                            placeholder="Tu email"
                        />
                        <button type="submit">Enviar</button>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default Chekout;

// cart.forEach(prod => {
//     const docRef = doc(productRef, prod.id);
//     getDoc(docRef)
//         .then((doc) => {
//             if(doc.data().stock - prod.quantity >= 0) {
//                 updateDoc(docRef, { stock: doc.data().stock - prod.quantity})
//             } else {
//                 alert('No hay cantidad disponible');
//             };
//         })
// });