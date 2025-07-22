import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exo',
  imports: [FormsModule],
  templateUrl: './exo.html',
  styleUrl: './exo.css'
})
export class Exo {
  maVariable: string = 'bonjour';
  twoWay: string = 'bonsoir';

  maMethode(): void {
    this.maVariable = this.twoWay
  }
}
