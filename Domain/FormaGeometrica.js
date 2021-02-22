const StringBuilder = require('stringbuilder');

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
      case FORMAS.TrianguloEquilatero: return (Math.Sqrt(3) / 4) * Math.pow(this._lado, 2);
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



}

module.exports = { IDIOMAS, FORMAS, FormaGeometrica };