class Franc {
   private amount: number;

   constructor(amount: number) {
      this.amount = amount;
   }

   times(multiplier: number): Franc {
      return new Franc(this.amount * multiplier);
   }

   equals(object: object): boolean {
      const dollar = object as Franc;
      return this.amount === dollar.amount;
   }
}

export default Franc;
