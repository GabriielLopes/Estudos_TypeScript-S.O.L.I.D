import { Order } from './entities/order';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping-cart';

const shoppingCart = new ShoppingCart();
const order = new Order(shoppingCart);

shoppingCart.addItem(new Product('Camisa', 55.9));

shoppingCart.addItem(new Product('Calça', 99.9));

shoppingCart.addItem(new Product('Boné', 53.9));

console.log(order.orderStatus);
console.log(shoppingCart.items);
console.log(shoppingCart.total());
order.checkOut();
console.log(order.orderStatus);
