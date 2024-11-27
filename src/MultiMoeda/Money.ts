class Money {
   protected amount: number = 0;
   protected _currency: string | null = "";

   constructor(amount: number, currency: string | null) {
      this.amount = amount;
      this._currency = currency;
   }

   equals(object: object): boolean {
      const money = object as Money;
      return this.amount === money.amount && object.constructor === this.constructor;
   }

   times(multiplier: number): Money {
      return new Money(this.amount * multiplier, this._currency);
   }

   currency() {
      return this._currency;
   }

   toString() {
      return `${this.amount} ${this._currency}`;
   }

   static dollar(amount: number): Money {
      const { default: Dolar } = require("./Dollar");
      return new Dolar(amount, "USD");
   }

   static franc(amount: number): Money {
      const { default: Franc } = require("./Franc");
      return new Franc(amount, "CHF");
   }
}

export default Money;
