import Dollar from "../src/MultiMoeda/Dollar";

/*
 * Objetivo
 *
 * Multiplicação: 5*2 = $10 -> DONE
 * Tornar "quantidade" privada
 * Efeitos colaterais em Dollar?
 * Arredondamento de dinheiro ?
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
      it("Multiplicação", () => {
         const five = new Dollar(5);
         five.times(2);
         expect(five.amount).toBe(10);
      });
   });
});
