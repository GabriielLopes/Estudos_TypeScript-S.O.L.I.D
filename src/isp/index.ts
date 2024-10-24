/*
Interface Segregation principle (Prncípio da segregação de Interface).
Os Clientes não devem ser forçados a depender de interfaces que não utilizam.
*/

import { IndividualCustomer } from './classes/customer';
import { FiftyPercentDiscount, NoDiscount, TenPercentDiscount } from './classes/discount';
import { Order } from './classes/order';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const fiftyPercentDiscount = new FiftyPercentDiscount();

const tenPercentDiscount = new TenPercentDiscount();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(tenPercentDiscount);
const individualCustome = new IndividualCustomer('Gabriel', 'Lopes', '444.444.444-44');
const order = new Order(shoppingCart, individualCustome);

shoppingCart.addItem(new Product('Camisa', 55.9));

shoppingCart.addItem(new Product('Calça', 99.9));

shoppingCart.addItem(new Product('Boné', 53.9));

console.log(order.orderStatus);
console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
order.checkOut();
console.log(order.orderStatus);
