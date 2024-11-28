import Bank from "../../../src/MultiMoeda/Bank";
import Money from "../../../src/MultiMoeda/Money";

/*
 * Objetivo
 *
 * Arredondamento de dinheiro ?
 * hashCode()
 * Igualdade de null
 * Igualdade de objeto
 * $5 + $5 = $10
 *
 */

describe("MultiMoeda", () => {
   /*
    * Testes -> Dollar
    *
    * Sem classe Dollar. -> [DONE].
    * Sem construtor. -> [DONE].
    * Sem método times() -> [DONE].
    * Sem atributo amount. -> [DONE].
    *
    */
   describe("Dollar", () => {
      it("Test Multiplication", () => {
         const five = Money.dollar(5);
         expect(Money.dollar(10).equals(five.times(2)));
         expect(Money.dollar(15).equals(five.times(3)));
      });

      it("Test Equality", () => {
         expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
         expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy();
         expect(Money.franc(5).equals(Money.dollar(5))).toBeFalsy();
      });

      it("Test Currency", () => {
         expect(Money.dollar(1).currency()).toBe("USD");
         expect(Money.franc(1).currency()).toBe("CHF");
      });

      it("Test SimpleAddition", () => {
         const five = Money.dollar(5);
         const sum = five.plus(five);
         const bank = new Bank();
         const reduced = bank.reduce(sum, "USD");

         expect(Money.dollar(10)).toEqual(reduced);
      });
   });
});
