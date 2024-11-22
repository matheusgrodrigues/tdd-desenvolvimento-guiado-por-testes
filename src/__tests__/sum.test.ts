function sum(a: number, b: number): number {
   return a + b;
}

describe("sum", () => {
   it("should return the correct sum", () => {
      expect(sum(2, 3)).toBe(5);
   });
});
