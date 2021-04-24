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

test('10 / 0', () => {
    expect(operations.division(10, 0)).toBe(0);
});

test('10 / 2', () => {
    expect(operations.division(10, 2)).toBe(5);
});

test('10 / 2', () => {
    expect(operations.tablaMultiplicar(10, 2)).toBe(5);
});