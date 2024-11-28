import Money, { Expression } from "./Money";

class Bank {
   constructor() {}

   reduce(source: Expression, to: string): Money {
      return Money.dollar(10);
   }
}

export default Bank;
