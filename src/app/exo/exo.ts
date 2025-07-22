import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-exo',
  imports: [FormsModule, RouterModule, RouterOutlet],
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
