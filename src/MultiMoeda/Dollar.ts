import Money from "./Money";

class Dollar extends Money {
   constructor(amount: number) {
      super();
      this.amount = amount;
   }

   times(multiplier: number): Money {
      return new Dollar(this.amount * multiplier);
   }
}

export default Dollar;
