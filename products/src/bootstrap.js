import faker from 'faker';

const mount = (el) => {
    let products = '';

    for (let i = 1; i <= 10; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }

    el.innerHTML = products;
}

/**
 * Context/Situation #1
 * We are running this file in development in isolation
 * We are using our local index.html file
 * Which DEFINITELY has an element with an id of 'local-products'
 * We want to immediately render or app into that element
 */
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#local-products');
    if (el) {
        mount(el)
    }
}

/**
 * Context/Situation #2
 * We are running this file in development or production mode
 * through the CONTAINER app
 * NO GUARANTEE that an element with an id of 'local-products' exists
 * WE DO NOT WANT try to immediately render the app
 */

export { mount }
