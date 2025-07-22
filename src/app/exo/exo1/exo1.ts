import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-exo1',
  imports: [],
  templateUrl: './exo1.html',
  styleUrl: './exo1.css'
})
export class Exo1 {
  maMethode(): void {

  }
  second = signal(0)
  isRunning = signal(false);
  intervalNumber = signal(0);


  start(): void {
    this.intervalNumber.set(
      setInterval(() => {
        this.second.set(this.second() + 1)

      }, 1000)
    )
  }

  pause(): void {
    clearInterval(this.intervalNumber())
    this.isRunning.set(false)
  }
  reset(): void {
    this.pause()
    this.second.set(0)
  }
}
