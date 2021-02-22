const frmModule =require("../Domain/FormaGeometrica");
const FormaGeometrica=frmModule.FormaGeometrica;


test('sumar 2+3 es igual a 5', () => {
  expect(FormaGeometrica.testSumar(2,3)).toBe(5);
});


test('Trian. Equ. Perimetro : lado=9 x 3 = 27', () => {
  const obj=new FormaGeometrica(2,9);
  expect(obj.calcularPerimetro()).toBe(27);
});

test('Trian. Equ. Area : lado=8 ^ 2 = 64', () => {
  const obj=new FormaGeometrica(1,8);
  expect(obj.calcularArea()).toBe(Math.pow(8,2));
});