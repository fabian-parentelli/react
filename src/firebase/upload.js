import { db } from './config.js';
import products from '../data/products.json' assert {type: "json"};
import { collection, addDoc } from 'firebase/firestore';

products.forEach(item => delete item.id);

const productsRef = collection(db, 'products');

products.forEach(item => {
    addDoc(productsRef, item)
});