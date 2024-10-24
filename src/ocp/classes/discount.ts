export abstract class Discount {
  abstract calculate(price: number): number;
}

export class FiftyPercentDiscount extends Discount {
  private readonly discount: number = 50

  calculate(price: number): number {
      return price - (price * this.discount/100)
  }
}

export class TenPercentDiscount extends Discount {
  private readonly discount: number = 10;

  calculate(price: number): number {
    return price - (price * this.discount) / 100;
  }
}

export class NoDiscount extends Discount {
  calculate(price: number): number {
    return price;
  }
}
