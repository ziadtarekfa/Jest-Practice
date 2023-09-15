const filterInput = require('../filterInput');
describe('Validate Input', () => {

    it('Check if input is recevied correctly', () => {
        expect(filterInput("Ziad")).toBe("Ziad");
    });

    it('Check if input is trimmed', () => {
        expect(filterInput(" Ziad ")).toBe("Ziad");
    });

})