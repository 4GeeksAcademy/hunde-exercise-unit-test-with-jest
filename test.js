// currencyConverter.js

// Convert dollars to yen
function fromDollarToYen(dollars) {
    const oneDollarIsEuro = 1 / oneEuroIs.USD;
    const dollarsInEuro = dollars * oneDollarIsEuro;
    return dollarsInEuro * oneEuroIs.JPY;
}

// Convert yen to pounds
function fromYenToPound(yen) {
    const yenInEuro = yen / oneEuroIs.JPY;
    return yenInEuro * oneEuroIs.GBP;
}

module.exports = { fromDollarToYen, fromYenToPound };
// currencyConverter.test.js

const { fromDollarToYen, fromYenToPound } = require('./currencyConverter');

describe('Currency Converter Tests', () => {
    
    // Test the conversion from dollars to yen
    test('should convert dollars to yen correctly', () => {
        const dollars = 10;
        const expectedYen = (dollars / 1.07) * 156.5;
        expect(fromDollarToYen(dollars)).toBeCloseTo(expectedYen, 2);
    });

    // Test the conversion from yen to pounds
    test('should convert yen to pounds correctly', () => {
        const yen = 1000;
        const expectedPounds = (yen / 156.5) * 0.87;
        expect(fromYenToPound(yen)).toBeCloseTo(expectedPounds, 2);
    });
});
