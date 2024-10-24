import CartItem from "./interfaces/cart-item";

export class ShoppingCart {
  private readonly _items: CartItem[] = [];

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  total(): number {
    return parseFloat(
      this._items.reduce((accumulator, next) => (accumulator += next.price), 0).toFixed(2),
    );
  }

  clear(): void {
    this._items.length = 0;
    console.log('O seu atual carrinho foi zerado!');
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }
}
