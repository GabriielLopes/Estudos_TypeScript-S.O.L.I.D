type CartItem = {
  name: string;
  price: number;
};

type OrderStatus = 'Open' | 'Close';

export class ShoppingCart {
  private readonly _items: CartItem[] = []
  private _orderStatus: OrderStatus = 'Open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  total(): number {
    return parseFloat(this._items.reduce((accumulator, next) => accumulator += next.price ,0).toFixed(2));
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus
  }

  checkOut(): void {
    if (this.orderStatus === 'Close') return
    if (this.isEmpty()) {
      console.log("Seu carrinho está vazio!");
      return;
    }

    this._orderStatus = 'Close';
    this.sendMessage(`Seu pedido de valor ${this.total()} foi fechado e está pendente de pagametento!`)
    this.clear();
  }

  public clear(): void {
    this._items.length = 0;
    console.log('O seu atual carrinho foi zerado!');
  }

  private isEmpty(): boolean {
    return this._items.length === 0;
  }

  private sendMessage(msg: string): void {
    console.log('Mensagem enviada!', msg);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso!');
  }
}

const shoppingCart = new ShoppingCart();

shoppingCart.addItem({
  name: 'Camisa',
  price: 35.90
})

shoppingCart.addItem({
  name: 'Calça',
  price: 99.90,
});

shoppingCart.addItem({
  name: 'Boné',
  price: 53.90,
});

console.log(shoppingCart.items);
console.log(shoppingCart.total());
shoppingCart.checkOut();
