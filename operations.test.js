import * as operations from "./operations";

test('there is no I in Maru', () => {
    expect(operations.texto('Maru')).not.toMatch(/I/);
});

test('5 + 5 is equal to 10', () => {
    expect(operations.suma(5, 5)).toBe(10);
});

test('4 - 2 is equal to 2', () => {
    expect(operations.resta(4, 2)).toBe(2);
});

test('5 * 10 is equal to 50', () => {
    expect(operations.multiplicacion(5, 10)).toBe(50);
});

describe('Division tests', () => {
    test('10 / 0', () => {
        expect(operations.division(10, 0)).toBe(0);
    });
    test('10 / 2', () => {
        expect(operations.division(10, 2)).toBe(5);
    });
});

describe('multiplication tables tests', () => {
    test('tablaMultiplicar undefined', () => {
        expect(operations.tablaMultiplicar(2, undefined)).toStrictEqual([0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
    });
    test('multiplying 2 for 5', () => {
        expect(operations.tablaMultiplicar(2, 4)).toEqual([0, 2, 4, 6, 8]);
    }); 
});

test('the power of 5 to 3 is equal to 125', () => {
    expect(operations.potencia(5, 3)).toBe(125);
});

test('the square of 5 plus the square of 10 is equal to 125', () => {
    expect(operations.anidada(5, 10)).toBe(125);
});

test('adding two left ceros to the left', () => {
    expect(operations.cerosIzq(15, 4)).toBe("0015");
});