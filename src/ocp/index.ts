/*
  Open/Closed
  As entidades devem estar abertas para extensão, mas fechadas para modificações.
*/

import { FiftyPercentDiscount, NoDiscount, TenPercentDiscount } from './classes/discount';
import { Order } from './classes/order';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const fiftyPercentDiscount = new FiftyPercentDiscount();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const order = new Order(shoppingCart);

shoppingCart.addItem(new Product('Camisa', 55.9));

shoppingCart.addItem(new Product('Calça', 99.9));

shoppingCart.addItem(new Product('Boné', 53.9));

console.log(order.orderStatus);
console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
order.checkOut();
console.log(order.orderStatus);
