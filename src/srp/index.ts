import { Order } from "./order";
import { Product } from "./product";
import { ShoppingCart } from "./shopping-cart";

const shoppingCart = new ShoppingCart();
const order = new Order(shoppingCart);

shoppingCart.addItem(new Product('Camisa', 55.90))

shoppingCart.addItem(new Product('Calça', 99.9));

shoppingCart.addItem(new Product('Boné', 53.9));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
order.checkOut();
