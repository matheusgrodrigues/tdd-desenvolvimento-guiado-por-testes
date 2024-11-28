import Money, { Expression } from "./Money";

class Bank {
   constructor() {}

   reduce(source: Expression, to: string): Money {
      return source.reduce(to);
   }
}

export default Bank;
