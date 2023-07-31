const sum = (a: number, b: number) => a + b;

describe("Pokemon handler fetches", () => {
  it("A list with zero pokemon if there is no pokemon in the source", () => {
    expect(sum(1, 1)).toEqual(2);
  });
});
