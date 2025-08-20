import { mount } from 'products/ProductsIndex';
import 'cart/CartIndex';

document.querySelector('#container').innerHTML = `<h1>Soy el fucking container</h1>`

mount(document.querySelector('#mf-products'))
