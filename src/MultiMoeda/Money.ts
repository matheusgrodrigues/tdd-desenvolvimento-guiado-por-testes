class Money {
   protected amount: number = 0;

   equals(object: object): boolean {
      const money = object as Money;
      return this.amount === money.amount;
   }
}

export default Money;
