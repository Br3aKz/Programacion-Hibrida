import { FiguraGeometrica } from '../FiguraGeometrica/figura-geometrica';

export class Circulo extends FiguraGeometrica {
  radio: number;

  constructor(radio: number) {
    super();
    this.radio = radio;
  }

  calcularPerimetro(): number {
    return 2 * Math.PI * this.radio;
  }
}