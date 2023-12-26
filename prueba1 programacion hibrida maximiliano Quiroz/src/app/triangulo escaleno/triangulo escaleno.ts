import { FiguraGeometrica } from '../FiguraGeometrica/figura-geometrica';

export class TrianguloEscaleno extends FiguraGeometrica {
  private ladoA: number;
  private ladoB: number;
  private ladoC: number;

  constructor(lado1: number, lado2: number, lado3: number) {
    super();
    this.ladoA = lado1;
    this.ladoB = lado2;
    this.ladoC = lado3;
  }

  calcularPerimetro(): number {
    return this.ladoA + this.ladoB + this.ladoC;
  }
}