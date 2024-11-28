export interface Expression {}

class Money implements Expression {
   protected amount: number = 0;
   protected _currency: string | null = "";

   constructor(amount: number, currency: string | null) {
      this.amount = amount;
      this._currency = currency;
   }

   equals(object: object): boolean {
      const money = object as Money;
      return this.amount === money.amount && money._currency === this._currency;
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
      return new Money(amount, "USD");
   }

   static franc(amount: number): Money {
      return new Money(amount, "CHF");
   }

   plus(addend: Money) {
      return new Money(this.amount + addend.amount, this._currency);
   }
}

export default Money;
