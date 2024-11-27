import Money from "../../../src/MultiMoeda/Money";

/*
 * Objetivo
 *
 * Multiplicação: 5*2 = $10 -> [DONE]
 * Tornar "quantidade" privada -> [DONE]
 * Efeitos colaterais em Dollar? -> [DONE]
 * Arredondamento de dinheiro ?
 * equals() -> [DONE]
 * hashCode()
 * Igualdade de null
 * Igualdade de objeto
 * 5 CHF *2 = 10 CHF -> [DONE]
 * Duplicação de Dolar/Franco -> [DONE]
 * Igualdade comum -> [DONE]
 * Multiplicação comum -> DONE
 * Comparar Francos com Dólares -> [DONE]
 * Moeda? -> [DONE]
 * Deletar testFrancMultiplication? -> [DONE]
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
   });
});
