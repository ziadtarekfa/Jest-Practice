const sayHello = require('../say');

test('Say Hello', () => {
    expect(sayHello()).toBe("Say Hello");
});