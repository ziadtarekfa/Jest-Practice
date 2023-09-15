const sum = require('../sum');

it("Add two numbers", () => {
    expect(sum(10, 20)).toBe(30);
})

it("Add two numbers", () => {
    expect(sum(30, 20)).toBe(50);
})