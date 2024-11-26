import Money from "./Money";

class Franc extends Money {
   constructor(amount: number) {
      super();
      this.amount = amount;
   }

   times(multiplier: number): Money {
      return new Franc(this.amount * multiplier);
   }
}

export default Franc;
