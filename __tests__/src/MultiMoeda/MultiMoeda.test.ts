import Dollar from "../../../src/MultiMoeda/Dollar";
import Franc from "../../../src/MultiMoeda/Franc";

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

         expect(new Dollar(10).equals(five.times(2)));
         expect(new Dollar(15).equals(five.times(3)));
      });

      it("Test Equality", () => {
         expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
         expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();
      });

      it("Test Franc Multiplication", () => {
         const five = new Franc(5);

         expect(new Franc(10).equals(five.times(2)));
         expect(new Franc(15).equals(five.times(3)));
      });
   });
});
