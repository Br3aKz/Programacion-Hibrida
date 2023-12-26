import { FiguraGeometrica } from '../FiguraGeometrica/figura-geometrica';

export class TrianguloEquilatero extends FiguraGeometrica {
  lado: number;

  constructor(lado: number) {
    super();
    this.lado = lado;
  }

  calcularPerimetro(): number {
    return 3 * this.lado;
  }
}