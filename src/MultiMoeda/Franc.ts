import Money from "./Money";

class Franc extends Money {
   constructor(amount: number, currency: string | null) {
      super(amount, currency);
   }

   currency(): string | null {
      return this._currency;
   }
}

export default Franc;
