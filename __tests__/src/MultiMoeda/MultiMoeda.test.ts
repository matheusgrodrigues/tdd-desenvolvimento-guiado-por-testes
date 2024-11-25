import Dollar from "../../../src/MultiMoeda/Dollar";

/*
 * Objetivo
 *
 * Multiplicação: 5*2 = $10 -> DONE
 * Tornar "quantidade" privada
 * Efeitos colaterais em Dollar? -> DONE
 * Arredondamento de dinheiro ?
 * equals() -> DONE
 * hashCode()
 *
 */

describe("MultiMoeda", () => {
   /*
    * Testes -> Dollar
    *
    * Sem classe Dollar. -> DONE.
    * Sem construtor. -> DONE.
    * Sem método times() -> DONE.
    * Sem atributo amount. -> DONE.
    *
    */
   describe("Dollar", () => {
      it("Test Multiplication", () => {
         const five = new Dollar(5);
         let product = five.times(2);

         expect(product.amount).toBe(10);
         product = five.times(3);

         expect(product.amount).toBe(15);
      });

      it("Test Equality", () => {
         expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
         expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();
      });
   });
});
