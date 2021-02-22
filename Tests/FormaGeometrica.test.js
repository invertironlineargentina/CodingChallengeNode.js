const frmModule = require("../Domain/FormaGeometrica");
const FormaGeometrica = frmModule.FormaGeometrica;


test('Test: lista vacia', () => {
  expect(FormaGeometrica.imprimir([], 1)).toBe("<h1>Lista vacía de formas!</h1>");
});

test('Test: lista vacia en ingles', () => {
  expect(FormaGeometrica.imprimir([], 2)).toBe("<h1>Empty list of shapes!</h1>");
});

test('Test: Lista con un cuadrado', () => {
  const cuadrados = [new FormaGeometrica(frmModule.FORMAS.Cuadrado, 5)];

  expect(FormaGeometrica.imprimir(cuadrados, frmModule.IDIOMAS.Castellano))
    .toBe("<h1>Reporte de Formas</h1>1 Cuadrado | Area 25.00 | Perimetro 20.00 <br/>TOTAL:<br/>1 formas Perimetro 20.00 Area 25.00");
});


test('Test: Lista con más cuadrados - ingles', () => {
  const cuadrados = [new FormaGeometrica(frmModule.FORMAS.Cuadrado, 5),
  new FormaGeometrica(frmModule.FORMAS.Cuadrado, 1),
  new FormaGeometrica(frmModule.FORMAS.Cuadrado, 3)
  ];

  expect(FormaGeometrica.imprimir(cuadrados, frmModule.IDIOMAS.Ingles))
    .toBe("<h1>Shapes report</h1>3 Squares | Area 35.00 | Perimeter 36.00 <br/>TOTAL:<br/>3 shapes Perimeter 36.00 Area 35.00");
});



test('Test: Lista con más tipos - ingles', () => {
  const formas = [
    new FormaGeometrica(frmModule.FORMAS.Cuadrado, 5),
    new FormaGeometrica(frmModule.FORMAS.Circulo, 3),
    new FormaGeometrica(frmModule.FORMAS.TrianguloEquilatero, 4),
    new FormaGeometrica(frmModule.FORMAS.Cuadrado, 2),
    new FormaGeometrica(frmModule.FORMAS.TrianguloEquilatero, 9),
    new FormaGeometrica(frmModule.FORMAS.Circulo, 2.75),
    new FormaGeometrica(frmModule.FORMAS.TrianguloEquilatero, 4.2)
  ];

  expect(FormaGeometrica.imprimir(formas, frmModule.IDIOMAS.Ingles))
    .toBe("<h1>Shapes report</h1>2 Squares | Area 29.00 | Perimeter 28.00 <br/>2 Circles | Area 13.01 | Perimeter 18.06 <br/>3 Triangles | Area 49.64 | Perimeter 51.60 <br/>TOTAL:<br/>7 shapes Perimeter 97.66 Area 91.65");
});


test('Test: Lista con más tipos - castellano', () => {
  const formas = [
    new FormaGeometrica(frmModule.FORMAS.Cuadrado, 5),
    new FormaGeometrica(frmModule.FORMAS.Circulo, 3),
    new FormaGeometrica(frmModule.FORMAS.TrianguloEquilatero, 4),
    new FormaGeometrica(frmModule.FORMAS.Cuadrado, 2),
    new FormaGeometrica(frmModule.FORMAS.TrianguloEquilatero, 9),
    new FormaGeometrica(frmModule.FORMAS.Circulo, 2.75),
    new FormaGeometrica(frmModule.FORMAS.TrianguloEquilatero, 4.2)
  ];

  expect(FormaGeometrica.imprimir(formas, frmModule.IDIOMAS.Castellano))
    .toBe("<h1>Reporte de Formas</h1>2 Cuadrados | Area 29.00 | Perimetro 28.00 <br/>2 Círculos | Area 13.01 | Perimetro 18.06 <br/>3 Triángulos | Area 49.64 | Perimetro 51.60 <br/>TOTAL:<br/>7 formas Perimetro 97.66 Area 91.65");
});

