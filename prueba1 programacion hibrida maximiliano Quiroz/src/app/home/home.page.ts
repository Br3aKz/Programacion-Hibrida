import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  figuraSeleccionada: string = '';

  radioCirculo: number = 0;
  perimetroCirculo: number = 0;

  ladoATriangulo: number = 0;
  ladoBTriangulo: number = 0;
  ladoCTriangulo: number = 0;
  perimetroTriangulo: number = 0;

  calcularPerimetroCirculo() {
    this.perimetroCirculo = 2 * Math.PI * this.radioCirculo;
  }

  calcularPerimetroTriangulo() {
    this.perimetroTriangulo = this.ladoATriangulo + this.ladoBTriangulo + this.ladoCTriangulo;
  }
}