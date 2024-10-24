import { OrderStatus } from './interfaces/order-status';
import { ShoppingCart } from './shopping-cart';
import { messaging } from './messaging';
import { persistency } from './persistency';

export class Order {
  private _orderStatus: OrderStatus = 'Open';

  constructor(private readonly cart: ShoppingCart) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkOut(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio!');
      return;
    }

    messaging.sendMessage(
      `Seu pedido de valor ${this.cart.total()} foi fechado e está pendente de pagametento!`,
    );
    persistency.saveOrder();
    this.cart.clear();
  }
}
