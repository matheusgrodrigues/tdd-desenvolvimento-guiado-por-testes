import Money from "./Money";

class Dollar extends Money {
   constructor(amount: number, currency: string | null) {
      super(amount, currency);
   }

   times(multiplier: number): Money {
      return Money.dollar(this.amount * multiplier);
   }

   currency(): string | null {
      return this._currency;
   }
}

export default Dollar;
