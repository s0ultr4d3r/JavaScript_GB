/* Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку
15% */ 
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach((Element) => {
    Element.price = Element.price * 0.85
    })

    for (i = 0; i < 3; i++) {
        console.log(products[i].price);
    }
