abstract class Money {
   protected amount: number = 0;

   equals(object: object): boolean {
      const money = object as Money;
      return this.amount === money.amount && object.constructor === this.constructor;
   }

   abstract times(multiplier: number): Money;

   static dollar(amount: number): Money {
      const { default: Dolar } = require("./Dollar");
      return new Dolar(amount);
   }

   static franc(amount: number): Money {
      const { default: Franc } = require("./Franc");
      return new Franc(amount);
   }
}

export default Money;
