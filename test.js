const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

const { fromDollarToYen } = require('./app.js');

test('dollar 6 = 639.5 Yen', () => {
    let total = fromDollarToYen(6);
    expect(total).toBe(639.5);
});

const { fromEuroToDollar } = require('./app.js');

test('7 euro = 8.4 USD', () => {
    let total = fromEuroToDollar(7);
    expect(total).toBe(8.4);
});

const { fromYenToPound } = require('./app.js');

test('639.5 Yen = 4 GBP', () => {
    let total = fromYenToPound(639.5);
    expect(total).toBe(4);
});