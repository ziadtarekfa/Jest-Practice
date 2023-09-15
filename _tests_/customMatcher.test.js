const sum = require('../sum');

expect.extend({
    toBeLargerThan(actual, expected) {

        const pass = actual > expected;
        if (pass) {
            return {
                message: () => {
                    `Expected ${actual} to be larger than ${expected}`
                },
                pass: true
            }
        }
        else {
            return {
                message: () => {
                    `Error:Expected ${actual} to be larger than ${expected}`
                },
                pass: false
            }
        }
    }
});

it('Check if sum is larger than 10', () => {
    expect(sum(2, 2)).toBeLargerThan(3);
});

