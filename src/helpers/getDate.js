import data from '../data/products.json';

const getDate = () => {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });
};

const getDateById = (id) => {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            const item = data.find((prod) => prod.id === id)
            resolve(item);
        }, 2000);
    });
};

export { getDate, getDateById };