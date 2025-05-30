// ejemplo.test.ts

describe('Funciones básicas', () => {
  function suma(a: number, b: number): number {
    return a + b;
  }

  it('debería sumar dos números correctamente', () => {
    expect(suma(2, 3)).toBe(5);
  });

  it('debería manejar suma con números negativos', () => {
    expect(suma(-1, -1)).toBe(-2);
  });
});
