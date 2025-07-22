import { Component, linkedSignal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-banner',
  imports: [RouterModule],
  templateUrl: './banner.html',
  styleUrl: './banner.css'
})
export class Banner {

  liens = Signal<link[]> = signal([
    { name: 'Demo', url: ['/demo'], isVisible: true },


  ])

}
