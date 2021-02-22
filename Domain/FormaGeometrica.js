const StringBuffer = require('stringbuffer');
var numeral = require('numeral');

const FORMAS = {
  Cuadrado: 1,
  TrianguloEquilatero: 2,
  Circulo: 3,
  Trapecio: 4
}

const IDIOMAS = {
  Castellano: 1,
  Ingles: 2
}


class FormaGeometrica {

  constructor(tipo, ancho) {
    this.tipo = tipo;
    this._lado = ancho;
  }

  set tipo(t) {
    this._tipo = t;
  }
  get tipo() {
    return this._tipo;
  }

  static testSumar(a, b) {
    return a + b;
  }

 

  calcularArea() {
    switch (this.tipo) {
      case FORMAS.Cuadrado: return Math.pow(this._lado, 2);
      case FORMAS.Circulo: return Math.PI * (this._lado / 2) * (this._lado / 2);
      case FORMAS.TrianguloEquilatero: return (Math.sqrt(3) / 4) * Math.pow(this._lado, 2);
      default:
        throw new Error('Forma desconocida.')
    }
  }

  calcularPerimetro() {

    switch (this.tipo) {
      case FORMAS.Cuadrado: return this._lado * 4;
      case FORMAS.Circulo: return Math.PI * this._lado;
      case FORMAS.TrianguloEquilatero: return this._lado * 3;
      default:
        throw new Error('Forma desconocida.')
    }
  }

  static fmtNumber(value) {
    return numeral(value).format('0,0.00');
  }
  static obtenerLinea(cantidad, area, perimetro, tipo, idioma) {


    if (cantidad > 0) {
      if (idioma == IDIOMAS.Castellano)
        return `${cantidad} ${this.traducirForma(tipo, cantidad, idioma)} | Area ${this.fmtNumber(area)} | Perimetro ${this.fmtNumber(perimetro)} <br/>`;

      return `${cantidad} ${this.traducirForma(tipo, cantidad, idioma)} | Area ${this.fmtNumber(area)} | Perimeter ${this.fmtNumber(perimetro)} <br/>`;
    }

    return '';
  }

  static traducirForma(tipo, cantidad, idioma) {
    switch (tipo) {
      case FORMAS.Cuadrado:
        if (idioma == IDIOMAS.Castellano) return cantidad == 1 ? "Cuadrado" : "Cuadrados";
        else return cantidad == 1 ? "Square" : "Squares";
      case FORMAS.Circulo:
        if (idioma == IDIOMAS.Castellano) return cantidad == 1 ? "Círculo" : "Círculos";
        else return cantidad == 1 ? "Circle" : "Circles";
      case FORMAS.TrianguloEquilatero:
        if (idioma == IDIOMAS.Castellano) return cantidad == 1 ? "Triángulo" : "Triángulos";
        else return cantidad == 1 ? "Triangle" : "Triangles";
    }

    return '';
  }

   static imprimir(formas, idioma) {
 //   StringBuilder.extend('string');
    var sb = new StringBuffer();
   

    if (!formas || formas.length==0) {
      if (idioma == IDIOMAS.Castellano)
        sb.append("<h1>Lista vacía de formas!</h1>");
      else
        sb.append("<h1>Empty list of shapes!</h1>");
    }
    else {
      // Hay por lo menos una forma
      // HEADER
      if (idioma == IDIOMAS.Castellano)
        sb.append("<h1>Reporte de Formas</h1>");
      else
        // default es inglés
        sb.append("<h1>Shapes report</h1>");

      var numeroCuadrados = 0;
      var numeroCirculos = 0;
      var numeroTriangulos = 0;

      var areaCuadrados = 0;
      var areaCirculos = 0;
      var areaTriangulos = 0;

      var perimetroCuadrados = 0;
      var perimetroCirculos = 0;
      var perimetroTriangulos = 0;

      for (let i = 0; i < formas.length; i++) {
        if (formas[i].tipo == FORMAS.Cuadrado) {
          numeroCuadrados++;
          areaCuadrados += formas[i].calcularArea();
          perimetroCuadrados += formas[i].calcularPerimetro();
        }
        if (formas[i].tipo == FORMAS.Circulo) {
          numeroCirculos++;
          areaCirculos += formas[i].calcularArea();
          perimetroCirculos += formas[i].calcularPerimetro();
        }
        if (formas[i].tipo == FORMAS.TrianguloEquilatero) {
          numeroTriangulos++;
          areaTriangulos += formas[i].calcularArea();
          perimetroTriangulos += formas[i].calcularPerimetro();
        }
      }

      sb.append(this.obtenerLinea(numeroCuadrados, areaCuadrados, perimetroCuadrados, FORMAS.Cuadrado, idioma));
      sb.append(this.obtenerLinea(numeroCirculos, areaCirculos, perimetroCirculos, FORMAS.Circulo, idioma));
      sb.append(this.obtenerLinea(numeroTriangulos, areaTriangulos, perimetroTriangulos, FORMAS.TrianguloEquilatero, idioma));

      // FOOTER
      sb.append("TOTAL:<br/>");
      sb.append(numeroCuadrados + numeroCirculos + numeroTriangulos + " " + (idioma == IDIOMAS.Castellano ? "formas" : "shapes") + " ");
      sb.append((idioma == IDIOMAS.Castellano ? "Perimetro " : "Perimeter ") + this.fmtNumber(perimetroCuadrados + perimetroTriangulos + perimetroCirculos) + " ");
      sb.append("Area " + this.fmtNumber(areaCuadrados + areaCirculos + areaTriangulos));
    }

    return sb.toString();
  }




}

module.exports = { IDIOMAS, FORMAS, FormaGeometrica };